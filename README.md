# Greview-Front
React_Project


# Project Setup
- 개발환경
  - Node.js : v16.13.2
  - React : v18.2.0

# 개발 환경 세팅
- git clone https://github.com/Project-Greview/Greview-Front.git
- yarn install
- yarn start

# 프로젝트에 설치된 모듈
- "@testing-library/jest-dom": "^5.14.1",
- "@testing-library/react": "^13.0.0",
- "@testing-library/user-event": "^13.2.1",
- "axios": "^1.1.3",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-kakao-maps-sdk": "^1.1.5",
- "react-router-dom": "^6.4.2",
- "react-scripts": "5.0.1",
- "recoil": "^0.7.6",
- "styled-components": "^5.3.6",
- "swiper": "^8.4.4",
- "web-vitals": "^2.1.0"

# Front Source 간단 보는법!!!
- View Component : .jsx의 경우 실제 보여지는 부분
- styledComponent : **pagename** > style > **pagename**Style.js 의 경우 해당 페이지 전용 styled Components


# location state

|tit(페이지이름)|value(페이지 ID)|navi(하단메뉴)|
|---|---|---|
|지도|0|true|
|동네탐색|1|false|
|리뷰쓰기|2|false|
|저장목록|3|false|
|마이페이지|4|true|
|리뷰목록|5|false|
|리뷰상세|6|false|
|프로필 수정|7|false|
|설정|8|false|