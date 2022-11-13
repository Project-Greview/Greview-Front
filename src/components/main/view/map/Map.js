import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMapAPI = () => {
  useEffect(()=>{
    const container = document.getElementById("maps");
    const options = { 
      center: new window.kakao.maps.LatLng(
        33.450701, 
        126.570667
      ),
    };
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        map.panTo(
          new window.kakao.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
          )
        );
      });
    }
    const map = new window.kakao.maps.Map(container, options);
  },[]);

 
  
  return (
      <div>
        <div id="maps" style={{width:"100%", height:"100vh"}}></div>
        {/* <Map center={{
          lat: 33.450701,
          lng: 126.570667,
        }}
          style={{
            width: "100%", 
            height: "100vh"
          }}
        >
        </Map> */}
      </div>
    )
  }

export default KakaoMapAPI;