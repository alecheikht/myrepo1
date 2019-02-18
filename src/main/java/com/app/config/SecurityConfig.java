package com.app.config;
import com.app.identity.*;
import com.app.model.user.Role;
import com.app.model.user.User;
import com.app.repo.UserRepo;

import javax.naming.ldap.LdapName;
import javax.naming.ldap.Rdn;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.encoding.LdapShaPasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.*;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import org.springframework.core.annotation.Order;
import org.springframework.ldap.core.ContextSource;
import org.springframework.ldap.core.DirContextAdapter;
import org.springframework.ldap.core.DirContextOperations;
import org.springframework.ldap.core.support.BaseLdapPathContextSource;
import org.springframework.security.ldap.DefaultSpringSecurityContextSource;
import org.springframework.security.ldap.SpringSecurityLdapTemplate;
import org.springframework.security.ldap.authentication.BindAuthenticator;
import org.springframework.security.ldap.authentication.LdapAuthenticationProvider;
import org.springframework.security.ldap.search.FilterBasedLdapUserSearch;
import org.springframework.security.ldap.search.LdapUserSearch;
import org.springframework.security.ldap.userdetails.LdapAuthoritiesPopulator;
import org.springframework.security.ldap.userdetails.LdapUserDetailsService;
import org.springframework.security.ldap.userdetails.UserDetailsContextMapper;


