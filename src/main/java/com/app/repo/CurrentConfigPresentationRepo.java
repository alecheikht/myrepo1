package com.app.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.presentation.CurrentConfigPresentation;

public interface CurrentConfigPresentationRepo extends JpaRepository<CurrentConfigPresentation, Long>{
	Optional<CurrentConfigPresentation> findOneByOrganisationId(long organisationId);
}
