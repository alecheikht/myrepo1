package com.app.model.comite;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.app.model.organisation.Organisation;
import com.app.model.presentation.ConfigPresentation;

import lombok.Data;

@Data
@Entity 
@Table(name = "comite") 
public class Comite {
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id; 
	
	@NotNull 
	private String semaine;
	
	@NotNull
	private boolean encours;
	
	@ManyToOne
	@JoinColumn(name = "organisation_id")
	@NotNull 
	private Organisation organisation;
	
	@ManyToOne
	@JoinColumn(name = "configpresent_id")
	@NotNull 
	private ConfigPresentation configPresentation;
	

}
