package com.app.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.model.theme.Theme;

public interface ThemeRepo  extends JpaRepository<Theme, Integer>{
	List<Theme> findAll();
	Optional<Theme> findOneById(int id);
	
	@Query( value = "select p.* " + 
			"from theme n, theme_tree t, theme p " + 
			"where n.id = ?1 " + 
			"    and n.id = t.id " + 
			"    and t.Parent_id = p.id ",
			  nativeQuery = true)
	List<Theme> getHierarchiById(int id);
}
