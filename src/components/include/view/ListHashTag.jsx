import { Swiper, SwiperSlide } from "swiper/react";

import HashTag from "../../review/view/HashTag";
import { Pagination } from "swiper";

const ListHashTag = () => {
  return(
    <div className="hashtag_wrap">
      <div className="overBox">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        modules={[Pagination]}
        className="mySwiper flex_ai_c"
      >
        <SwiperSlide className="active">
          <HashTag tag_name="맛집"/>
        </SwiperSlide>
        <SwiperSlide>
          <HashTag tag_name="맛집"/>
        </SwiperSlide>
        <SwiperSlide>
          <HashTag/>
        </SwiperSlide>
        <SwiperSlide>
          <HashTag/>
        </SwiperSlide>
        <SwiperSlide>
          <HashTag/>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default ListHashTag;