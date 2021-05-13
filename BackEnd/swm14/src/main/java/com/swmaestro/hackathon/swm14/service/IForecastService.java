package com.swmaestro.hackathon.swm14.service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import com.swmaestro.hackathon.swm14.dto.ForecastDto;

@Service
public class IForecastService {

	public ForecastDto getForecast(double nx, double ny) throws UnsupportedEncodingException, MalformedURLException {
		String key = "naHSXCSoORB9NqheStEUvJoUaAVTNnjCmXPloQYnADxb1nVjUFV7WynNMKcxrOmqlsXs3EPx5t60u7W8pwUy6g";
		int x = (int) nx;
		int y = (int) ny;
		
		String pattern = "yyyyMMdd";
		String pattern2 = "HH";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		String date = simpleDateFormat.format(new Date());
		simpleDateFormat = new SimpleDateFormat(pattern2);
		String time = simpleDateFormat.format(new Date()) + "00";
		System.out.println(date);
		System.out.println(time);


		StringBuilder urlBuilder = new StringBuilder(
				"http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst"); /* URL */
//		urlBuilder.append("?" + URLEncoder.encode("ServiceKey", "UTF-8") + "=서비스키"); /* Service Key */
		urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + URLEncoder.encode(key, "UTF-8")
				+ "%3D%3D"); /* 공공데이터포털에서 받은 인증키 */
		urlBuilder
				.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /* 페이지번호 */
		urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "="
				+ URLEncoder.encode("10", "UTF-8")); /* 한 페이지 결과 수 */
		urlBuilder.append("&" + URLEncoder.encode("dataType", "UTF-8") + "="
				+ URLEncoder.encode("XML", "UTF-8")); /* 요청자료형식(XML/JSON)Default: XML */
		urlBuilder.append("&" + URLEncoder.encode("base_date", "UTF-8") + "="
				+ URLEncoder.encode(date, "UTF-8")); /* 15년 12월 1일 발표 */
		urlBuilder.append("&" + URLEncoder.encode("base_time", "UTF-8") + "="
				+ URLEncoder.encode(time, "UTF-8")); /* 06시 발표(정시단위) */
		urlBuilder.append("&" + URLEncoder.encode("nx", "UTF-8") + "="
				+ URLEncoder.encode(Integer.toString(x), "UTF-8")); /* 예보지점의 X 좌표값 */
		urlBuilder.append("&" + URLEncoder.encode("ny", "UTF-8") + "="
				+ URLEncoder.encode(Integer.toString(y), "UTF-8")); /* 예보지점 Y 좌표 */
		URL url = new URL(urlBuilder.toString());
		String URL = urlBuilder.toString();

		ForecastDto forecastDto = new ForecastDto();

		try {
			Document doc = Jsoup.connect(URL).get();
			Elements el = doc.select("item");
			for (int i = 0; i < el.size(); i++) {
				Element e = el.get(i);
				String category = e.select("category").text();
				System.out.println(category);
				if (category.equals("POP")) {
					int pop = Integer.parseInt(e.select("fcstValue").text());
					System.out.println(pop);
					forecastDto.setPOP(pop);
				} else if (category.equals("PTY")) {
					int pty = Integer.parseInt(e.select("fcstValue").text());
					System.out.println(pty);
					forecastDto.setPTY(pty);
				} else if (category.equals("T3H")) {
					int t3h = Integer.parseInt(e.select("fcstValue").text());
					System.out.println(t3h);
					forecastDto.setT3H(t3h);
				}
			}

		} catch (IOException e) {
			e.printStackTrace();
		}

		return forecastDto;
	}
}