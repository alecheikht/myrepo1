package com.app.model.image;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.app.model.presentation.ConfigSlide;
import com.app.model.theme.Theme;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "config_image") 
public class ConfigImage {
	@Id
	@GeneratedValue
    protected  Long id;
	
	@NotNull 
	private String nom; 
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "configslide_id") 
	@JsonIgnore
	private ConfigSlide configSlide;
}
