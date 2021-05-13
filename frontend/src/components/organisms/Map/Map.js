import React, { useEffect, useState } from "react";
import useMap from "../../../hooks/useMap";
import { useDispatch } from "react-redux";
import { setBounds } from "../../../store/parks";
import useFilter from "../../../hooks/useFilter";

import makeMarker from "../../../hooks/makeMarker";

// 마커 설정 : 기본위치-소마센터
let nowPlace = {
  x: 127.0425755,
  y: 37.503412,
};

/* global kakao */
const PARKMAX = 17735;

export const Map = ({ mobile }) => {
  const map = useMap();
  const [markerArr, setMarkerArr] = useState([]);
  const [parkMarked, setParkMarked] = useState(Array(PARKMAX));
  const parksList = useFilter(markerArr, map);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      parksList["data"].forEach((element) => {
        if (!parkMarked[element.id]) {
          let arr = parkMarked;
          arr[element.id] = true;
          setParkMarked([...arr]);
          // setMarkerN(markerN + 1);
          const marker = makeMarker(element, map);
          setMarkerArr((prev) => {
            prev[element.id] = marker;
            return prev;
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, [parksList, map, parkMarked]);

  useEffect(() => {
    if (map == null) return;

    const getGeolocation = () => {
      // 위치 정보가 사용이 가능하면
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          nowPlace.x = position.coords.longitude;
          nowPlace.y = position.coords.latitude;

          map.setCenter(new kakao.maps.LatLng(nowPlace.y, nowPlace.x));
        });
      } else {
        map.setCenter(new kakao.maps.LatLng(nowPlace.y, nowPlace.x));
      }
    };

    //Event listener for bounds change
    kakao.maps.event.addListener(map, "bounds_changed", () => {
      dispatch(setBounds(map.getBounds()));
    });
    getGeolocation();
  }, [map, dispatch]);

  const height = mobile ? "60vh" : "87vh";

  return (
    <div
      id="map"
      className="kakaomap"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height,
      }}
    >
      Kakao MAP API
    </div>
  );
};
