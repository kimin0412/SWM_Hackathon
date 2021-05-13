import { useState, useEffect } from "react";

/* global kakao */
export default function useMap() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP}&autoload=false&libraries=services`;;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");

        const options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 3,
        };

        const map = new kakao.maps.Map(container, options);
        // map config
        map.setDraggable(true);
        var control = new kakao.maps.ZoomControl();
        map.addControl(control, kakao.maps.ControlPosition.BOTTOMRIGHT);
        map.setMaxLevel(5);

        setMap(map);
      });
    };

    return () => document.head.removeChild(script);
  }, []);

  return map;
}
