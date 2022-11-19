import { useNavigate } from "react-router-dom";
import images from "../../resources/img/img";

const MyPageSetting = () => {
  const navigate = useNavigate();
  return(
    <>
      <ul className="setting_menu">
        <li>알림설정</li>
        <li onClick={
          () => {navigate(
            "/mypage/privatemodify",
            {state: { 
              value: 9,
              tit: "개인정보 수정",
              naviView: false
            }}
            )
          }
        }>
          <div>개인정보 수정</div>
          <div className="icon img_box">
            <img src={images.arrow_right} alt="개인정보 수정으로 이동"/>
          </div>
        </li>
        <li>문의하기</li>
        <li>버전정보</li>
      </ul>

      <ul className="setting_menu">
        <li>로그아웃</li>
        <li className="secession">서비스 탈퇴</li>
      </ul>
    </>
  )
}

export default MyPageSetting;