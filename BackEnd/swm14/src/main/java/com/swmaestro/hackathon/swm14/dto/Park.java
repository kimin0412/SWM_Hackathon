package com.swmaestro.hackathon.swm14.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "parks")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
//@JsonInclude(JsonInclude.Include.ALWAYS)
public class Park {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column
	private int id; // pk 아이디
	private double lat; // 위도
	private double lon; // 경도
	private double area; // 면적
	private String park_name;
	private String park_type;
	private int cctv_cnt;
	private int streetlamp;
	private String location;
	private double safety_idx;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLon() {
		return lon;
	}

	public void setLon(double lon) {
		this.lon = lon;
	}

	public double getArea() {
		return area;
	}

	public void setArea(double area) {
		this.area = area;
	}

	public String getPark_name() {
		return park_name;
	}

	public void setPark_name(String park_name) {
		this.park_name = park_name;
	}

	public String getPark_type() {
		return park_type;
	}

	public void setPark_type(String park_type) {
		this.park_type = park_type;
	}

	public int getCctv_cnt() {
		return cctv_cnt;
	}

	public void setCctv_cnt(int cctv_cnt) {
		this.cctv_cnt = cctv_cnt;
	}

	public int getStreetlamp() {
		return streetlamp;
	}

	public void setStreetlamp(int streetlamp) {
		this.streetlamp = streetlamp;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public double getSafety_idx() {
		return safety_idx;
	}

	public void setSafety_idx(double safety_idx) {
		this.safety_idx = safety_idx;
	}

	@Override
	public String toString() {
		return "Park [id=" + id + ", lat=" + lat + ", lon=" + lon + ", area=" + area + ", park_name=" + park_name
				+ ", park_type=" + park_type + ", cctv_cnt=" + cctv_cnt + ", streetlamp=" + streetlamp + ", location="
				+ location + ", safety_idx=" + safety_idx + "]";
	}

}
