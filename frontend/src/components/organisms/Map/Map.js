import React, { useEffect, useState, useRef } from "react";
import useMap from "../../../hooks/useMap";
import { useSelector, useDispatch } from "react-redux";
import { setBounds } from "../../../store/parks";
import axios from "axios";
// 모달
import swal from "@sweetalert/with-react";
import { SpotModal } from "../Map";
import createMarkers from "../../../hooks/createMarkers";

// 마커 설정 : 기본위치-소마센터
let nowPlace = {
  x: 127.0425755,
  y: 37.503412,
};

/* global kakao */
export const Map = () => {
  const map = useMap();
  const [markerArr, setMarkerArr] = useState([])
  const [locationArr, setLocationArr] = useState([])
  const [infoArr, setInfoArr] = useState([])
  // var infoArr = []
  const dispatch = useDispatch();


  const getLocation = () => {
    setLocationArr([
      { mapX: 127.0425755, mapY: 37.503412 },
      { mapX: 127.036719, mapY: 37.500054 },
      { mapX: 127.038356, mapY: 37.500338 },
      getGeolocation()
    ])
    setInfoArr([
      `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
      `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
      `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
      `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,])
  }

  const getGeolocation = () => {
    // 위치 정보가 사용이 가능하면
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        nowPlace.mapX = position.coords.longitude;
        nowPlace.mapY = position.coords.latitude;

        map.setCenter(new kakao.maps.LatLng(nowPlace.y, nowPlace.x));
      });
    } else {
      // 기본 위치 설정
      nowPlace = {
        mapX: 127.0425755,
        mapX: 37.503412,
      }
    }
    return nowPlace
  }

  // const createMarker = () => {
  //   const { kakao } = window
  //   const tempArr = []
  //   locationArr.forEach(e => {
  //     let mkr = new kakao.maps.Marker({
  //       map: map,
  //       position: new kakao.maps.LatLng(e.mapY, e.mapX),
  //     })
  //     tempArr.push(
  //       mkr
  //     )
  //     const info = new kakao.maps.InfoWindow({
  //       content: `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
  //       removable: true,
  //     });
  //     kakao.maps.event.addListener(mkr, 'mouseover', function () {
  //       info.open(map, mkr);
  //     });
  //     kakao.maps.event.addListener(mkr, 'mouseout', function () {
  //       info.close();
  //     });
  //     kakao.maps.event.addListener(mkr, 'click', () => {
  //       swal(
  //         <SpotModal />
  //       );
  //     })
  //   })
  //   setMarkerArr(tempArr)
  // }
  const createMarker = () => {
    let out = createMarkers(locationArr, infoArr, map);
    console.log(out)
    setMarkerArr(out)
  }

  useEffect(() => {
  }, [])

  useEffect(() => map && locationArr.length && infoArr.length && createMarker(),
    [map, locationArr, infoArr])

  useEffect(() => {
    if (map == null) return;
    // map config
    map.setDraggable(true);
    var control = new kakao.maps.ZoomControl();
    map.addControl(control, kakao.maps.ControlPosition.BOTTOMRIGHT);
    map.setMaxLevel(5);

    //Event listener for bounds change
    kakao.maps.event.addListener(map, "bounds_changed", () => {
      dispatch(setBounds(map.getBounds()))
      console.log(map.getBounds())
    }
    );
    getLocation()
  }, [map]);

  const getHCode = function (position) {
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
