package com.app.api.comite;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.app.api.periode.PeriodeService;
import com.app.api.presentation.PresentationService;
import com.app.model.comite.Comite;
import com.app.model.organisation.Organisation;
import com.app.model.presentation.ConfigPresentation;
import com.app.model.presentation.CurrentConfigPresentation;
import com.app.repo.ComiteRepo;
import com.app.repo.ConfigSlideRepo;
import com.app.repo.CurrentConfigPresentationRepo;
import com.app.repo.OrganisationRepo;

@Service
public class ComiteService {
	 @Autowired private ComiteRepo comiteRepo;
	 @Autowired private OrganisationRepo organisationRepo;
	 @Autowired private CurrentConfigPresentationRepo currentConfigPresentationRepo;
	 @Autowired private ConfigSlideRepo configSlideRepo;
	 @Autowired private PresentationService presentationService;
	
	 public Comite getComiteBySemaineAndOrganisation(String semaine,Integer organisationId) {
		 Organisation organisation = organisationRepo.findOneById(organisationId).get();
		 return comiteRepo.findOneBySemaineAndOrganisation(semaine,organisation).get();
		 
	 }
	 
	 @Transactional
	 public Comite AddComite(String semaine,Integer organisationId) {
		CurrentConfigPresentation currentConfigPresentation = currentConfigPresentationRepo.findOneByOrganisationId(organisationId).get();
		ConfigPresentation configPresentation = (ConfigPresentation) configSlideRepo.findOneById(currentConfigPresentation.getConfigpresentId()).get();
		Organisation organisation = organisationRepo.findOneById(organisationId).get();
		Comite newComite=new Comite();
		newComite.setConfigPresentation(configPresentation);
		newComite.setOrganisation(organisation);
		newComite.setSemaine(semaine);
		newComite.setEncours(true);
		Comite comite = comiteRepo.save(newComite);
		/*Initialisation de la Presentations */
		presentationService.initPresentations(comite);
		return comite;
		 
	 }
	 @Transactional
	 public Comite CreateNextComite(String oldSemaine,Integer organisationId) {
		 //Cloturer le comite encours
		 Comite comite=getComiteBySemaineAndOrganisation(oldSemaine, organisationId);
		 comite.setEncours(false);
		 comiteRepo.save(comite);
		 return  AddComite(PeriodeService.getNextPeriode(oldSemaine),organisationId);
		 
	 }
	 
	 public List<Comite> getLastComites(Integer organisationId,int size){
		 Organisation organisation = organisationRepo.findOneById(organisationId).get();
		 List<Comite> returnedList=comiteRepo.findByOrganisation(organisation,new PageRequest(0, size, new Sort(Sort.Direction.DESC, "semaine")));
		 returnedList.forEach((c) -> {
			 c.setConfigPresentation(null);

		 });
		 return returnedList;
		 //return comiteRepo.findByOrganisation(organisation,new PageRequest(0, size, new Sort(Sort.Direction.DESC, "semaine")));
	 }
}
