import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useParks from './useParks';

function isMarkerVisible(park,filterOptions){
  if(filterOptions.light && park.streetlamp < filterOptions.nearbyLight){
    return false;
  }
  if(filterOptions.cctv && park.cctv_cnt < filterOptions.nearbyCCTV){
    return false;
  }
  return true;
}

export default function useFilter(markerArr,map) {
  const filterOptions = useSelector((state) => state.filter);
  const parkList = useParks();
  const bounds = useSelector((state) => state.parks.bounds);

  const [filteredPark, setFilteredPark] = useState([]);

  useEffect(() => {
    setFilteredPark(parkList.data);
    if (filterOptions.light) {
      setFilteredPark((prevList) => {
        return prevList.filter(
          (park) => {
            if(markerArr[park.id] && park.streetlamp < filterOptions.nearbyLight){
              markerArr[park.id].setMap(null);
            }
            else if(markerArr[park.id]){
              markerArr[park.id].setMap(map)
            }
            return park.streetlamp >= filterOptions.nearbyLight;
          }
        );
      });
    }

    if (filterOptions.cctv) {
      setFilteredPark((prevList) => {
        return prevList.filter(
          (park) => {
            if(markerArr[park.id] && park.cctv_cnt < filterOptions.nearbyCCTV){
              markerArr[park.id].setMap(null);
            }
            else if(markerArr[park.id]){
              markerArr[park.id].setMap(map)
            }
            return park.cctv_cnt >= filterOptions.nearbyCCTV
          }
        );
      });
    }
    if(parkList.data.length !== 0){
      parkList.data.forEach(park => {
        if(markerArr[park.id] && isMarkerVisible(park,filterOptions)){
          markerArr[park.id].setMap(map)
        }
      });
    }
  }, [filterOptions, parkList, bounds]);

  return {
    data: filteredPark,
  };
}
