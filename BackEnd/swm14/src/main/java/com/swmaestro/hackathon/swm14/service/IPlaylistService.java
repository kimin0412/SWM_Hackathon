package com.swmaestro.hackathon.swm14.service;

import java.util.List;

import com.swmaestro.hackathon.swm14.dto.Playlist;

public interface IPlaylistService {
	// 모든 플레이리스트 조회 
	public List<Playlist> getAllPlaylists();
	
	// 낮밤별 플레이리스트 조회 
	public List<Playlist> getDayPlaylists(int day);
	
	// 카테고리별 플레이리스트 조회 
	public List<Playlist> getCategoryPlaylists(int day, int category);
}
