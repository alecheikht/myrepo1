package com.app.api.comite;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.comite.Comite;
import com.app.model.comment.Comment;
import com.app.model.organisation.Organisation;
import com.app.model.response.OperationResponse;
import com.app.repo.ComiteRepo;
import com.app.repo.OrganisationRepo;


@RestController
public class ComiteController {
	
	@Autowired private ComiteService comiteService;
	 
	@RequestMapping(value = "/comite", method = RequestMethod.GET, produces = {"application/json"})
	public Comite getComiteBySemaineAndOrganisation(@RequestParam(value = "semaine", required = true) String semaine,@RequestParam(value = "organisationId", required = true) Integer organisationId, HttpServletRequest req) {

		return comiteService.getComiteBySemaineAndOrganisation(semaine,organisationId);
		 
	}
	
	@RequestMapping(value = "/latscomites", method = RequestMethod.GET, produces = {"application/json"})
	public List<Comite> getComitesByOrganisation(@RequestParam(value = "organisationId", required = true) Integer organisationId, HttpServletRequest req) {

		return comiteService.getLastComites(organisationId,3);
		 
	}
	 
	@RequestMapping(value = "/addcomite", method = RequestMethod.POST, produces = {"application/json"})
	public Comite AddComite(@RequestBody Map<String, String> body,HttpServletRequest req) {
		String semaine =body.get("semaine") ;
		String organisationId =body.get("organisationId") ;
		return comiteService.AddComite(semaine, Integer.valueOf(organisationId));
			
	}
	
	@RequestMapping(value = "/createnextcomite", method = RequestMethod.POST, produces = {"application/json"})
	public Comite CreateNextComite(@RequestBody Map<String, String> body,HttpServletRequest req) {
		String semaine =body.get("semaine") ;
		String organisationId =body.get("organisationId") ;
		return comiteService.CreateNextComite(semaine, Integer.valueOf(organisationId));
			
	}
}
