import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function useCCTV() {
  const [CCTVList, setCCTVList] = useState([]);
  const bounds = useSelector((state) => state.parks.bounds);

  const [wholeBounds, setWholeBounds] = useState(bounds);

  useEffect(() => {
    if (bounds === null || bounds.qa === null || wholeBounds === null) return;

    const roundedBounds = {
      qa: Math.round(bounds.qa * 10) / 10,
      ha: Math.round(bounds.ha * 10) / 10,
      pa: Math.round(bounds.pa * 10) / 10,
      oa: Math.round(bounds.oa * 10) / 10,
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
      roundedBounds.qa -= 0.1;
      roundedBounds.pa += 0.1;
    }
    if (roundedBounds.ha === roundedBounds.oa) {
      roundedBounds.ha -= 0.1;
      roundedBounds.oa += 0.1;
    }

    axios({
      method: "GET",
      url: `http://15.165.135.86:8080/api/cctv/${roundedBounds.qa}/${roundedBounds.ha}/${roundedBounds.pa}/${roundedBounds.oa}`,
    })
      .then((res) => res.data)
      .then((data) => {
        setCCTVList(data);
      })
      .catch((err) => console.log(err));
  }, [wholeBounds]);

  return CCTVList;
}
