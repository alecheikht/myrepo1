package com.app.repo;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.organisation.Organisation;

public interface OrganisationRepo extends JpaRepository<Organisation, Integer> {
	List<Organisation> findAllByLevel(Integer level);
	Optional<Organisation> findOneById(Integer id);
}
