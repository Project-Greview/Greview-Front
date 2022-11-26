import { useNavigate, useLocation } from "react-router-dom";

import testImages from "../../../resources/img/review.jpg";
import HashTag from "../../review/view/HashTag";
import images from "../../../resources/img/img";
import { SaveListSection } from "../style/saveListStyle";
const SaveItem = () => {
  return(
    <li className="list_wrap observer_target">
      <img className="save_mark" src={images.save_on} alt="" />
      <div children className="thumbnail">
        <img src={testImages} alt="" />
      </div>
      <div className="txt_box">
        <div className="store_info">
          <p className="name">제일곱창 <span className="star"><img src={images.star_on} alt="별점" />4.5</span></p>
          <p className="address">서울시 성동구 고산자로 746</p>
        </div>
        
        <div className="hashtag_wrap">
          <div className="overBox">
            <HashTag tag_name={"맛집"}/>
            <HashTag tag_name={"친절해요"}/>
            <HashTag tag_name={"웨이팅필수"}/>
          </div>
        </div>
      </div>
    </li>
  )
}
  
export default SaveItem;