package com.swmaestro.hackathon.swm14.service;

import java.util.List;

import com.swmaestro.hackathon.swm14.dto.Comment;

public interface ICommentService {
	// 모든 CCTV 조회
	public List<Comment> getAllComments();

	// 위도 경도 범위 내 CCTV 조회
	public List<Comment> getParkComments(int park_id);

	// 코멘트 작성
	Comment registComment(int rating, String comment, String IP, int park_id, String image);
}
