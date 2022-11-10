import { useNavigate } from "react-router-dom";

import images from "../../../resources/img/img";

const Registration = () => {

  const navigate = useNavigate();
  return(
    <>
      <div className="regsit_header flex">
        <div onClick={() => {navigate(-1)}} className="cursor_p"><img src={images.arrow_left} alt="뒤로가기"/></div>
        <div className="tit">회원가입</div>
      </div>
    </>
  )
}

export default Registration;