import { useState } from "react";
import { SpotModal } from '../components/organisms/Map/SpotModal.js';
import swal from '@sweetalert/with-react';
/* global kakao */
export default function makeCircle(data, map) {
    const { kakao } = window
    let circle = new kakao.maps.Circle({
        map: map,
        center: new kakao.maps.LatLng(data.lat, data.lon),
        radus: 1,
        fillColor: '#fbffcf',
        fillOpacity: 0.01,
        strokeOpacity: 0,
    })
    circle.setMap(map);

    return circle
}