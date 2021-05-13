import React, { useEffect, useState } from "react";
import useMap from "../../../hooks/useMap";
import { useDispatch } from "react-redux";
import { setBounds } from "../../../store/parks";

import useCCTV from "../../../hooks/useCCTV";
import createMarkers from "../../../hooks/createMarkers";
import createCCTVMarker from "../../../hooks/createCCTVMarker";

// 마커 설정 : 기본위치-소마센터
let nowPlace = {
  x: 127.0425755,
  y: 37.503412,
};

/* global kakao */
export const Map = () => {
  const map = useMap();
  const [markerArr, setMarkerArr] = useState([]);
  const [locationArr, setLocationArr] = useState([]);
  const [infoArr, setInfoArr] = useState([]);
  const CCTVList = useCCTV();
  const dispatch = useDispatch();

  const getLocation = () => {
    setLocationArr([
      { mapX: 127.0425755, mapY: 37.503412 },
      { mapX: 127.036719, mapY: 37.500054 },
      { mapX: 127.038356, mapY: 37.500338 },
      getGeolocation(),
    ]);
    setInfoArr([
      `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
      `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
      `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
      `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
    ]);
  };

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
        mapY: 37.503412,
      };
    }
    return nowPlace;
  };
  const createMarker = () => {
    setMarkerArr(createMarkers(locationArr, infoArr, map));
  };

  useEffect(() => { }, []);

  useEffect(() => {
    try {
      CCTVList['data'].forEach(element => {
        console.log(element)
        createCCTVMarker(element, map)
      });
      console.log(CCTVList)
    } catch (e) {
      console.log(e)
    }
    console.log(CCTVList.data)
  }, [CCTVList]);

  useEffect(
    () => map && locationArr.length && infoArr.length && createMarker(),
    [map, locationArr, infoArr]
  );

  useEffect(() => {
    if (map == null) return;

    //Event listener for bounds change
    kakao.maps.event.addListener(map, "bounds_changed", () => {
      dispatch(setBounds(map.getBounds()));
    });
    getLocation();
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
