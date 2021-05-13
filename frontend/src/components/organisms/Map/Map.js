import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBounds } from "../../../store/parks";

/* global kakao */
export const Map = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=6c31d5ee15ff482a2db83f63b7cb22f6&autoload=false";
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {

        const container = document.getElementById("map");


        const options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };

        const map = new kakao.maps.Map(container, options);

        const marker = new kakao.maps.Marker({
          map,
          position: new kakao.maps.LatLng(37.506502, 127.053617),
          clickable: true,
        });

        const info = new kakao.maps.InfoWindow({
          content: `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
          removable: true,
        });


        kakao.maps.event.addListener(marker, "click", () =>
          info.open(map, marker)
        );

        //Event listener for bounds change
        kakao.maps.event.addListener(map, "bounds_changed", () =>
          dispatch(setBounds(map.getBounds()))
        );

      });
    };

    return () => document.head.removeChild(script);
  }, []);

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
