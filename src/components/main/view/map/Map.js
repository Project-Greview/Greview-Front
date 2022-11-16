import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Map, MapMarker } from "react-kakao-maps-sdk";
import images from "../../../../resources/img/img";
import { MapMark } from "./MapMaker";

const KakaoMapAPI = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const container = document.getElementById("maps");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도

        let locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        message = '<div style="padding:5px;">이거 실시간으로 움직이려나!</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    }
    const displayMarker = (locPosition, message) => {

    // 마커를 생성합니다
    let marker = new window.kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    let iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;
    // 인포윈도우를 생성합니다
    let infowindow = new window.kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    

    // const lat = navigator.geolocation.getCurrentPosition(
    //   document.coords.latitude
    // );
    // const lon = navigator.geolocation.getCurrentPosition(
    //   document.coords.longitude
    // );
    const options = {
      center: new window.kakao.maps.LatLng(
        37.365264512305174,
        127.10676860117488
      ),
      // center: new window.kakao.maps.LatLng(lat, lon),
      level: 7,
    };
    const map = new window.kakao.maps.Map(container, options);

    const infos = [];
    MapMark.forEach((reserve) => {
      // 커스텀 마커
      const imageSrc = images.map_maker,
        imageSize = new window.kakao.maps.Size(40, 59);
      const reserveMaker = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize
      );

      const custom_marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(reserve.lat, reserve.lng),
        image: reserveMaker,
      });

      // infoWindow용
      const iwContent = reserve.content;

      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent,
        removable: true,
      });

      infos.push(infowindow);

      let openInfo = function () {
        infos.forEach(function (each) {
          each.close();
        }); // close all infos
        infowindow.open(map, custom_marker); // open target info
      };

      let goDdetailPage = () => {
        navigate("/review/reviewlist", {state:"review"});
      };
      window.kakao.maps.event.addListener(
        custom_marker,
        "click",
        goDdetailPage
      );
    });
  }, []);

  return (
    <div>
      <div id="maps" style={{ width: "100%", height: "100vh" }}></div>
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
  );
};

export default KakaoMapAPI;
