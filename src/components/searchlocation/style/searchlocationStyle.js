import styled from "styled-components";

export const SearchLocationSection = {
  SearchLocationFrame:styled.div`
    margin-top:4.7rem;
    .location_name {padding-top:1.9rem; margin-bottom:1.2rem;}
    .section_tit {padding:0 2.4rem; margin:2.5rem 0 1.3rem 0;}
    .location_name, .section_tit {font-size:2rem; font-weight:600;}
  `,
  TopSection:styled.div`
    padding:0 2.4rem; 
  `,
  BottomSection:styled.div`
    .best_tag_list {padding:0 2.4rem;}
    .overBox {
      > div .swiper-wrapper {
        .swiper-slide {width:unset;}
      }
    }
    ul {
      margin-top:0rem;
    }
  `
}