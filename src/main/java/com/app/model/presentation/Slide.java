package com.app.model.presentation;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.app.model.comment.Comment;

import lombok.Data;

@Data
@Entity
@DiscriminatorValue("S")
public class Slide extends AbstractSlide {
	
	@OneToMany(cascade=CascadeType.ALL) 
	@JoinColumn(name = "slide_id") 
	List<Comment> comment;

}
