package com.swmaestro.hackathon.swm14.controller;

import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.swmaestro.hackathon.swm14.dto.ForecastDto;
import com.swmaestro.hackathon.swm14.service.IForecastService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/forecast")
public class ForecastController {
	public static final Logger logger = LoggerFactory.getLogger(ForecastController.class);

	@Autowired
	private IForecastService forecastService;
	
	@ApiOperation(value = "x, y별 날씨 정보 조회")
	@GetMapping(value = "/{nx}/{ny}", produces = "application/json")
	@ResponseBody
	public ForecastDto getForecast(@PathVariable("nx") double nx, @PathVariable("ny") double ny) throws UnsupportedEncodingException, MalformedURLException {
		return forecastService.getForecast(nx, ny);
	}

}
