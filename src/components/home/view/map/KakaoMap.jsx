import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { searchKeyword, searchResult, setPageInfoState} from "../../../../states/commonState";

import images from "../../../../resources/img/img";

const KakaoMap = () => {
  const navigate = useNavigate();
  // 검색어 키워드 받아오기
  const Keyword = useRecoilValue(searchKeyword);
  const pageState = useRecoilState(setPageInfoState);
  const [result, setResult] = useRecoilState(searchResult);
  const [map, setMap] = useState(null);
  const container = useRef(null);
  const [userLat, setUserLat] = useState(Number);
  const [userLng, setUserLng] = useState(Number);

  
  
  useEffect(() => {
    const locOption = {
      enableHighAccuracy: false,
      maximumAge: Infinity,
      timeout: 15000,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // watchPosition, getCurrentPosition
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        let locPosition = new window.kakao.maps.LatLng(lat, lon);
        setUserLat(position.coords.latitude);
        setUserLng(position.coords.longitude);
        currentUserMarker(locPosition);
      });
    } else {
      let locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
      currentUserMarker(locPosition);
    }

    let mapContainer = document.getElementById("map"),
      mapOption = {
        center: new window.kakao.maps.LatLng(userLat, userLng),
        level: 4, // 지도의 확대 레벨, 1~14
      };
      
    let map = new window.kakao.maps.Map(mapContainer, mapOption);
    setMap(map);
    
    // 검색시 범위를 위한 center 지정]
    const center = window.kakao.maps.LatLng(userLat, userLng);
    // dummy
    const positions = [
      {
        latlng: new window.kakao.maps.LatLng(37.26796, 127.00013),
      },
      {
        latlng: new window.kakao.maps.LatLng(37.402, 127.1035),
      },
      {
        latlng: new window.kakao.maps.LatLng(37.48528, 126.90159),
      },
      {
        latlng: new window.kakao.maps.LatLng(37.56111, 127.0355),
      },
      {
        latlng: new window.kakao.maps.LatLng(37.35002, 127.109),
      },
    ];
    // dummy

    // 접속한 사용자 위치를 표시하기위한 마커 정보
    let imageSrc = images.current_user,
      imageSize = new window.kakao.maps.Size(20, 20),
      imageOption = { offset: new window.kakao.maps.Point(20, 20) };
    let markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    
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
        fillOpacity: 0.05,
      });
      // 접속 시 지도 중심
      map.setCenter(locPosition);
      // 지도와 동네탐색 변경 시 맵 reload 옵션
      map.relayout();
      // 사용자의 접속한 위치 기준 반경 표시
      circle.setMap(map);
    }
    // 접속한 사용자 위치를 표시하기위한 마커 정보

    // 리뷰 마커
    positions.map((list, index) => {
      // 리뷰마커 커스텀 이미지
      let reviewImageSrc = images.map_maker,
        reviewImageSize = new window.kakao.maps.Size(40, 59);
      let reviewMarkerImage = new window.kakao.maps.MarkerImage(
        reviewImageSrc,
        reviewImageSize
      );

      // 리뷰마커 커스텀 이미지로 생성
      let marker = new window.kakao.maps.Marker({
        map: map,
        position: list.latlng,
        image: reviewMarkerImage,
      });
      window.kakao.maps.event.addListener(marker, "click", function () {
        navigate("/review/reviewlist", {
          state: {
            value: 5,
            tit: "리뷰목록",
          },
        });
      });
    });

    if (pageState[0].value === 0) {
      // 키워드로 장소 검색
      const ps = new window.kakao.maps.services.Places();
      // 검색옵션
      const searchOption = {
        location: new window.kakao.maps.LatLng(userLat, userLng),
        radius: 3000,
        size: 15,
        page: 45,
      };
      ps.keywordSearch(Keyword, palceSearchDB, searchOption);
      function palceSearchDB(data, status, _pagination) {
        if (status === window.kakao.maps.services.Status.OK) {
          // 정상적으로 검색이 완료됐으면
          // 검색 목록과 마커를 표출합니다
          // displayPlacesOnSidebar(data);
          // 페이지 번호를 표출합니다
          // displayPagination(_pagination);
          
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          return;
        } else if (status === window.kakao.maps.services.Status.ERROR) {
          return;
        }
        setResult(data);
        // console.log("검색결과", data);
      }
    }
    
  }, [Keyword, container]);
    
  return (
    <>
      <div
        id="map"
        className={pageState[0].value === 0 ? "" : "sub"}
        style={pageState[0].value === 0 ? { width: "100%", height: "91vh" } : {width: "100%", height: "20vh"}}
        ref={container}
      ></div>
    </>
  );
};

export default KakaoMap;
