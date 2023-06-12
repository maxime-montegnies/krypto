import useFetch from "react-fetch-hook";
import useApp from "../store/useApp";
import { useEffect, useState } from "react";
const useFetchData = (url, _observer) => {
  const data = useFetch(url, _observer);
  // 
  // 
  // 
  // Animation Observers
  const setUpdateIntersectionObserver = useApp(
    (state) => state.setUpdateIntersectionObserver
  );
  useEffect(setUpdateIntersectionObserver, [data.isLoading]);
  useEffect(()=>{
  }, [data.isLoading]);
  // Animation Observers
  //
  //
  //
  return data;
};
export default useFetchData;
