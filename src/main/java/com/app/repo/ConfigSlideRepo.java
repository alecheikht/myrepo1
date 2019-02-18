package com.app.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.presentation.AbstractConfigSlide;


public interface ConfigSlideRepo  extends JpaRepository<AbstractConfigSlide, Long>{
	
	List<AbstractConfigSlide> findAll();
	Optional<AbstractConfigSlide> findOneById(long id);

}
