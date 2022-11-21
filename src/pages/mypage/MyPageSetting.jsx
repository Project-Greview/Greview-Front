import MenuItems from "../../components/include/view/MenuItems";

const ver = "1.1.1";

const TopMenuList = [
  {
    name: "알림설정",
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
    name: "개인정보 수정",
    path: "/mypage/privatemodify",
    state: {
      value: 9,
      naviView: false,
    },
    arrow: true,
    class:"",
    sub_txt:"",
  },
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

const BottomMenuList = [
  {
    name: "로그아웃",
    path: "",
    state: {
      value: 9,
      naviView: false,
    },
    arrow: false,
    class:"",
    sub_txt:"",
  },
  {
    name: "서비스 탈퇴",
    path: "",
    state: {
      value: 9,
      naviView: false,
    },
    arrow: false,
    class: "secession",
    sub_txt:"",
  },
];

const MyPageSetting = () => {
  return (
    <>
      <ul className="setting_menu">
        {TopMenuList.map((menu, index) => (
          <MenuItems menu={menu} key={index} />
        ))}
      </ul>

      <ul className="setting_menu">
        {BottomMenuList.map((menu, index) => (
          <MenuItems menu={menu} key={index} />
        ))}
      </ul>
    </>
  );
};

export default MyPageSetting;
