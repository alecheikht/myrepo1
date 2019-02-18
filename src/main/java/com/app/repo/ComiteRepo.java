package com.app.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.comite.Comite;
import com.app.model.organisation.Organisation;

public interface ComiteRepo extends JpaRepository<Comite, Long> {
	
	Optional<Comite> findOneById(Long id);
    Optional<Comite> findOneBySemaineAndOrganisation(String semaine, Organisation organisation);
    
    //Pageable pageable = new PageRequest(0,size);
    //PageRequest.of(0, 1, Sort.by(Sort.Direction.DESC, "semaine"))
    List<Comite> findByOrganisation(Organisation organisation,Pageable pageable);
}
