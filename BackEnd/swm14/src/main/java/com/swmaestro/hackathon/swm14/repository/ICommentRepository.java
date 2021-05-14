package com.swmaestro.hackathon.swm14.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.swmaestro.hackathon.swm14.dto.Comment;

@Repository
public interface ICommentRepository extends JpaRepository<Comment, Object> {

	@Query(value = "select * from comments", nativeQuery = true)
	List<Comment> findAllComments();

	@Query(value = "select * from comments where park_id=?1", nativeQuery = true)
	List<Comment> findParkComments(int park_id);

//	@Modifying
	@Transactional
    @Modifying
	@Query(value = "INSERT INTO comments (rating, comment, IP, park_id, image) VALUES (?1, ?2, ?3, ?4, ?5) ", nativeQuery = true)
	void insertComment(int rating, String comment, String IP, int park_id, String image);
//	@Query(value = "select * from Playlist where day = ?1 and category = ?2", nativeQuery = true)
//	List<Playlist> findCategoryPlaylist(int day, int category);

}