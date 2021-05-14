package com.swmaestro.hackathon.swm14.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swmaestro.hackathon.swm14.dto.Park;
import com.swmaestro.hackathon.swm14.repository.IParkRepository;
import com.swmaestro.hackathon.swm14.service.IParkService;

@Service
public class ParkServiceImpl implements IParkService {

	@Autowired
	private IParkRepository parkRepo;

	@Override
	public List<Park> getAllParks() {
		return parkRepo.findAllParks();
	}

	@Override
	public List<Park> getRangeParks(double lat1, double lon1, double lat2, double lon2) {
		return parkRepo.findRangeParks(lat1, lon1, lat2, lon2);
	}

}
