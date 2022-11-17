import { Swiper, SwiperSlide } from "swiper/react";
import { HashTagSection } from "../../style/hashtagStyle";
import { Pagination } from "swiper";

import images from "../../../../resources/img/img";

import "swiper/css";
import "swiper/css/pagination";


const HashTag = () => {
  return(
    <HashTagSection.HashTagFrame>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        modules={[Pagination]}
        className="mySwiper flex_ai_c"
      >
        <SwiperSlide className="active">
          <div className="img_box flex_as_c">
          </div>
          <div className="tag_nm">전체선택</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_box flex_as_c">
          </div>
          <div className="tag_nm">전체선택</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_box flex_as_c">
          </div>
          <div className="tag_nm">전체선택</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_box flex_as_c">
          </div>
          <div className="tag_nm">전체선택</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img_box flex_as_c">
          </div>
          <div className="tag_nm">전체선택</div>
        </SwiperSlide>
      </Swiper>
    </HashTagSection.HashTagFrame>
  )
}

export default HashTag;