package com.app.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.model.comment.Comment;

public interface CommentRepo extends JpaRepository<Comment, Long> {
	Optional<Comment> findOneById(Long id);
	//select c.* from comment c, presentation p, comite e where c.slide_id = p.id and p.comite_id = e.id and p.configslide_id=13 and e.semaine ="201902";
	@Query( value = "select  c.* from comment c, presentation p, comite e where c.slide_id = p.id and p.comite_id = e.id and p.configslide_id=?1 order by e.semaine desc LIMIT 1",
			  nativeQuery = true)
	Optional<Comment> findLastCommentByConfigSlide(Long configslide_id);
}
