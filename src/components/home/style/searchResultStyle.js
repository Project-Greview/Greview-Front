import styled from "styled-components";

export const SearchResultSection = {
  ListFrame:styled.div`
    margin: 5.5rem 0;
    .tab{position:absolute;width:100%; padding: 0 2rem;
      ul{
        li{float: left;width:50%;text-align: center;border-bottom: 1px solid #EDEEF9;padding-bottom: 1rem;color: #D0CFCF;}
        & .on{border-bottom: 2px solid #6556FF;color: #6556FF;}
      }
    }
    .result_list{padding-top: 5rem;
      .result_num {justify-content:space-between;padding: 0 2.5rem;
       
        p{line-height: 2rem;font-size: 1.2rem;color: #959292;
          strong{color:#3A3A3A;font-size: 1.2rem;font-weight:bold}
        }
        select{font-size: 1.4rem;border: none;
          option{font-size: 1.4rem;}
        }
      }
      ul{
        .no_result {margin:0 auto;}
        li{display:flex;padding: 2rem 2rem 0.9rem;border-bottom:1px solid #EDEDED;
          .img{width : 9rem;height: 9rem;background: #d9d9d9;border-radius: 0.5rem;}
          .profile{display:flex;
            .pro_img{ width : 2.4rem;height: 2.4rem; background: #d9d9d9;border-radius: 50%;}
            p{margin-left: 0.5rem;line-height:2.5rem;color: #3A3A3A;font-size: 1.4rem;}
          }
          
          .info{width:75%; padding: 0.5rem 0 2rem 2.5rem ; //width:22rem;
            .review{margin: 0.8rem 0;overflow: hidden;text-overflow: ellipsis; display: -webkit-box;-webkit-line-clamp: 2;  -webkit-box-orient: vertical;
              strong{color:#6556FF;font-size:1.2rem;margin:0}
            }
          }
          & .no_img{ width: 100%;padding-left: 0;}
          p{font-size: 1.2rem;color: #959292;
              strong{color:#3A3A3A;font-size:1.6rem;margin-right:0.9rem}
            }
        }
      }
      
    }
  `
}