@Configuration
@PropertySource("classpath:application.properties")
@EnableWebSecurity
@Order(1)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
    @Value("${ldap.provider.url}")
    private String providerUrl;

    @Value("${ldap.provider.userdn}")
    private String providerUserDn;

    @Value("${ldap.provider.password}")
    private String providerPassword;

    @Value("${ldap.user.dn.patterns}")
    private String userDnPatterns;
    
    @Value("${ldap.puma}")
    private boolean isLdapPuma;

    public SecurityConfig() {
        /*
         * Ignores the default configuration, useless in our case (session management, etc..)
         */
        super(true);
    }
    
    
	@Bean
	public CustomLdapUserDetailsService customLdapUserDetailsService() throws Exception {
		CustomLdapUserDetailsService uds = new CustomLdapUserDetailsService(filterBasedLdapUserSearch(), ldapAuthoritiesPopulator());
		uds.setUserDetailsMapper(userDetailsContextMapper());
		return uds;
	}
	
	@Bean
	public LdapUserDetailsService ldapUserDetailsService() {
		try {
			return customLdapUserDetailsService();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	@Autowired
    private UserRepo userRepo;

	@Bean
	public UserDetailsContextMapper userDetailsContextMapper() {
		return new UserDetailsContextMapper() {

			@Override
			public void mapUserToContext(UserDetails user, DirContextAdapter ctx) {				
			}

			@Override
			public UserDetails mapUserFromContext(DirContextOperations ctx, String username, Collection<? extends GrantedAuthority> authorities) {				
				Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();
				grantedAuthorities.addAll(authorities);
				GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(Role.USER.toString());
				grantedAuthorities.add(grantedAuthority);
				
				/////////////////
				final User user = userRepo.findOneByUserId(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
		        TokenUser currentUser;
		        if (user.isActive() == true){
		            currentUser = new TokenUser(user);
		        }
		        else{
		            throw new DisabledException("User is not activated (Disabled User)");
		            //If pending activation return a disabled user
		            //currentUser = new TokenUser(user, false);
		        }
		        
		        return currentUser;
				
				/////////////////
				//return new TokenUser(new org.springframework.security.core.userdetails.User(username, "1", grantedAuthorities));
				//return new org.springframework.security.core.userdetails.User(username, "1", grantedAuthorities);
			}
		};

	}
    


    @Bean
    LdapAuthoritiesPopulator ldapAuthoritiesPopulator() throws Exception {

        /*
          Specificity here : we don't get the Role by reading the members of available groups (which is implemented by
          default in Spring security LDAP), but we retrieve the groups from the field memberOf of the user.
         */
        class MyLdapAuthoritiesPopulator implements LdapAuthoritiesPopulator {

            SpringSecurityLdapTemplate ldapTemplate;
            public final String[] GROUP_ATTRIBUTE = {"cn"};
            public final String GROUP_MEMBER_OF = "memberof";

            MyLdapAuthoritiesPopulator(ContextSource contextSource) {
                ldapTemplate = new SpringSecurityLdapTemplate(contextSource);
            }

            @Override
            public Collection<? extends GrantedAuthority> getGrantedAuthorities(DirContextOperations userData, String username) {

                String[] groupDns = userData.getStringAttributes(GROUP_MEMBER_OF);

                String roles = Stream.of(groupDns).map(groupDn -> {
                    LdapName groupLdapName = (LdapName) ldapTemplate.retrieveEntry(groupDn, GROUP_ATTRIBUTE).getDn();
                    // split DN in its different components et get only the last one (cn=my_group)
                    // getValue() allows to only get get the value of the pair (cn=>my_group)
                    return groupLdapName.getRdns().stream().map(Rdn::getValue).reduce((a, b) -> b).orElse(null);
                }).map(x -> (String)x).collect(Collectors.joining(","));

                return AuthorityUtils.commaSeparatedStringToAuthorityList(roles);
            }
        }

        return new MyLdapAuthoritiesPopulator(contextSource());
    }

    /**
     * Configure AuthenticationManagerBuilder to use the specified DetailsService.
     * @param auth the {@link AuthenticationManagerBuilder} à utiliser
     * @throws Exception
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        /*
            see this article : https://spring.io/guides/gs/authenticating-ldap/
            We  redefine our own LdapAuthoritiesPopulator which need ContextSource().
            We need to delegate the creation of the contextSource out of the builder-configuration.
        */

    	//if(isLdapPuma) {
	    	LdapAuthenticationProvider ldapAuthenticationProvider=new LdapAuthenticationProvider(bindAuthenticator());
	    	ldapAuthenticationProvider.setUserDetailsContextMapper(userDetailsContextMapper());
	    	auth.authenticationProvider(ldapAuthenticationProvider);
    	/*}else {
    		
	        auth
            .ldapAuthentication()
                .userDnPatterns("uid={0},ou=people")
                .groupSearchBase("ou=groups")
            .contextSource(contextSource())
            .passwordCompare()
                .passwordEncoder(new LdapShaPasswordEncoder())
                .passwordAttribute("userPassword");
    		
    	}*/

    }
    
    private BindAuthenticator bindAuthenticator() {
        BindAuthenticator ldapAuthenticator = new BindAuthenticator(contextSource());
        ldapAuthenticator.setUserSearch(filterBasedLdapUserSearch());
        //ldapAuthenticator.setUserDnPatterns(ldapProperties.getDnPattern());
        return ldapAuthenticator;
    }
    
 
    private FilterBasedLdapUserSearch filterBasedLdapUserSearch() {
        return new FilterBasedLdapUserSearch("",
        		"(&(objectCategory=Person)(sAMAccountName={0}))", contextSource());
    }
    


   /* @Bean
    public BaseLdapPathContextSource contextSource() throws Exception {
        DefaultSpringSecurityContextSource contextSource = new DefaultSpringSecurityContextSource(providerUrl);
        contextSource.setUserDn(providerUserDn);
        contextSource.setPassword(providerPassword);
        return contextSource;
    }*/
    
    @Bean
    public DefaultSpringSecurityContextSource contextSource() {
           	DefaultSpringSecurityContextSource contextSource =   new DefaultSpringSecurityContextSource(
                Collections.singletonList(providerUrl), userDnPatterns);
        contextSource.setUserDn(providerUserDn);
        contextSource.setPassword(providerPassword);
        return contextSource;
    	
    	/*DefaultSpringSecurityContextSource contextSource =   new DefaultSpringSecurityContextSource(
                Collections.singletonList("ldap://10.49.52.8:389"), "DC=puma,DC=lan");
        contextSource.setUserDn("CN=gu_pic_uma,OU=Users,OU=FR-Paris,DC=puma,DC=lan");
        contextSource.setPassword("wnx8cCL0YAz05YurJxU1");
        return contextSource;*/
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        /*
          Overloaded to expose Authenticationmanager's bean created by configure(AuthenticationManagerBuilder).
           This bean is used by the AuthenticationController.
         */
        return super.authenticationManagerBean();
    }

	 

    @Autowired
    private TokenUtil tokenUtil;

    @Override
    public void configure(WebSecurity web) throws Exception {
        // Filters will not get executed for the resources
        web.ignoring().antMatchers("/", "/resources/**", "/static/**", "/public/**", "/webui/**", "/h2-console/**"
            , "/configuration/**", "/swagger-ui/**", "/swagger-resources/**", "/api-docs", "/api-docs/**", "/v2/api-docs/**"
            , "/*.html", "/**/*.html" ,"/**/*.css","/**/*.js","/**/*.png","/**/*.jpg", "/**/*.gif", "/**/*.svg", "/**/*.ico", "/**/*.ttf","/**/*.woff","/**/*.otf");
    }

    //If Security is not working check application.properties if it is set to ignore
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .exceptionHandling().and()
        .anonymous().and()
        // Disable Cross site references
        .csrf().disable()
        // Add CORS Filter
        .addFilterBefore(new CorsFilter(), ChannelProcessingFilter.class)
        // Custom Token based authentication based on the header previously given to the client
        .addFilterBefore(new VerifyTokenFilter(tokenUtil), UsernamePasswordAuthenticationFilter.class)
        // custom JSON based authentication by POST of {"username":"<name>","password":"<password>"} which sets the token header upon authentication
        .addFilterBefore(new GenerateTokenForUserFilter ("/session", authenticationManagerBean(), tokenUtil), UsernamePasswordAuthenticationFilter.class)
        .authorizeRequests()
        .anyRequest().authenticated()
        ;
       
    	
    }

    /*
    * If You want to store encoded password in your databases and authenticate user
    * based on encoded password then uncomment the below method and provde an encoder

    //@Autowired
    //private UserDetailsService userDetailsService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
    }
    */
    
}
