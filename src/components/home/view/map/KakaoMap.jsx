import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../../../resources/img/img";

const KakaoMap = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState();
  const container = useRef(null); 
  useEffect(() => {
    let mapContainer = document.getElementById('map'), 
    mapOption = { 
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 12 // 지도의 확대 레벨, 1~14
    }; 
    let map = new window.kakao.maps.Map(mapContainer, mapOption);
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            // watchPosition, getCurrentPosition
            let lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도
            let locPosition = new window.kakao.maps.LatLng(lat, lon);
            currentUserMarker(locPosition);
          });
        
    } else {
        let locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);    
        currentUserMarker(locPosition);
    };

    // dummy
      var positions = [
          {
            latlng: new window.kakao.maps.LatLng(37.26796, 127.00013)
          },
          {
            latlng: new window.kakao.maps.LatLng(37.40200, 127.10350)
          },
          {
            latlng: new window.kakao.maps.LatLng(37.48528, 126.90159)
          },
          {
            latlng: new window.kakao.maps.LatLng(37.56111, 127.03550)
          },
          {
            latlng: new window.kakao.maps.LatLng(37.35002, 127.10900)
          }
      ];
    // dummy

    // 접속한 사용자 위치를 표시하기위한 마커 정보
    let imageSrc = images.current_user,    
        imageSize = new window.kakao.maps.Size(20, 20),
        imageOption = {offset: new window.kakao.maps.Point(20, 20)};
    let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    function currentUserMarker(locPosition) {
        let marker = new window.kakao.maps.Marker({  
            map: map,
            image: markerImage,
            position: locPosition,
        });
        let circle = new window.kakao.maps.Circle({
          center: locPosition,
          radius: 300,
          strokeWeight: 1,
          strokeColor: "#6556ff",
          strokeOpacity: 0.2,
          strokeStyle: "solid",
          fillColor: "#6556ff",
          fillOpacity: 0.05
        });
        map.setCenter(locPosition);
        circle.setMap(map);
    };
    // 접속한 사용자 위치를 표시하기위한 마커 정보


    // 리뷰 마커
    positions.map((list, index) => {
      // 리뷰마커 커스텀 이미지
      let reviewImageSrc = images.map_maker,
          reviewImageSize = new window.kakao.maps.Size(40,59);
      let reviewMarkerImage = new window.kakao.maps.MarkerImage(reviewImageSrc, reviewImageSize);
      
      // 리뷰마커 커스텀 이미지로 생성
      let marker = new window.kakao.maps.Marker({
          map: map,
          position: list.latlng,
          image : reviewMarkerImage,
      });
      window.kakao.maps.event.addListener(marker, 'click', function() {
            navigate("/review/reviewlist", {
              state: {
                value: 5,
                tit: "리뷰목록",
              },
            });
        });
    });
  },[map]);

  return(
    <div id="map" style={{width:"100%", height:"100vh"}} ref={container}></div>
  )
}

export default KakaoMap;