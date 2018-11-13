package com.app.identity;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.ldap.userdetails.LdapUserDetails;

import com.app.model.user.Role;
import com.app.model.user.User;

public class TokenUser extends org.springframework.security.core.userdetails.User {
    private User user;

    //For returning a normal user
    public TokenUser(User user) {
        super( user.getUserId(), user.getPassword(), AuthorityUtils.createAuthorityList(user.getRole().toString()  )  );
        //super(user.getUserName(), user.getPassword(), true, true, true, true,  AuthorityUtils.createAuthorityList(user.getRole().toString()));
        this.user = user;
    }
    
    public TokenUser(org.springframework.security.core.userdetails.User user) {
        //super( user.getUserId(), user.getPassword(), AuthorityUtils.createAuthorityList(user.getRole().toString()  )  );
        super(user.getUsername(), "", user.getAuthorities());
        this.user = new User();
        this.user.setUserId(user.getUsername()); 
        this.user.setPassword( user.getPassword());
        
    }

    public User getUser() {
        return user;
    }

    public String getRole() {
        return user.getRole().toString();
    }
}


/*
public class TokenUser implements  org.springframework.security.ldap.userdetails.LdapUserDetails{
    private User user;
    private LdapUserDetails ldapUserDetails;

    //For returning a normal user
    public TokenUser(org.springframework.security.ldap.userdetails.LdapUserDetails ldapUserDetails) {
        //super( user.getUserId(), user.getPassword(), AuthorityUtils.createAuthorityList(user.getRole().toString()  )  );
        //super(user.getUserName(), user.getPassword(), true, true, true, true,  AuthorityUtils.createAuthorityList(user.getRole().toString()));
    	super();
    	this.ldapUserDetails=ldapUserDetails;
        this.user = new User();
        this.user.setUserId(ldapUserDetails.getUsername());
        this.user.setPassword(ldapUserDetails.getPassword());
        //this.user.se
    }
    
    public TokenUser(User user) {

        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public String getRole() {
        return user.getRole().toString();
    }

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return ldapUserDetails.getAuthorities();
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		if(ldapUserDetails!=null) {
			return ldapUserDetails.getPassword();
		}else if(user != null){
			return user.getPassword();
		}
		return null;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		if(ldapUserDetails!=null) {
			return ldapUserDetails.getUsername();
		}else if(user != null){
			return user.getUserId();
		}
		return null;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void eraseCredentials() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getDn() {
		// TODO Auto-generated method stub
		if(ldapUserDetails!=null) {
			return ldapUserDetails.getDn();
		}
		return null;
	}
}
*/