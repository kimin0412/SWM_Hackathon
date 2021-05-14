package com.swmaestro.hackathon.swm14.service;

import java.util.List;

import com.swmaestro.hackathon.swm14.dto.Cctv;

public interface ICctvService {
	// 모든 CCTV 조회
	public List<Cctv> getAllCCTVs();

	// 위도 경도 범위 내 CCTV 조회
	public List<Cctv> getRangeCCTVs(double lat1, double lon1, double lat2, double lon2);

//	// 카테고리별 플레이리스트 조회 
//	public List<Playlist> getCategoryPlaylists(int day, int category);
}
