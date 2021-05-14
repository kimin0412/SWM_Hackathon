package com.swmaestro.hackathon.swm14.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "streetlamps")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
//@JsonInclude(JsonInclude.Include.ALWAYS)
public class Streetlamp {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column
	private int id; // pk 아이디
	private double lat; // 위도
	private double lon; // 경도
//	private String lat; // 위도
//	private String lon; // 경도
	private int cnt; // 개수

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

//	public String getLat() {
//		return lat;
//	}
//
//	public void setLat(String lat) {
//		this.lat = lat;
//	}
//
//	public String getLon() {
//		return lon;
//	}
//
//	public void setLon(String lon) {
//		this.lon = lon;
//	}

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

	public int getCnt() {
		return cnt;
	}

	public void setCnt(int cnt) {
		this.cnt = cnt;
	}

	@Override
	public String toString() {
		return "Streetlamps [id=" + id + ", lat=" + lat + ", lon=" + lon + ", cnt=" + cnt + "]";
	}

}
