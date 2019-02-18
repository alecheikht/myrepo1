package com.app.api.presentation;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.comite.Comite;
import com.app.model.presentation.AbstractConfigSlide;
import com.app.model.presentation.AbstractSlide;
import com.app.repo.ComiteRepo;
import com.app.repo.ConfigSlideRepo;
import com.app.repo.SlideRepo;

@RestController
public class PresentaionController {
	 @Autowired private SlideRepo slideRepo;
	 @Autowired private ComiteRepo comiteRepo;
	 @Autowired private ConfigSlideRepo configSlideRepo;
	 
	 @RequestMapping(value = "/slide", method = RequestMethod.GET, produces = {"application/json"})
		public AbstractSlide getSlideByComiteAndConfigSlide(@RequestParam(value = "comiteId", required = true) Long comiteId, @RequestParam(value = "configSlideId", required = true) Long configSlideId,HttpServletRequest req) {
		 Comite comite=comiteRepo.findOneById(comiteId).get();
		 AbstractConfigSlide configSlide = configSlideRepo.findOneById(configSlideId).get();
		 return slideRepo.findOneByComiteAndConfigSlide(comite, configSlide).get();
		 
	 }
}
