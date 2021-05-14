package com.swmaestro.hackathon.swm14.service;

import java.util.List;

import com.swmaestro.hackathon.swm14.dto.Streetlamp;

public interface IStreetlampService {
	// 모든 가로등 조회
	public List<Streetlamp> getAllStreetlamps();

	// 위도 경도 범위 내 가로등 조회
	public List<Streetlamp> getRangeStreetlamps(double lat1, double lon1, double lat2, double lon2);

//	// 카테고리별 플레이리스트 조회 
//	public List<Playlist> getCategoryPlaylists(int day, int category);
}
