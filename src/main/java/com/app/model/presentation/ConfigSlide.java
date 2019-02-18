package com.app.model.presentation;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.app.model.image.ConfigImage;
import com.app.model.theme.Theme;

import lombok.Data;

@Data
@Entity
@DiscriminatorValue("S")
public class ConfigSlide extends AbstractConfigSlide {
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "theme_id") 
	private Theme theme;
	
	@OneToMany 
	@JoinColumn(name = "configslide_id") 
	private List<ConfigImage> configImages = new LinkedList<ConfigImage>();
}
