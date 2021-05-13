import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function usePark() {
  const [parksList, setParksList] = useState([]);
  const bounds = useSelector((state) => state.parks.bounds);

  const [wholeBounds, setWholeBounds] = useState(bounds);

  useEffect(() => {
    if (bounds === null || bounds.qa === null || wholeBounds === null) return;

    const roundedBounds = {
      qa: Math.round(bounds.qa * 100) / 100,
      ha: Math.round(bounds.ha * 100) / 100,
      pa: Math.round(bounds.pa * 100) / 100,
      oa: Math.round(bounds.oa * 100) / 100,
    };

    if (
      roundedBounds.qa !== wholeBounds.qa ||
      roundedBounds.ha !== wholeBounds.ha ||
      roundedBounds.pa !== wholeBounds.pa ||
      roundedBounds.oa !== wholeBounds.oa
    ) {
      setWholeBounds(roundedBounds);
    }
  }, [bounds, wholeBounds]);

  useEffect(() => {
    if (wholeBounds === null || wholeBounds.qa === null) return;

    const roundedBounds = { ...wholeBounds };

    if (roundedBounds.qa === roundedBounds.pa) {
      roundedBounds.qa -= 0.005;
      roundedBounds.pa += 0.005;
    }
    if (roundedBounds.ha === roundedBounds.oa) {
      roundedBounds.ha -= 0.005;
      roundedBounds.oa += 0.005;
    }

    axios({
      method: "GET",
      url: `https://swm14-backend2-jakyk.run.goorm.io/api/park/${roundedBounds.qa}/${roundedBounds.ha}/${roundedBounds.pa}/${roundedBounds.oa}`,
    })
      .then((res) => res.data)
      .then((data) => {
        setParksList(data);
      })
      .catch((err) => console.log(err));
  }, [wholeBounds]);

  useEffect(() => {
    async function fetchClimate() {
      if (parksList.length === 0 || "climate" in parksList.data[0]) return;

      const modifiedParks = await Promise.all(
        parksList.data.map(async (park) => {
          const code = await axios({
            method: "GET",
            url: `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${park.lon}&y=${park.lat}`,
            headers: {
              Authorization: "KakaoAK 0e7ae297450f152583386991cf820ea9",
            },
          }).then((res) => res.data.documents[0].code);

          const climate = await axios({
            method: "GET",
            url: `https://swm14-backend2-jakyk.run.goorm.io/api/weather?zone=${code}`,
          })
            .then((res) => res.data.kmaList)
            .catch((err) => console.log(err));

          park.climate = climate;

          return park;
        })
      );

      setParksList({ data: modifiedParks });
    }

    fetchClimate();
  }, [parksList]);

  return parksList;
}
