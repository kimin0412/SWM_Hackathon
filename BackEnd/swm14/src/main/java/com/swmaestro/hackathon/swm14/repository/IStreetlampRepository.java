package com.swmaestro.hackathon.swm14.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.swmaestro.hackathon.swm14.dto.Streetlamp;

@Repository
public interface IStreetlampRepository extends JpaRepository<Streetlamp, Object> {

	@Query(value = "select * from streetlamps", nativeQuery = true)
	List<Streetlamp> findAllStreetlamps();

	@Query(value = "select * from streetlamps where lat between ?1 and ?3 AND lon between ?2 and ?4", nativeQuery = true)
	List<Streetlamp> findRangeStreetlamps(double lat1, double lon1, double lat2, double lon2);

//	@Query(value = "select * from Playlist where day = ?1 and category = ?2", nativeQuery = true)
//	List<Playlist> findCategoryPlaylist(int day, int category);

}