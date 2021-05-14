package com.swmaestro.hackathon.swm14.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.swmaestro.hackathon.swm14.dto.Playlist;


@Repository
public interface IPlaylistRepository extends JpaRepository<Playlist, Object>{

	@Query(value = "select * from Playlist", nativeQuery = true)
	List<Playlist> findAllPlaylist();
	
	@Query(value = "select * from Playlist where day = ?1", nativeQuery = true)
	List<Playlist> findDayPlaylist(int day);
	
	@Query(value = "select * from Playlist where day = ?1 and category = ?2", nativeQuery = true)
	List<Playlist> findCategoryPlaylist(int day, int category);
	
}