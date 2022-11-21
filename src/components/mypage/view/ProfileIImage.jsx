import { useRecoilValue } from "recoil";
import { setPageInfoState } from "../../../states/commonState";
import images from "../../../resources/img/img";
import { ProfileImg } from "../style/profileimgStyle";

const ProfileImage = () => {
  const pageInfo = useRecoilValue(setPageInfoState);

  return(
    <>
      {pageInfo.value === 7 ?
        <ProfileImg.ImgCircle className="img_box relative flex flex_jc_c flex_ai_c">
          <img src={images.marker_c} alt="사용자 프로필" style={{width: "5.5rem", maxWidth: "5.5rem" }} />
          <img className="absolute" src={images.camera_fill} alt="사용자 프로필 이미지 수정" style={{bottom: "10px", right: "-10px"}}/>
        </ProfileImg.ImgCircle>
        :
        <ProfileImg.ImgCircle className="img_box flex flex_jc_c flex_ai_c">
          <img src={images.marker_c} alt="사용자 프로필" style={{width: "5.5rem", maxWidth: "5.5rem" }} />
        </ProfileImg.ImgCircle>
      }
    </>
  )
}

export default ProfileImage;