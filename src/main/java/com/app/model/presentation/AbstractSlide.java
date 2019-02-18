package com.app.model.presentation;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonIgnore;

import com.app.model.comite.Comite;

import lombok.Data;

@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Table(name = "presentation") 
@DiscriminatorColumn(name = "TYPE")
public class AbstractSlide {
	@Id
	@GeneratedValue
    protected  Long id;
	
	@ManyToOne
	@JoinColumn(name = "configslide_id")
	@NotNull 
	protected AbstractConfigSlide configSlide;
	
	@ManyToOne
	@JoinColumn(name = "comite_id")
	@NotNull
	@JsonIgnore
	protected Comite comite;
}
