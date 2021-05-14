package com.swmaestro.hackathon.swm14.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.swmaestro.hackathon.swm14.dto.KmaListDto;
import com.swmaestro.hackathon.swm14.service.KmaService;

@Controller
public class KmaController {

	@Autowired
	private KmaService kmaService;

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping(value = "/api/weather", produces = "application/json")
	@ResponseBody
	public KmaListDto api(@RequestParam("zone") String zone) {
		return kmaService.getKmaList(zone);
	}

}
