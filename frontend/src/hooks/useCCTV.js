import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function useCCTV() {
  const bounds = useSelector((state) => state.parks.bounds);
  const [wholeBounds, setWholeBounds] = useState({
    ha: null,
    qa: null,
    oa: null,
    pa: null,
  });
  const [CCTVList, setCCTVList] = useState([]);

  useEffect(() => {
    if (
      bounds.qa.toFixed(2) !== wholeBounds.qa ||
      bounds.ha.toFixed(2) !== wholeBounds.ha ||
      bounds.oa.toFixed(2) !== wholeBounds.oa ||
      bounds.pa.toFixed(2) !== wholeBounds.pa
    ) {
      setWholeBounds({
        qa: bounds.qa.toFixed(2),
        ha: bounds.ha.toFixed(2),
        oa: bounds.oa.toFixed(2),
        pa: bounds.pa.toFixed(2),
      });
    }
  }, [bounds, wholeBounds]);

  useEffect(() => {
    //axios call to api...
  }, [wholeBounds])

  return CCTVList;
}
