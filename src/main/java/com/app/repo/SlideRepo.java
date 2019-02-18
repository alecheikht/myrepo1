package com.app.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.comite.Comite;
import com.app.model.presentation.AbstractConfigSlide;
import com.app.model.presentation.AbstractSlide;
import com.app.model.presentation.ConfigSlide;
import com.app.model.presentation.Slide;

public interface SlideRepo extends JpaRepository<AbstractSlide, Long>{
    Optional<AbstractSlide> findOneByComiteAndConfigSlide(Comite comite, AbstractConfigSlide configSlide);
}
