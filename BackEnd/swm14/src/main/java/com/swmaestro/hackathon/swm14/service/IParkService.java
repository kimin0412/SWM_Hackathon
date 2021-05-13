package com.swmaestro.hackathon.swm14.service;

import java.util.List;

import com.swmaestro.hackathon.swm14.dto.Park;

public interface IParkService {
	// 모든 공원 조회
	public List<Park> getAllParks();

	// 위도 경도 범위 내 공원 조회
	public List<Park> getRangeParks(double lat1, double lon1, double lat2, double lon2);
}
