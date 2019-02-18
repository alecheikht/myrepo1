package com.app.api.presentation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.model.comite.Comite;
import com.app.model.comment.Comment;
import com.app.model.presentation.AbstractConfigSlide;
import com.app.model.presentation.ConfigPresentation;
import com.app.model.presentation.ConfigSlide;
import com.app.model.presentation.Presentation;
import com.app.model.presentation.Slide;
import com.app.model.response.OperationResponse;
import com.app.repo.CommentRepo;
import com.app.repo.SlideRepo;

@Service
public class PresentationService {

	@Autowired private SlideRepo slideRepo;	
	@Autowired private CommentRepo commentRepo;
	
	public OperationResponse  initPresentations(Comite comite){
		OperationResponse opr= new OperationResponse();
		ConfigPresentation configPresentation=comite.getConfigPresentation();
		AddPresentation(comite, configPresentation);
		
		return opr;
		
	}

	private void AddPresentation(Comite comite,ConfigPresentation cp) {
		
		Presentation p = new Presentation();
		p.setComite(comite);
		p.setConfigSlide(cp);
		slideRepo.save(p);
				
		List<AbstractConfigSlide> listConfigSlides= cp.getConfigSlides();
		for(AbstractConfigSlide cs :listConfigSlides) {
			if(cs instanceof ConfigPresentation) {
				AddPresentation(comite,(ConfigPresentation)cs);
			}else {
				AddSlide(comite,(ConfigSlide)cs);
			}
		}
		//return null;
	}
	
	private void AddSlide(Comite comite,ConfigSlide cs) {
		Slide s =new Slide();
		s.setComite(comite);
		s.setConfigSlide(cs);
		Optional<Comment> oldComment=commentRepo.findLastCommentByConfigSlide(cs.getId());
		Comment newComment=new Comment();
		List<Comment> listComments=new ArrayList<Comment>();
		if(oldComment.isPresent()) {
			newComment.setText(oldComment.get().getText());
		}
		newComment.setSlide(s);
		listComments.add(newComment);
		s.setComment(listComments);
		slideRepo.save(s);
		//return null;
	}
}
