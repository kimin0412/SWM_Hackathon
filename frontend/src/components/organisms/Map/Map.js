import React, { useEffect, useState, useRef } from "react";
import useMap from "../../../hooks/useMap";
import { useSelector, useDispatch } from "react-redux";
import { setBounds } from "../../../store/parks";
import axios from "axios";
// 모달
import swal from "@sweetalert/with-react";
import { SpotModal } from "../Map";

// 마커 설정 : 기본위치-소마센터
let nowPlace = {
  x: 127.0425755,
  y: 37.503412,
};

/* global kakao */
export const Map = () => {
  const map = useMap();
  const dispatch = useDispatch();

  useEffect(() => {
    if (map == null) return;

    // 지도 설정
    map.setDraggable(true);
    // 지도에 컨트롤 표시
    var control = new kakao.maps.ZoomControl();
    map.addControl(control, kakao.maps.ControlPosition.BOTTOMRIGHT);
    // 축소 범위 설정
    map.setMaxLevel(5);

    // 마커를 생성하는 함수 정의
    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        text: "총 점수 :",
      });
      // 인포윈도우
      var infowindow = new kakao.maps.InfoWindow({
        position: new kakao.maps.LatLng(place.y, place.x),
        content: "<p>총 평가 점수 : 0점</p>",
      });

      kakao.maps.event.addListener(marker, "mouseover", function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
      });

      // 마커를 클릭했을 때 이벤트를 표시합니다.
      kakao.maps.event.addListener(marker, "click", () => {
        swal(<SpotModal />);
      });
    }

    const info = new kakao.maps.InfoWindow({
      content: `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
      removable: true,
    });

    // 위치 정보가 사용이 가능하면
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        nowPlace.x = position.coords.longitude;
        nowPlace.y = position.coords.latitude;

        map.setCenter(new kakao.maps.LatLng(nowPlace.y, nowPlace.x));

        displayMarker(nowPlace);

        var test_arr = [
          { x: 127.0425755, y: 37.503412 },
          { x: 127.0425755, y: 37.503412 },
          { x: 127.0425755, y: 37.503412 },
          { x: 127.0425755, y: 37.503412 },
        ];

        test_arr.forEach((element) => getHCode(element));

        console.log(test_arr);
      });
    } else {
      // 기본 위치 설정
      nowPlace = {
        x: 127.0425755,
        y: 37.503412,
      };

      map.setCenter(new kakao.maps.LatLng(nowPlace.y, nowPlace.x));

      displayMarker(nowPlace);

      var test_arr = [
        { x: 127.0425755, y: 37.503412 },
        { x: 127.0425755, y: 37.503412 },
        { x: 127.0425755, y: 37.503412 },
        { x: 127.0425755, y: 37.503412 },
      ];

      test_arr.forEach((element) => getHCode(element));

      console.log(test_arr);
    }

    //Event listener for bounds change
    kakao.maps.event.addListener(map, "bounds_changed", () =>
      dispatch(setBounds(map.getBounds()))
    );
  }, [map]);

  var getHCode = function (position) {
    var geocoder = new kakao.maps.services.Geocoder();
    var code;

    var callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        position.tmp = 20;
        position.pop = 0;
        //                     const agent = new https.Agent({
        //                       rejectUnauthorized: false
        //                     });

        // axios.get('http://15.165.135.86:8080/api/weather?zone=' + result[1].code, {httpsAgent: agent })
        // .then((Response) => {console.log(Response.data); position.weather = Response.kmaList.wfKor})
        // .catch((Error) => {console.log(Error)})

        // At instance level
        // const instance = axios.create({
        //   httpsAgent: new https.Agent({
        //     rejectUnauthorized: false
        //   })
        // });

        // instance.get('http://15.165.135.86:8080/api/weather?zone=' + result[1].code);
      } else {
      }
    };

    geocoder.coord2RegionCode(position.x, position.y, callback);

    return position;
  };

  return (
    <div
      ref={map}
      id="map"
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 360,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Kakao MAP API
    </div>
  );
};
