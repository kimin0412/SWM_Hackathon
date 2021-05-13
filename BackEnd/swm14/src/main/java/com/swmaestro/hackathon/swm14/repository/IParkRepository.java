package com.swmaestro.hackathon.swm14.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.swmaestro.hackathon.swm14.dto.Park;

@Repository
public interface IParkRepository extends JpaRepository<Park, Object> {

	@Query(value = "select * from parks", nativeQuery = true)
	List<Park> findAllParks();

	@Query(value = "select * from parks where lat between ?1 and ?3 AND lon between ?2 and ?4", nativeQuery = true)
	List<Park> findRangeParks(double lat1, double lon1, double lat2, double lon2);
}