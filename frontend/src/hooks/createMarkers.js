import { SpotModal } from '../components/organisms/Map/SpotModal.js';
import swal from '@sweetalert/with-react';
/* global kakao */
export default function createMarkers(locationArr, infoArr, map) {
  // const [markerArr, setMarkerArr] = useState([])

  const { kakao } = window;
  const tempArr = [];
  for (let i = 0; i < locationArr.length; i++) {
    let e = locationArr[i];
    let mkr = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(e.mapY, e.mapX),
    });
    tempArr.push(mkr);
    const info = new kakao.maps.InfoWindow({
      content: infoArr[i],
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
      swal(<SpotModal />);
    });
  }
  // locationArr.forEach(e => {
  //     let mkr = new kakao.maps.Marker({
  //         map: map,
  //         position: new kakao.maps.LatLng(e.mapY, e.mapX),
  //     })
  //     tempArr.push(
  //         mkr
  //     )
  //     const info = new kakao.maps.InfoWindow({
  //         content: `<div><h2>소마공원</h2><p>안전점수...</p><p>기타등등...</p></div>`,
  //         removable: true,
  //     });
  //     kakao.maps.event.addListener(mkr, 'mouseover', function () {
  //         // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
  //         info.open(map, mkr);
  //     });
  //     kakao.maps.event.addListener(mkr, 'mouseout', function () {
  //         // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
  //         info.close();
  //     });
  //     kakao.maps.event.addListener(mkr, 'click', () => {
  //         swal(
  //             <SpotModal />
  //         );
  //     })
  // })
  // setMarkerArr(tempArr)

  // return markerArr
  return tempArr;
}
