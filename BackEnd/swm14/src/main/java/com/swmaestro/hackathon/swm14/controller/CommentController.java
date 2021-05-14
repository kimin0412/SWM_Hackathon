package com.swmaestro.hackathon.swm14.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swmaestro.hackathon.swm14.dto.Comment;
import com.swmaestro.hackathon.swm14.service.ICommentService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/comment")
public class CommentController {
	public static final Logger logger = LoggerFactory.getLogger(CommentController.class);

	@Autowired
	private ICommentService commentService;

	@Autowired
	public CommentController(ICommentService commentService) {
		Assert.notNull(commentService, "commentService 개체가 반드시 필요!");
		this.commentService = commentService;
	}

	// 모든 플레이리스트 목록 조회
	@ApiOperation(value = "모든 Comment 조회")
	@GetMapping("/all")
	public ResponseEntity<HashMap<String, Object>> getAllComments(HttpServletRequest request) throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();

		List<Comment> comments = commentService.getAllComments();

		map.put("data", comments);
		return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
	}

	// 낮밤별 플레이리스트 목록 조회
	@ApiOperation(value = "해당 공원 Comments 조회")
	@GetMapping("/{park_id}")
	public ResponseEntity<HashMap<String, Object>> getParkComments(@PathVariable("park_id") int park_id,
			HttpServletRequest request) throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();

		List<Comment> comments = commentService.getParkComments(park_id);

		map.put("data", comments);
		return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
	}

	@ApiOperation(value = "해당 공원 Comment 작성")
	@PostMapping("/insert")
	public ResponseEntity<HashMap<String, Object>> registComment(@RequestBody Comment comment) throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();
		int rating = comment.getRating();
		String c_comment = comment.getComment();
		String IP = comment.getIP();
		int park_id = comment.getPark_id();
		String image = comment.getImage();

		Comment result = commentService.registComment(rating, c_comment, IP, park_id, image);
		map.put("data", result);
//		System.out.println(result);

		return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
	}
}
