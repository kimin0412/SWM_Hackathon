package com.swmaestro.hackathon.swm14.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.swmaestro.hackathon.swm14.dto.Park;
import com.swmaestro.hackathon.swm14.service.IParkService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/park")
public class ParkController {
	public static final Logger logger = LoggerFactory.getLogger(ParkController.class);

	@Autowired
	private IParkService parksService;

	@Autowired
	public ParkController(IParkService parksService) {
		Assert.notNull(parksService, "parksService 개체가 반드시 필요!");
		this.parksService = parksService;
	}

	// 모든 공원 목록 조회
	@ApiOperation(value = "모든 공원 조회")
	@GetMapping("/all")
	public ResponseEntity<HashMap<String, Object>> getAllParks(HttpServletRequest request) throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();

		List<Park> parks = parksService.getAllParks();

		map.put("data", parks);
		return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
	}

	// 범위 안 공원 목록 조회
	@ApiOperation(value = "범위 안 공원 조회")
	@GetMapping("/{lat1}/{lon1}/{lat2}/{lon2}")
	public ResponseEntity<HashMap<String, Object>> getRangeParks(@PathVariable("lat1") double lat1,
			@PathVariable("lon1") double lon1, @PathVariable("lat2") double lat2, @PathVariable("lon2") double lon2,
			HttpServletRequest request) throws Exception {
		HashMap<String, Object> map = new HashMap<String, Object>();

		List<Park> parks = parksService.getRangeParks(lat1, lon1, lat2, lon2);

		map.put("data", parks);
		return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
	}
}
