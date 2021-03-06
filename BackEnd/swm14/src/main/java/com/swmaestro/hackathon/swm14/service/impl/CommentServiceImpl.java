package com.swmaestro.hackathon.swm14.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swmaestro.hackathon.swm14.dto.Comment;
import com.swmaestro.hackathon.swm14.repository.ICommentRepository;
import com.swmaestro.hackathon.swm14.service.ICommentService;

@Service
public class CommentServiceImpl implements ICommentService {

	@Autowired
	private ICommentRepository commentRepo;

	@Override
	public List<Comment> getAllComments() {
		return commentRepo.findAllComments();
	}

	@Override
	public List<Comment> getParkComments(int park_id) {
		return commentRepo.findParkComments(park_id);
	}

	@Override
	public Comment registComment(int rating, String comment, String IP, int park_id, String image) {
		commentRepo.insertComment(rating, comment, IP, park_id, image);
		Comment com = new Comment();
		com.setRating(rating);
		com.setComment(comment);
		com.setIP(IP);
		com.setPark_id(park_id);
		com.setImage(image);
		return com;
	}

}
