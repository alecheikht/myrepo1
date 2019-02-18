package com.app.model.theme;

import java.util.LinkedList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity 
@Table(name = "theme") 
public class Theme {
	@Id 
	@GeneratedValue
	private Integer id; 

	@NotNull 
	private String name; 
	
	@Column(name = "parent_id")
	private Integer parentId;
	
	/*
	@OneToMany 
	@JoinColumn(name = "parent_id") 
	@OrderColumn
	 @JsonIgnore
	private List<Theme> sousThemes = new LinkedList<Theme>();
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "parent_id",insertable=false,updatable=false)
	private Theme parent;
	*/

}
