import { useNavigate } from "react-router-dom";
import images from "../../../resources/img/img";

const HistoryBack = () => {
  const navigate = useNavigate();
  return(
    <div onClick={() => {navigate(-1)}} className="history_back cursor_p">
      <img src={images.arrow_left} alt="뒤로가기"/>
    </div>
  )
}

export default HistoryBack;