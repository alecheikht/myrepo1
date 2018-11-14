package com.app.model.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import javax.persistence.*;
import lombok.*;


@Entity
public class User {
    @Id
    @Getter @Setter private String userId;
    @Getter @Setter private String password = "";
    @Getter @Setter private String firstName;
    @Getter @Setter private String lastName;
    @Getter @Setter private String email;

    @JsonIgnore @Getter @Setter private int    securityProviderId;
    @JsonIgnore @Getter @Setter private int    defaultCustomerId;

    @JsonIgnore @Getter @Setter private String phone;
    @JsonIgnore @Getter @Setter private String address;
    @JsonIgnore @Getter @Setter private String country;
    @JsonIgnore @Getter @Setter private String postal;

    @Enumerated(EnumType.STRING)
    @Getter @Setter private Role role;

    //@JsonIgnore
    @JsonIgnore @Getter @Setter private boolean isActive;
    //@JsonIgnore
    @JsonIgnore @Getter @Setter private boolean isBlocked;
    @JsonIgnore @Getter @Setter private String  secretQuestion;
    @JsonIgnore @Getter @Setter private String  secretAnswer;

    public User(){
        this("new", "PASSWORD", Role.USER, "new", "new", true, "", "", "", "", "", "");
    }

    public User(String userId, String password, String firstName, String lastName){
        this(userId, password, Role.USER, firstName, lastName, true, "", "", "", "", "", "");
    }

    public User(String userId, String password, Role role, String firstName, String lastName){
        this(userId, password, role, firstName, lastName, true, "", "", "", "", "", "");
    }

    public User(String userId, String password, Role role, String firstName, String lastName, boolean isActive){
        this(userId, password, role, firstName, lastName, isActive, "", "", "", "", "", "");
    }


    public User(String userId, String password, Role role, String firstName, String lastName, boolean isActive,
          String phone, String address,  String country, String postal,
         String secretQuestion, String secretAnswer){
        this.setUserId(userId);
        this.setEmail(userId);
        this.setPassword(new BCryptPasswordEncoder().encode(password));
        this.setRole(role);
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setActive(isActive);
        this.setPhone(phone);
        this.setAddress(address);
        this.setCountry(country);
        this.setPostal(postal);
        this.setSecretQuestion(secretQuestion);
        this.setSecretAnswer(secretAnswer);

    }

    public String getFullName(){
        return this.firstName + this.lastName;
    }
}
