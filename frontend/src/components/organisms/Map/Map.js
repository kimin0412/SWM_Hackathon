import React, { useEffect, useState } from 'react';
import useMap from '../../../hooks/useMap';
import { useDispatch } from 'react-redux';
import { setBounds, setParkList } from '../../../store/parks';
import axios from 'axios';
// 모달
// import swal from '@sweetalert/with-react';
// import { SpotModal } from '../Map';
// import useMarker from '../../../hooks/useMarker';
import useCCTV from '../../../hooks/useCCTV';
import useLights from '../../../hooks/useLights';
import useFilter from '../../../hooks/useFilter';
// import usePakrs from '../../../hooks/useParks';

import createMarkers from '../../../hooks/createMarkers';
import makeMarker from '../../../hooks/makeMarker';

// 마커 설정 : 기본위치-소마센터
let nowPlace = {
  x: 127.0425755,
  y: 37.503412,
};

/* global kakao */
const PARKMAX = 17735

export const Map = ({ mobile }) => {
  const map = useMap();
  const [markerArr, setMarkerArr] = useState([]);
  const [parkMarked, setParkMarked] = useState(Array(PARKMAX))
  const [markerN, setMarkerN] = useState(0)
  const [locationArr, setLocationArr] = useState([]);
  const [infoArr, setInfoArr] = useState([]);
  const cctvList = useCCTV();
  const lightsList = useLights();
  const parksList = useFilter(markerArr, map);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(parksList, cctvList, lightsList);
  // }, [parksList, cctvList, lightsList]);

  const getLocation = () => {
    setLocationArr([getGeolocation()]);
  };

  const getGeolocation = () => {
    // 위치 정보가 사용이 가능하면
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        nowPlace.x = position.coords.longitude;
        nowPlace.y = position.coords.latitude;

        getHCode(nowPlace);
      });
    }
    map.setCenter(new kakao.maps.LatLng(nowPlace.y, nowPlace.x));
    return nowPlace;
  };
  // const createMarker = () => {
  //   setMarkerArr(createMarkers(locationArr, infoArr, map));
  // };

  useEffect(() => { }, []);

  useEffect(() => {
    try {
      parksList['data'].forEach((element) => {
        if (!parkMarked[element.id]) {
          let arr = parkMarked
          arr[element.id] = true;
          setParkMarked([...arr])
          // setMarkerN(markerN + 1);
          const marker = makeMarker(element, map);
          setMarkerArr((prev) => {
            prev[element.id] = marker;
            return prev;
          })
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, [parksList]);

  // useEffect(() => {
  //   if (100 < markerN) {
  //     console.log('flush!!!!')
  //     markerArr.forEach((element) => {
  //       element.setMap(null);
  //     })
  //     setParkMarked(Array(PARKMAX))
  //     setMarkerArr([])
  //   }
  // }, [markerN])

  useEffect(
    () => map && locationArr.length && infoArr.length
    // && createMarker(),
    [map, locationArr, infoArr]
  );

  useEffect(() => {
    if (map == null) return;

    //Event listener for bounds change
    kakao.maps.event.addListener(map, 'bounds_changed', () => {
      dispatch(setBounds(map.getBounds()));
    });
    getLocation();
  }, [map]);

  const getHCode = function (position) {
    var geocoder = new kakao.maps.services.Geocoder();

    var callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        // position.tmp = 20;
        // position.pop = 0;

        axios
          .get('/api/weather?zone=' + result[1].code)
          .then((Response) => {
            // console.log(Response.data);
            position.weather = Response.kmaList.wfKor;
          })
          .catch((Error) => {
            console.log(Error);
          });
      } else {
      }
    };

    geocoder.coord2RegionCode(position.x, position.y, callback);

    return position;
  };

  const height = mobile ? '60vh' : '87vh';
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
