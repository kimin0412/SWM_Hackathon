import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useParks from "./useParks";

export default function useFilter() {
  const filterOptions = useSelector((state) => state.filter);
  const parkList = useParks();
  const bounds = useSelector((state) => state.parks.bounds);

  const [filteredPark, setFilteredPark] = useState([]);

  useEffect(() => {
    if (parkList) {
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
    }

    if (filterOptions.climate && "climate" in parkList.data[0]) {
      const curTime = new Date();
      const time = curTime.getHours();
      
      const idx =
        time < 9
          ? 0
          : time < 12
          ? 1
          : time < 15
          ? 2
          : time < 18
          ? 3
          : time < 21
          ? 4
          : 5;

      setFilteredPark((prevList) => {
        return prevList.filter(
          (park) =>
            filterOptions.temperature[0] <= park.climate[idx].temp &&
            park.climate[idx].temp <= filterOptions.temperature[0]
        );
      });
    }
  }, [filterOptions, parkList, bounds]);

  return {
    data: filteredPark,
  };
}
