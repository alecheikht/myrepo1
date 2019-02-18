package com.app.model.organisation;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity 
@Table(name = "organisation") 
public class Organisation {
	@Id 
	@GeneratedValue
	private Integer id; 

	@NotNull 
	private String name; 
	
	@Column(name = "parent_id")
	private Integer parentId;
	
	@NotNull 
	private Integer level;
}
