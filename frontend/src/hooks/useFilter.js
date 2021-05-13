import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function useFilter() {
  const filterOptions = useSelector((state) => state.filter);
  const parkList = useSelector((state) => state.parks.parkList);

  const [filteredPark, setFilteredPark] = useState(parkList);

  useEffect(() => {
    setFilteredPark(parkList);

    if (filterOptions.light) {
      setFilteredPark((prevList) => {
        return prevList.filter((park) => park.streatlamp >= filterOptions.nearbyLight);
      });
    }

    if (filterOptions.cctv) {
      setFilteredPark((prevList) => {
        return prevList.filter((park) => park.cctv_cnt >= filterOptions.nearbyCCTV);
      });
    }
  }, [filterOptions, parkList]);

  return filteredPark;
}
