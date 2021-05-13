import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function useFilter() {
  const filterOptions = useSelector((state) => state.filter);
  const parkList = useSelector((state) => state.parks.parkList);
  const bounds = useSelector((state) => state.parks.bounds);

  const [filteredPark, setFilteredPark] = useState(parkList);

  useEffect(() => {
    if (filterOptions.light) {
      setFilteredPark((prevList) => {
        return prevList.filter(
          (park) => park.streetlamp >= filterOptions.nearbyLight
        );
      });
    }

    if (filterOptions.cctv) {
      setFilteredPark((prevList) => {
        return prevList.filter(
          (park) => park.cctv_cnt >= filterOptions.nearbyCCTV
        );
      });
    }
  }, [filterOptions, parkList, bounds]);

  return filteredPark;
}
