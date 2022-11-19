import { useRecoilValue } from "recoil";
import { setPageTitleState } from "../../../states/commonState";
import images from "../../../resources/img/img";

const ProfileImage = () => {
  const ProfileStyle = {
    flexBasis: "8rem",
    maxWidth: "8rem",
    height: "8rem",
    margin: "2.1rem 2.2rem 0 0",
    borderRadius: "50%",
    border: "1px solid #ededed",
  };

  const pageInfo = useRecoilValue(setPageTitleState);
  console.log(pageInfo.value);

  return(
    <>
      {pageInfo.value === 7 ?
        <div className="img_box relative flex flex_jc_c flex_ai_c" style={ProfileStyle}>
          <img src={images.marker_c} alt="사용자 프로필" style={{width: "5.5rem", maxWidth: "5.5rem" }} />
          <img className="absolute" src={images.camera_fill} alt="사용자 프로필 이미지 수정" style={{bottom: "10px", right: "-10px"}}/>
        </div>
        :
        <div className="img_box flex flex_jc_c flex_ai_c" style={ProfileStyle}>
          <img src={images.marker_c} alt="사용자 프로필" style={{width: "5.5rem", maxWidth: "5.5rem" }} />
        </div>
      }
    </>
  )
}

export default ProfileImage;