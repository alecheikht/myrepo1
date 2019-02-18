package com.app.api.organisation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.app.model.organisation.Organisation;
import com.app.repo.OrganisationRepo;

@RestController
public class OrganisationController {
	 @Autowired private OrganisationRepo organisationRepo;
	 
	 @RequestMapping(value = "/organisationtoplevel", method = RequestMethod.GET)
	 public List<Organisation> getAllTopLevel() {
		 return organisationRepo.findAllByLevel(0);
	 }
}
