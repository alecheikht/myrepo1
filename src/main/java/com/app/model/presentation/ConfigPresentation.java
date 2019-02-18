package com.app.model.presentation;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.app.model.organisation.Organisation;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("P")
public class ConfigPresentation extends AbstractConfigSlide {
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "organisation_id") 
	private Organisation organisation;
	
	@OneToMany	
	@JoinTable
	  (
	      name="config_present_slide",
	      joinColumns={ @JoinColumn(name="configpresent_id", referencedColumnName="id") },
	      inverseJoinColumns={ @JoinColumn(name="configslide_id", referencedColumnName="id", unique=true) }
	  )
	@OrderColumn(name="order_slide")
	private List<AbstractConfigSlide> configSlides; 
	
}
