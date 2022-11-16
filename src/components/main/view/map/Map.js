import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Map, MapMarker } from "react-kakao-maps-sdk";
import images from "../../../../resources/img/img";
import { MapMark } from "./MapMaker";

const KakaoMapAPI = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let imageSrc = images.current_user, // 사용자 마커이미지의 주소입니다    
      imageSize = new window.kakao.maps.Size(20, 20), // 마커이미지의 크기입니다
      imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);


    const container = document.getElementById("maps");
    // 사용자의 실시간 위치를 가져올 정보
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        let markerPosition = new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        // 마커를 표시합니다
        displayMarker(markerPosition);
      });
    }
    const displayMarker = (locPosition) => {
      // 마커를 생성합니다
      let marker = new window.kakao.maps.Marker({  
          map: map, 
          position: locPosition,
          image:markerImage,
      });
      let circle = new window.kakao.maps.Circle({
        radius: 6000, // 미터 단위의 원의 반지름
        strokeWeight: 1, // 선의 두께
        strokeColor: '#6556FF', // 선의 색깔
        strokeOpacity: 0.5, // 선의 불투명도
        strokeStyle: 'solid', // 선의 스타일
        fillColor: '#6556FF', // 채우기 색깔
        fillOpacity: 0.05  // 채우기 불투명도
      });
      // 지도 중심좌표를 접속위치로 변경합니다
      circle.setMap(map);
      map.setCenter(locPosition);
      
      

      // 맵 마우스 휠  확대 금지
      // 주석 : 기능활성화
      // 주석해제 : 기능 비활성화
      // map.setZoomable(false);
      
      
      // 맵 이동 금지
      // 주석 : 기능활성화
      // 주석해제 : 기능 비활성화
      // map.setDraggable(false);
    }    
    
    const options = {
      center: new window.kakao.maps.LatLng(
        37.365264512305174,
        127.10676860117488
      ),
      // center: new window.kakao.maps.LatLng(lat, lon),
      level: 4,
    };

    const map = new window.kakao.maps.Map(container, options);

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
      
      let goDdetailPage = () => {
        navigate("/review/reviewlist", {state:"review"});
      };
      window.kakao.maps.event.addListener(
        custom_marker,
        "click",
        goDdetailPage,
      );
    });


    
  }, []);
  
  return (
    <div>
      <div id="maps" style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
};

export default KakaoMapAPI;
