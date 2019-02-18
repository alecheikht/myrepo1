package com.app.model.presentation;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "current_config_presentation") 
public class CurrentConfigPresentation {
	@Id
	@Column(name = "organisation_id")
	private long organisationId;
	
	@Column(name = "configpresent_id")
	private long configpresentId;
}
