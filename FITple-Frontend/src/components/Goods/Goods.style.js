import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width:250px;
    height:337px;
    display:flex;
    flex-direction:column;
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