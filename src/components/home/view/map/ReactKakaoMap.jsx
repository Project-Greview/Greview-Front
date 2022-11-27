import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Map, useMap, MapMarker, Circle } from "react-kakao-maps-sdk";

import { searchKeyword, searchResult, setPageInfoState } from "../../../../states/commonState";

import images from "../../../../resources/img/img";

const ReactKakaoMap = () => {
  const navigate = useNavigate();

  const pageState = useRecoilState(setPageInfoState);
  const setPlace = useRecoilState(searchKeyword);

  // const setResult = useRecoilState(searchResult);


  const [markers, setMarkers] = useState([]);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  console.log("입력받은 키워드는", setPlace[0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정
      setState((prev) => ({
        ...prev,
        errMsg: "사용자의 위치를 가져오는데 실패하였습니다.",
        isLoading: false,
      }));
    }
    
    let ps = new window.kakao.maps.services.Places();
    let searchOption =  {
      location: state.center,
      size: 15,
    }
    
    ps.keywordSearch(setPlace[0] ,(data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
      }
    });
  }, []);
  
  const data = [
    {
      latlng: { lat: state.center.lat, lng: state.center.lng },
    },
  ];

  const EventMarkerContainer = ({ position }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        // 마커를 표시할 위치
        position={position}
        // 마커이미지의 주소
        image={{
          src: images.map_maker,
          // 마커이미지의 크기
          size: {
            width: 40,
            height: 59,
          },
        }}
        // 마커 클릭 시 페이지 이동 이벤트
        onClick={() => {
          navigate("/review/reviewlist", {
            state: {
              value: 5,
              tit: "리뷰목록",
            },
          });
        }}
      ></MapMarker>
    );
  };
  console.log(markers);

  return (
    <Map // 지도를 표시할 Container
      center={state.center}
      style={{
        // 지도의 크기
        width:`${pageState[0].value === 0 ? "100%" : "100%"}`,
        height: `${pageState[0].value === 0 ? "100vh" : "20vh"}`,
      }}
      level={4} // 지도의 확대 레벨
    >
      <Circle
        center={{
          lat: state.center.lat,
          lng: state.center.lng,
        }}
        radius={`${pageState[0].value === 0 ? 300 : 150}`}
        strokeWeight={1} // 선의 두께
        strokeColor={"#6556FF"} // 선의 색깔
        strokeOpacity={0.2} // 선의 불투명도
        strokeStyle={"solid"} // 선의 스타일
        fillColor={"#6556FF"} // 채우기 색깔
        fillOpacity={0.05} // 채우기 불투명도
      />
      <MapMarker
        position={state.center}
        image={{
          src: images.current_user,
          size: { width: 20, height: 20 },
          option: { offset: { x: 20, y: 20 } },
        }}
      />
      {/* marker의 경우 검색 후 해당 결과를 마커로 표시 */}
      {markers.map((point) => (
        // {data.map((point) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${point.content}-${point.position.lat},${point.position.lng}`}
          // position={point.position} 
          position={state.center}
        />
      ))}
    </Map>
  );
};

export default ReactKakaoMap;