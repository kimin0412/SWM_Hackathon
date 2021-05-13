package com.swmaestro.hackathon.swm14.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swmaestro.hackathon.swm14.dto.Cctv;
import com.swmaestro.hackathon.swm14.dto.Playlist;
import com.swmaestro.hackathon.swm14.repository.ICctvRepository;
import com.swmaestro.hackathon.swm14.repository.IPlaylistRepository;
import com.swmaestro.hackathon.swm14.service.ICctvService;
import com.swmaestro.hackathon.swm14.service.IPlaylistService;

@Service
public class CctvServiceImpl implements ICctvService {

	@Autowired
	private ICctvRepository cctvRepo;

	@Override
	public List<Cctv> getAllCCTVs() {
		return cctvRepo.findAllCCTVs();
	}

	@Override
	public List<Cctv> getRangeCCTVs(double lat1, double lon1, double lat2, double lon2) {
		return cctvRepo.findRangeCCTVs(lat1, lon1, lat2, lon2);
	}

}
