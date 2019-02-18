package com.app.api.comment;

import java.util.NoSuchElementException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.model.comment.Comment;
import com.app.model.response.OperationResponse;
import com.app.model.response.OperationResponse.ResponseStatusEnum;
import com.app.repo.CommentRepo;


@RestController
public class CommentController {
	 @Autowired private CommentRepo commentRepo;
	 
	 @RequestMapping(value = "/comment", method = RequestMethod.GET, produces = {"application/json"})
	 public Comment getCommentById(@RequestParam(value = "id", required = true) Long commentId ,HttpServletRequest req) {

		 return commentRepo.findOneById(commentId).get();
		 
	 }
	 
	@RequestMapping(value = "/updatecomment", method = RequestMethod.POST, produces = {"application/json"})
	public OperationResponse updateComment(@RequestBody Comment comment, HttpServletRequest req) {
		OperationResponse resp = new OperationResponse();
		try {
			Comment commentToUpdate=commentRepo.findOneById(comment.getId()).get();
			commentToUpdate.setText(comment.getText());
			commentRepo.save(commentToUpdate);
		    resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
			resp.setOperationMessage("Comment updated");
		}
		catch(NoSuchElementException e) {
		    resp.setOperationStatus(ResponseStatusEnum.ERROR);
			resp.setOperationMessage("Comment not found");
		}
		catch(Exception e) {
			resp.setOperationStatus(ResponseStatusEnum.ERROR);
			resp.setOperationMessage(e.getMessage());
		}
		return resp;
	}
}
