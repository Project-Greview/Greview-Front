import React, { useEffect, useState } from "react";

const KakaoMapAPI = () => {
  const [map,setMap] = useState(null);
  useEffect(()=>{
    // const container = document.getElementById('map');
    // const options = {
    //   center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
    //   // center : new kakao.maps.LatLng(lat,lon),
    //   level: 7,
    // };
    // const map = new kakao.maps.Map(container, options);
      const container = document.getElementById('map');
      const options = { 
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      };
      
      const kakaoMap = new window.kakao.maps.Map(container, options);
      setMap(kakaoMap);
    },[])
  
  
  return (
    <div>
      <div id="map" style={{width:"100%", height:"100vh"}}></div> 
    </div>
      )
  }

export default KakaoMapAPI;