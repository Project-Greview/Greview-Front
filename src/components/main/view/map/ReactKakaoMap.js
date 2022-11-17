import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import images from "../../../../resources/img/img";

const ReactkakaoMap = () => {
  const current = function success({ coords, timestamp }) {
    const latitude = coords.latitude; // 위도
    const longitude = coords.longitude; // 경도

    alert(
      `위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`
    );
  };
  console.log(current);
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
      navigator.geolocation.getCurrentPosition(
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
    }
  }, []);

  return (
    <Map
      center={state.center}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100vh",
      }}
      level={4}
    >
      {/* {!state.isLoading && ( */}
      <MapMarker
        position={state.center}
        image={{
          src: images.current_user,
          size: { width: 20, height: 20 },
          option: { offset: { x: 20, y: 20 } },
        }}
      ></MapMarker>
      {/* )} */}
    </Map>
  );
};

export default ReactkakaoMap;
