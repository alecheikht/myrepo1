package com.app.model.presentation;

import javax.persistence.*;
import lombok.Data;

@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Table(name = "config_presentation") 
@DiscriminatorColumn(name = "TYPE")
public abstract class AbstractConfigSlide {
	@Id
	@GeneratedValue
    protected  Long id;
}
