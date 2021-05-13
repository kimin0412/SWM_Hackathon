import { useState } from "react";
import { SpotModal } from '../components/organisms/Map/SpotModal.js';
import swal from '@sweetalert/with-react';
/* global kakao */
export default function makeMarker(data, map) {
    // const [markerArr, setMarkerArr] = useState([])
    console.log(data)
    const { kakao } = window
    let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data.lat, data.lon),
    })
    const info = new kakao.maps.InfoWindow({
        content: `<div><h2>${data.park_name}</h2><p>안전점수...</p><p>기타등등...</p></div>`,
        removable: true,
    });
    kakao.maps.event.addListener(marker, 'mouseover', function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        info.open(map, marker);
    });

    kakao.maps.event.addListener(marker, 'mouseout', function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        info.close();
    });
    kakao.maps.event.addListener(marker, 'click', () => {
        swal(
            <SpotModal />
        );
    })
    return marker
}
