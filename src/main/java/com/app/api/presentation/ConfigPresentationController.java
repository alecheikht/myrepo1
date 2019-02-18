package com.app.api.presentation;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.presentation.AbstractConfigSlide;
import com.app.repo.ConfigSlideRepo;


@RestController
public class ConfigPresentationController {
	
	 @Autowired private ConfigSlideRepo configSlideRepo;
	 
	 @RequestMapping(value = "/configs", method = RequestMethod.GET)
	 public List<AbstractConfigSlide> getAllThemes() {
		 return configSlideRepo.findAll();
	 }
	 
	 @RequestMapping(value = "/config", method = RequestMethod.GET, produces = {"application/json"})
		public AbstractConfigSlide getThemeById(@RequestParam(value = "id", required = true) Long configIdParam, HttpServletRequest req) {
		 return configSlideRepo.findOneById(configIdParam).get();
		 
	 }

}
