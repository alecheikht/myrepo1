package com.app.identity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.ldap.search.LdapUserSearch;
import org.springframework.security.ldap.userdetails.LdapAuthoritiesPopulator;
import org.springframework.stereotype.Service;

import com.app.model.user.User;
import com.app.repo.UserRepo;

@Service
public class CustomLdapUserDetailsService extends org.springframework.security.ldap.userdetails.LdapUserDetailsService{
    public CustomLdapUserDetailsService(LdapUserSearch userSearch, LdapAuthoritiesPopulator authoritiesPopulator) {
		super(userSearch, authoritiesPopulator);
		// TODO Auto-generated constructor stub
	}
    
	public CustomLdapUserDetailsService(LdapUserSearch userSearch) {
	super(userSearch);
	// TODO Auto-generated constructor stub
	}

	@Autowired
    private UserRepo userRepo;
	private final AccountStatusUserDetailsChecker detailsChecker = new AccountStatusUserDetailsChecker();
    

	
	@Override
    public final UserDetails loadUserByUsername(String username) throws UsernameNotFoundException, DisabledException {
		return null;

        /*final User user = userRepo.findOneByUserId(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        TokenUser currentUser;
        if (user.isActive() == true){
            currentUser = new TokenUser(user);
        }
        else{
            throw new DisabledException("User is not activated (Disabled User)");
            //If pending activation return a disabled user
            //currentUser = new TokenUser(user, false);
        }
        detailsChecker.check(currentUser);
        return currentUser;*/
        
    }

}
