import React, { useEffect, useState } from 'react';
// 모달
import swal from '@sweetalert/with-react';
import { SpotModal } from '.';
import { GiBurningRoundShot } from 'react-icons/gi';

// 마커 설정 : 기본위치-소마센터
let nowPlace = {
    x: 127.0425755,
    y: 37.503412
};

/* global kakao */
export const HeeMap = () => {
    const [map, setMap] = useState(null)
    const [markerArr, setMarkerArr] = useState([])
    const [locationArr, setLocationArr] = useState([])
    const [mapBound, setMapBound] = useState([])

    const getLocation = () => {
        setLocationArr([
            { mapX: 127.0425755, mapY: 37.503412 },
            { mapX: 127.036719, mapY: 37.500054 },
            { mapX: 127.038356, mapY: 37.500338 }
        ])
    }

    const createMap = () => {
        const script = document.createElement('script')
        script.async = true
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=d305f2905e9d9b3f8c2740dca3a9e6b9&autoload=false`
        document.head.appendChild(script)
        script.onload = () => {
            const { kakao } = window
            kakao.maps.load(() => {
                let container = document.getElementById('myMap')
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level: 7,
                }

                const tmpMap = new kakao.maps.Map(container, options)
                kakao.maps.event.addListener(tmpMap, "bounds_changed", () => {
                    var bounds = map.getBounds();
                    var level = map.getLevel();

                    setMapBound(bounds)
                    console.log(bounds);
                });

                const createdMap = tmpMap
                setMap(createdMap)
            })
        }
    }

    const createMarker = () => {
        const { kakao } = window
        const tempArr = []
        locationArr.forEach(e => {
            let mkr = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(e.mapY, e.mapX),
            })
            tempArr.push(
                mkr
            )
            const info = new kakao.maps.InfoWindow({
                content: `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
                removable: true,
            });
            kakao.maps.event.addListener(mkr, 'mouseover', function () {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                info.open(map, mkr);
            });
            kakao.maps.event.addListener(mkr, 'mouseout', function () {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                info.close();
            });
            kakao.maps.event.addListener(mkr, 'click', () => {
                swal(
                    <SpotModal />
                );
            })
        })
        setMarkerArr(tempArr)
    }

    useEffect(() => {
        getLocation()
        createMap()
    }, [])

    useEffect(() => map && locationArr.length && createMarker(),
        [
            map,
            locationArr,
        ])

    return (
        <div id='myMap' style={{
            padding: 24,
            minHeight: 360,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>

        </div>
    );
}
