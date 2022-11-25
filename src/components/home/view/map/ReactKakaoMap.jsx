import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Map, useMap, MapMarker, Circle } from "react-kakao-maps-sdk";

import images from "../../../../resources/img/img";

const ReactKakaoMap = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState()
  const [place, setPlace] = useState([]);
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
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
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));

      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch("이태원 맛집", (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new window.kakao.maps.LatLngBounds()
          let markers = []
  
          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            })
            // @ts-ignore
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
          }
          setPlace(markers)
  
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds)
        }
      })

    }
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
  return (
    <Map // 지도를 표시할 Container
      center={state.center}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100vh",
      }}
      level={4} // 지도의 확대 레벨
    >
      <Circle
        center={{
          lat: state.center.lat,
          lng: state.center.lng,
        }}
        radius={3000}
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
      {data.map((value) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          position={value.latlng}
        />
      ))}
    </Map>
  );
};

export default ReactKakaoMap;
