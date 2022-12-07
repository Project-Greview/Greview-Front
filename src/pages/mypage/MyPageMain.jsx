import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState,useRecoilValueLoadable  } from "recoil";

import { setMyPageTabState } from "../../states/tabMenuState";
import { setMyPageFixed } from "../../states/commonState";

import { Common } from "../../resources/style/common/commonStyle";
import { MyPageSection } from "../../components/mypage/style/mypageStyle";

import ProfileImage from "../../components/mypage/view/ProfileIImage";
import MyPageActivityList from "./MyPageActivityList";

import axios from "axios";
import { getReviewSelector } from "../../states/reviewState";
const MyPageMain = () => {
  const navigate = useNavigate();

  const setTabMenuValue = useSetRecoilState(setMyPageTabState);

  const tabIndex = useRecoilState(setMyPageTabState);

  const onToggleTabMenu = (e) => {
    const indexNum = e.currentTarget.getAttribute("data-tabindex");
    setTabMenuValue(indexNum);
  };

  const [scrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);

  const menufiexd = useRecoilState(setMyPageFixed);
  const setMenufiexd = useSetRecoilState(setMyPageFixed);


  const reviewTest = useRecoilValueLoadable(getReviewSelector);
  function handleScroll() {
      if(scrollY > 250) {
          setScrollY(window.pageYOffset);
          setScrollActive(true);
          setMenufiexd(true);
      } else {
          setScrollY(window.pageYOffset);
          setScrollActive(false);
      }
  }
  useEffect(() => {
      const scrollListener = () => {
        window.addEventListener("scroll", handleScroll);
      };
      scrollListener();
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  });


  return (
    <>
      <MyPageSection.MyPageHeader>
        <ProfileImage />
        <div className="user_info flex flex_dir_c">
          <p className="user_nickname">User NickName</p>
          <div className="act_position">User Default Position</div>
        </div>
        <Common.Button
          onClick={() => {
            navigate("/mypage/modify", {
              state: {
                value: 7,
                tit: "프로필 수정",
                naviView: false,
              },
            });
          }}
        >
          프로필 수정
        </Common.Button>
        <ul className={`${scrollY >= 250 ? "active" : ""} tabmenu_box flex flex_ai_c`}>
          <li
            className={`${tabIndex[0] === "1" ? "active" : ""} flex_jc_c`}
            data-tabindex="1"
            onClick={onToggleTabMenu}
          >
            리뷰
          </li>
          <li
            className={`${tabIndex[0] === "2" ? "active" : ""} flex_jc_c`}
            data-tabindex="2"
            onClick={onToggleTabMenu}
          >
            댓글
          </li>
          <li
            className={`${tabIndex[0] === "3" ? "active" : ""} flex_jc_c`}
            data-tabindex="3"
            onClick={onToggleTabMenu}
          >
            좋아요
          </li>
          <li className={`tabmenu_tit flex flex_jc_s`}>
            {tabIndex[0] === "1" ? (
              <>
                <div>
                  내가 작성한 리뷰<span>(00)</span>
                </div>
              </>
            ) : tabIndex[0] === "2" ? (
              <>
                <div>
                  내가 작성한 댓글<span>(00)</span>
                </div>
              </>
            ) : (
              <div className="sub_tabmenu flex">
                <div>
                  리뷰<span>(00)</span>
                </div>
                <span>|</span>
                <div>
                  댓글<span>(00)</span>
                </div>
              </div>
            )}
          </li>
        </ul>
      </MyPageSection.MyPageHeader>

      <MyPageActivityList />
    </>
  );
};

export default MyPageMain;
