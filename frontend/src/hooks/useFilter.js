import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useParks from "./useParks";

export default function useFilter() {
  const filterOptions = useSelector((state) => state.filter);
  const parkList = useParks();
  const bounds = useSelector((state) => state.parks.bounds);

  const [filteredPark, setFilteredPark] = useState(parkList.data);

  useEffect(() => {
    setFilteredPark(parkList.data);

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

    if (filterOptions.climate) {
      //Todo...
    }
  }, [filterOptions, parkList, bounds]);

  return {
    data: filteredPark,
  };
}
