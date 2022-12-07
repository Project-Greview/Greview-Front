import styled from "styled-components";

export const SaveListSection = {
  ListFrame:styled.ul`
    min-height:85vh; padding:1.6rem 2rem; background-color:#F8F8F8; margin:4.7rem 0 6.5rem;
    .list_wrap{background:#ffffff;margin:0 0 1.2rem;border: 1px solid #EDEDED;border-radius:1rem;position: relative;
      .save_mark{position:absolute;right:1.6rem;top:1.4rem;}
      .thumbnail {margin:0rem 0 0.9rem;height:9.8rem;
        img{object-fit:cover;width:100%;height:inherit;border-radius:1rem 1rem 0 0}
      }
      .txt_box{margin:0 0.8rem 0.8rem;}
      .store_info{
        .star{float:right;font-size:1.6rem;color:#6556FF;
          img{width:1.9rem;height:1.8rem;vertical-align:text-top;margin-right:0.6rem}
        }
        .address{font-size:1.4rem;color:#959292;}
      }
    }
    .hashtag_wrap{width:100%;margin:1rem 0 0;height: 2.7rem; overflow-x: scroll;position:relative;
      .overBox{width:max-content;height:2.5rem;}
    }
  `,
}
