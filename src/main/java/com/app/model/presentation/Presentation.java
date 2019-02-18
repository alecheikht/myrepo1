package com.app.model.presentation;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Data;

@Data
@Entity
@DiscriminatorValue("P")
public class Presentation extends AbstractSlide {

}
