import { BottomMenuSection } from "../style/bottommenuStyle";
import images from "../../../resources/img/img";

const BottomMenu = () => {
  return(
    <BottomMenuSection.BottomMenuFrame>
      <ul className="flex flex_jc_sa flex_ai_c">
        <li>
          <div className="img_box">
            <img src={images.menu_icon1} alt=""/>
          </div>
          <div>지도</div>
        </li>
        <li>
          <div className="img_box">
            <img src={images.menu_icon2} alt=""/>
          </div>
          <div>동네탐색</div>
        </li>
        <li>
          <div className="img_box">
            <img src={images.menu_icon3} alt=""/>
          </div>
          <div>리뷰쓰기</div>
        </li>
        <li>
          <div className="img_box">
            <img src={images.menu_icon4} alt=""/>
          </div>
          <div>저장목록</div>
        </li>
        <li>
          <div className="img_box">
            <img src={images.menu_icon5} alt=""/>
          </div>
          <div>마이페이지</div>
        </li>
      </ul>
    </BottomMenuSection.BottomMenuFrame>
  )
}

export default BottomMenu;