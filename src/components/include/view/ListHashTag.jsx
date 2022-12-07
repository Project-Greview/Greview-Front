import { Swiper, SwiperSlide } from "swiper/react";

import HashTag from "../../review/view/HashTag";
import { Pagination } from "swiper";

const HashTagList = [
  {
    tag: "맛집"
  },
  {
    tag: "웨이팅필수"
  },
  {
    tag: "친절해요"
  }
  
]

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
        {HashTagList.map((tag, index) => 
          <>
            <SwiperSlide key={index}>
              <HashTag tagName={tag.tag}/>
            </SwiperSlide>
          </>
        )}
      </Swiper>
      </div>
    </div>
  )
}

export default ListHashTag;