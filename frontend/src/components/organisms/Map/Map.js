
import React, { useEffect, useState } from "react";
import useMap from "../../../hooks/useMap";
import { useDispatch } from "react-redux";
import { setBounds } from "../../../store/parks";
import axios from 'axios';
// 모달
import swal from "@sweetalert/with-react";
import { SpotModal } from "../Map";
import useMarker from "../../../hooks/useMarker";
import useCCTV from "../../../hooks/useCCTV";
import useLights from "../../../hooks/useLights";
import useFilter from "../../../hooks/useFilter";
import usePakrs from "../../../hooks/useParks";

import createMarkers from "../../../hooks/createMarkers";


// 마커 설정 : 기본위치-소마센터
let nowPlace = {
  x: 127.0425755,
  y: 37.503412,
};

/* global kakao */
export const Map = ({ mobile }) => {
  const map = useMap();
  const [markerArr, setMarkerArr] = useState([]);
  const [locationArr, setLocationArr] = useState([]);
  const [infoArr, setInfoArr] = useState([]);
  const cctvList = useCCTV();
  const lightsList = useLights();
  const parksList = usePakrs();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(parksList, cctvList, lightsList);
  }, [parksList, cctvList, lightsList]);

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
         
        getHCode(nowPlace);

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


  useEffect(() => {}, []);

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
        // position.tmp = 20;
        // position.pop = 0;
          
        axios.get('/api/weather?zone=' + result[1].code)
        .then((Response) => {console.log(Response.data); position.weather = Response.kmaList.wfKor})
        .catch((Error) => {console.log(Error)})

      } else {
      }
    };

    geocoder.coord2RegionCode(position.x, position.y, callback);

    return position;
  };

  const height = mobile ? '60vh' : '90vh';
  return (
    <div
      id="map"
      className="kakaomap"
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
      }}
    >
      Kakao MAP API
    </div>
  );
};
