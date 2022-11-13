import React, { useEffect, useState } from "react";

const KakaoMapAPI = () => {
//   function success({ coords, timestamp }) {
//     const latitude = coords.latitude;   // 위도
//     const longitude = coords.longitude; // 경도
    
//     console.log(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`);
// }

// function getUserLocation() {
//     if (!navigator.geolocation) {
//         throw "위치 정보가 지원되지 않습니다.";
//     }
//     navigator.geolocation.watchPosition(success);
// }
// getUserLocation();
// const realtime = ({ coords, timestamp}) => {
//   const latitude = coords.latitude;   // 위도
//   const longitude = coords.longitude; // 경도
// }


  const [map,setMap] = useState(null);
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   map.panTo(
  //       new window.kakao.maps.LatLng(
  //           position.coords.latitude,
  //           position.coords.longitude
  //       )
  //   );
  // });
  useEffect(()=>{
      const container = document.getElementById('map');
      const options = { 
        center: new window.kakao.maps.LatLng(
          33.450701, 
          126.570667
        ),
      };
      
      const kakaoMap = new window.kakao.maps.Map(container, options);
      setMap(kakaoMap);

      // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          
          let lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
          let locPosition = new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          
          // 마커와 인포윈도우를 표시합니다
          displayMarker(locPosition);
              
        });
      
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      
      let locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),    
          message = 'geolocation을 사용할수 없어요..'
      displayMarker(locPosition,message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      let marker = new window.kakao.maps.Marker({  
          map: kakaoMap, 
          position: locPosition
      }); 
      let iwContent = message, // 인포윈도우에 표시할 내용
          iwRemoveable = true;
      // 지도 중심좌표를 접속위치로 변경합니다
      kakaoMap.setCenter(locPosition);      
    }

  },[]);
  
  return (
    <div>
      <div id="map" style={{width:"100%", height:"100vh"}}></div> 
    </div>
      )
  }

export default KakaoMapAPI;