import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Map, MapMarker } from "react-kakao-maps-sdk";
import marker_c from "../../../../resources/img/logo/marker_c.svg";
import { MapMark } from "./MapMaker";


const KakaoMapAPI = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const container = document.getElementById('maps');
    // const lat = navigator.geolocation.getCurrentPosition(document.coords.latitude);
    // const lon = navigator.geolocation.getCurrentPosition(document.coords.longitude);
    const options = {
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      // center : new window.kakao.maps.LatLng(lat,lon),
      level: 7,
      
    };
    const map = new window.kakao.maps.Map(container, options);
        
    const infos = [];
    MapMark.forEach((reserve) => {
    // 커스텀 마커
      const imageSrc = marker_c,
      imageSize = new window.kakao.maps.Size(27,46);
      const reserveMaker = new window.kakao.maps.MarkerImage(imageSrc,imageSize);
  
      const custom_marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(reserve.lat, reserve.lng),
        image: reserveMaker,
      });
  
      // infoWindow용
      const iwContent = reserve.content
  
      const infowindow = new window.kakao.maps.InfoWindow({
          content : iwContent,
          removable : true,
      });
  
      infos.push(infowindow);
  
      let openInfo = function() {
        infos.forEach(function(each) { each.close(); }); // close all infos
        infowindow.open(map, custom_marker); // open target info
      };
  
      let goDdetailPage = () => {
        navigate("/regist");
      }
      window.kakao.maps.event.addListener(custom_marker, 'click', goDdetailPage);
    });
    }, 
  [])
  

  
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