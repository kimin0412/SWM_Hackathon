package com.swmaestro.hackathon.swm14.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swmaestro.hackathon.swm14.dto.Streetlamp;
import com.swmaestro.hackathon.swm14.repository.IStreetlampRepository;
import com.swmaestro.hackathon.swm14.service.IStreetlampService;

@Service
public class StreetlampServiceImpl implements IStreetlampService {

	@Autowired
	private IStreetlampRepository streetlampRepo;

	@Override
	public List<Streetlamp> getAllStreetlamps() {
		return streetlampRepo.findAllStreetlamps();
	}

	@Override
	public List<Streetlamp> getRangeStreetlamps(double lat1, double lon1, double lat2, double lon2) {
		return streetlampRepo.findRangeStreetlamps(lat1, lon1, lat2, lon2);
	}

}
