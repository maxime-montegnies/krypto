import useFetch from "react-fetch-hook";
import useApp from "../store/useApp";
import { useEffect, useState } from "react";
// const server = 'http://localhost:8080';
const _env_MODE = import.meta.env.MODE;
const server = _env_MODE == 'development'?'http://localhost:8082':'';
// const server = 'http://kryptostone.us-east-1.elasticbeanstalk.com';
const useFetchData = (url, _observer) => {
    if(!url.includes('http')) url = server + url
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
