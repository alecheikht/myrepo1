package com.app.model.comment;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.app.model.presentation.Slide;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity 
@Table(name = "comment") 
public class Comment {
	@Id 
	@GeneratedValue
	private Long id; 
	
	private String text;
	
	@NotNull
	@ManyToOne 
	@JoinColumn(name = "slide_id") 
	@JsonIgnore
	private Slide slide;
	
}
