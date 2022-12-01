import styled from "styled-components";
import images from "../../../resources/img/img";

const HashTagStyle = {
  TagItem:styled.span`
    position: relative;font-size:1.4rem;margin:0 0.8rem 0.1rem 0;display:inline-block; padding:0.3rem 1rem 0.3rem 3.3rem;border-radius:5rem;border:1px solid #EDEDED; background:#fff;color:#959292;
    ::before{position: absolute;left: 0.8rem;top: 0.5rem;display: inline-block;content:""; width:1.6rem; height:1.6rem; background:url("${images.welcomeLogo}");background-size:1.6rem;}
  `
};

const HashTag = ({tagName}) => {
  return(
    <HashTagStyle.TagItem>{tagName}</HashTagStyle.TagItem>
  )
}

export default HashTag;