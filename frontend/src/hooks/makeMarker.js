import { SpotModal } from '../components/organisms/Map/SpotModal.js';
import swal from '@sweetalert/with-react';
/* global kakao */
export default function makeMarker(data, map) {
  // const [markerArr, setMarkerArr] = useState([])
  const { kakao } = window;
  const imageSrc = 'https://i.ibb.co/cvVVdfc/parkIcon.png'

  let marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(data.lat, data.lon),
    image: new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(64, 64), new kakao.maps.Point(30, 20)),
  });
  const safety_idx = Math.round(data.safety_idx * 100) / 100;
  const info = new kakao.maps.InfoWindow({
    content: `<div style= "font: bold; padding:5px; font-size: 10px"><h2>${data.park_name}</h2><p>안전점수 ${safety_idx}</p><p>CCTV 수 ${data.cctv_cnt}</p><p>가로등 수 ${data.streetlamp}</p></div>`,
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
    swal(<SpotModal data={data} />);
  });
  return marker;
}
