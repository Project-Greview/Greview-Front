import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { RegistModalSection } from "../../style/modal";
import { registPostState } from "../../../../states/memberState";
import { Common } from "../../../../resources/style/common/commonStyle";

const RegistSuccess = () => {
  const navigate = useNavigate();
  const setIsRegist = useSetRecoilState(registPostState);
  
  const RegistEndPoint = () => {
    setIsRegist(false);
    navigate("/login",{});
  }
  return(
    <>
      <RegistModalSection.Background>
        <RegistModalSection.Modal>
          <div className="tit txt_cnt">회원가입이 완료되었습니다!</div>
          <Common.Button onClick={RegistEndPoint}>확인</Common.Button>
        </RegistModalSection.Modal>
      </RegistModalSection.Background>
    </>
  )
}

export default RegistSuccess;