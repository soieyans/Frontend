import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    position: relative;
    width:250px;
    height:337px;
    display:flex;
    flex-direction:column;
    cursor: pointer;
    text-decoration: none; /* 기본 링크 스타일 제거 */
    color: inherit; /* 부모의 색상 상속 */

`
export const SetGoodsImg = styled.img`
    width:250px;
    height:250px;
    background-color:#d9d9d9;
    border-radius:20px;
    overflow:hidden;
`

export const Brand = styled.h3`
    font-size:20px;
    font-weight:bold;
`
export const GoodsName = styled.h3`
    font-size:20px;
    font-weight:bold;
`
export const GoodsSize = styled.h3`
    font-size:18px;
    color:#838383;
`

export const HeartIcon = styled.img`
    width:40px;
    height:40px;
    position:absolute;
    top:18px;
    right:14px;
`