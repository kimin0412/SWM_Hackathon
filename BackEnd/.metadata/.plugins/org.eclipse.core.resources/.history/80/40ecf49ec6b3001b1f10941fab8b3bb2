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
@Table(name = "Playlist")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
//@JsonInclude(JsonInclude.Include.ALWAYS)
public class Playlist {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column
    private int id;						// pk 아이디 
	private int day;					// 낮용인지 밥용인지 
	private String title;				// 플레이 리스트 제목 
	private String content;				// 플레이 리스트 설명 
	private String link;				// 유튜브 링크 
	private String image;				// 썸네일 이미지 
	private int category;				// 구분용 카테고리 
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getCategory() {
		return category;
	}
	public void setCategory(int category) {
		this.category = category;
	}
	@Override
	public String toString() {
		return "Playlist [id=" + id + ", day=" + day + ", title=" + title + ", content=" + content + ", link=" + link
				+ ", image=" + image + ", category=" + category + "]";
	}
	
}
