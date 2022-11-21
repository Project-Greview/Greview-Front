import { useRecoilValue, useSetRecoilState } from "recoil";
import { setLeftMenuState  } from "../../../states/commonState";

import { LeftMenuSection } from "../style/leftmenuStyle";
import MenuItems from "../../include/view/MenuItems";
import ProfileImage from "../../mypage/view/ProfileIImage";
 
const ver = "1.1.1";
const TopMenuList = [
  {
    name: "내 동네 탐색",
    path: "",
    state: {
      value: 1,
      naviView: false,
    },
    arrow: true,
    class:"",
    sub_txt:"",
  },
  {
    name: "리뷰 쓰기",
    path: "/review/reviewrite",
    state: {
      value: 2,
      naviView: false,
    },
    arrow: true,
    class:"",
    sub_txt:"",
  },
  {
    name: "저장 목록",
    path: "",
    state: {
      value: 3,
      naviView: false,
    },
    arrow: true,
    class:"",
    sub_txt:"",
  },
];
const BottomMenuList = [
  {
    name: "문의하기",
    path: "",
    state: {
      value: -1,
      naviView: false,
    },
    arrow: false,
    class:"",
    sub_txt:"",
  },
  {
    name: "버전정보",
    path: "",
    state: {
      value: 9,
      naviView: false,
    },
    arrow: false,
    class:"",
    sub_txt: ver,
  },
];

const LeftMenu = () => {
  const leftMenuState = useRecoilValue(setLeftMenuState);
  const leftMenuClose = useSetRecoilState(setLeftMenuState);
  return(
    <LeftMenuSection.ActiveBackground className={leftMenuState !== true ? "" : "active"}>
      <LeftMenuSection.LeftMenuFrame className={leftMenuState !== true ? "" : "active"}>
        <div className="profil_info">
          <div className="left_menu_header flex flex_jc_sb flex_ai_c">
            <div onClick={() => {leftMenuClose(false)}}>
              <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8333 1.34199L10.6583 0.166992L5.99999 4.82533L1.34166 0.166992L0.166656 1.34199L4.82499 6.00033L0.166656 10.6587L1.34166 11.8337L5.99999 7.17533L10.6583 11.8337L11.8333 10.6587L7.17499 6.00033L11.8333 1.34199Z" fill="#959292"/>
              </svg>
            </div>
            <div>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13.8096L20.9 11.9096C21.68 11.1296 21.68 9.85965 20.9 9.07965L19 7.18965V4.49965C19 3.39965 18.1 2.49965 17 2.49965H14.31L12.41 0.599648C11.63 -0.180352 10.36 -0.180352 9.58001 0.599648L7.69001 2.49965H5.00001C3.90001 2.49965 3.00001 3.39965 3.00001 4.49965V7.18965L1.10001 9.08965C0.320015 9.86965 0.320015 11.1396 1.10001 11.9196L3.00001 13.8196V16.4996C3.00001 17.5996 3.90001 18.4996 5.00001 18.4996H7.69001L9.59001 20.3996C10.37 21.1796 11.64 21.1796 12.42 20.3996L14.32 18.4996H17C18.1 18.4996 19 17.5996 19 16.4996V13.8096ZM11 16.4996C7.69001 16.4996 5.00001 13.8096 5.00001 10.4996C5.00001 7.18965 7.69001 4.49965 11 4.49965C14.31 4.49965 17 7.18965 17 10.4996C17 13.8096 14.31 16.4996 11 16.4996Z" fill="#959292"/>
              </svg>
            </div>
          </div>
          <ProfileImage />
        </div>
        <ul className="top_section">
          {TopMenuList.map((menu, index) => (
            <MenuItems menu={menu} key={index} />
          ))}
        </ul>
        <ul className="bottom_section">
          {BottomMenuList.map((menu, index) => (
            <MenuItems menu={menu} key={index} />
          ))}
        </ul>
      </LeftMenuSection.LeftMenuFrame>
    </LeftMenuSection.ActiveBackground>
  )
}

export default LeftMenu;