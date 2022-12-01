import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import { searchKeyword, searchResult, setPageInfoState} from "../../../../states/commonState";

import images from "../../../../resources/img/img";

const KakaoMap = () => {
  const navigate = useNavigate();
  // 검색어 키워드 받아오기
  const setPlace = useRecoilValue(searchKeyword);
  const pageState = useRecoilState(setPageInfoState);
  const [result, setResult] = useRecoilState(searchResult);
  const [map, setMap] = useState();
  const container = useRef(null);
  const [userLat, setUserLat] = useState(Number);
  const [userLng, setUserLng] = useState(Number);
  useEffect(() => {
    // const getLocation = () => {
    //   if (navigator.geolocation) { // GPS를 지원하면
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       console.log(position.coords.latitude + ' ' + position.coords.longitude);
    //       setLat(position.coords.latitude);
    //       setLng(position.coords.longitude);
    //     }, function(error) {
    //       console.error(error);
    //     }, {
    //       enableHighAccuracy: false,
    //       maximumAge: 0,
    //       timeout: Infinity
    //     });
    //   } else {
    //     console.log('GPS를 지원하지 않습니다');
    //   }
    // }
    // getLocation();

    const locOption = {
      enableHighAccuracy: false,
      maximumAge: Infinity,
      timeout: 15000,
    };
    console.log(setPlace)
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
      map.setCenter(locPosition);
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
    // 키워드로 장소 검색
    const ps = new window.kakao.maps.services.Places();
    // 검색옵션
    const searchOption = {
      location: new window.kakao.maps.LatLng(userLat, userLng),
      radius: 3000,
      size: 15,
      page: 45,
    };
    ps.keywordSearch(setPlace, palceSearchDB, searchOption);
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
    // function displayPlacesOnSidebar(places) {
    //   const listEl = document.getElementById("placesList"),
    //     menuEl = document.getElementsByClassName("result-list"),
    //     fragment = document.createDocumentFragment(),
    //     bounds = new window.kakao.maps.LatLngBounds(),
    //     listStr = "";

    // 검색 결과 목록에 추가된 항목들을 제거합니다
    // removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    // removeMarker();

    // for (var i = 0; i < places.length; i++) {
    //   // 마커를 생성하고 지도에 표시합니다
    //   var placePosition = new window.kakao.maps.LatLng(places[i].y, places[i].x),
    //     // marker = addMarker(placePosition, i),
    //     itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

    //   // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    //   // LatLngBounds 객체에 좌표를 추가합니다
    //   bounds.extend(placePosition);
    //   // 검색결과 항목들을 검색결과 목록 Element에 추가
    //   listEl.appendChild(fragment);
    //   menuEl.scrollTop = 0;
    //   // 검색된 장소 위치를 기준으로 지도 범위를 재설정
    //   map.setBounds(bounds);
    //   console.log("마커생성용 검색결과",places);
    // };

    function getListItem(index, places) {
      var el = document.createElement("li"),
        itemStr =
          '<span class="markerbg marker_' +
          (index + 1) +
          '"></span>' +
          '<div class="info">' +
          "   <h5>" +
          places.place_name +
          "</h5>";

      itemStr += '  <span class="tel">' + places.phone + "</span>" + "</div>";

      el.innerHTML = itemStr;
      el.className = "item";

      return el;
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    // function addMarker(position, idx, title) {
    //     var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
    //         imageSize = new window.kakao.maps.Size(36, 37),  // 마커 이미지의 크기
    //         imgOptions =  {
    //             spriteSize : new window.kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
    //             spriteOrigin : new window.kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    //             offset: new window.kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    //         },
    //         markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
    //         marker = new window.kakao.maps.Marker({
    //             position: position, // 마커의 위치
    //             image: markerImage
    //         });

    //     marker.setMap(map); // 지도 위에 마커를 표출합니다
    //     markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    //     return marker;
    // };

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    // function removeMarker() {
    //     for ( var i = 0; i < markers.length; i++ ) {
    //         markers[i].setMap(null);
    //     }
    //     markers = [];
    // };

    // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
    function displayPagination(_pagination) {
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지번호를 삭제합니다
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= _pagination.last; i++) {
        var el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;

        if (i === _pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              _pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    // function displayInfowindow(marker, title) {
    //     var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    //     infowindow.setContent(content);
    //     infowindow.open(map, marker);
    // };

    // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    function removeAllChildNods(el) {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
    }
  }, [setPlace]);

  return (
    <>
      <div
        id="map"
        style={pageState[0].value === 0 ? { width: "100%", height: "100vh" } : {width: "100%", height: "20vh"}}
        ref={container}
      ></div>
      {/* <div id="placesList"></div>
      <div className="result-list"></div> */}
    </>
  );
};

export default KakaoMap;
