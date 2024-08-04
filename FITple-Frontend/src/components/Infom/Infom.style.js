import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:20px;
    padding: 0 25%;
`

export const Wrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    
`
export const SubWrap = styled.div`
    display:flex;
    align-items:center;
    gap:28px;
`

export const UserImg = styled.img`
    width:140px;
    height:140px;
`

export const UserName = styled.h3`
    font-size:32px;
    font-weight:bold;
`
