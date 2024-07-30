import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const Wrap = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 0 20%;
`
export const UserImgWrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:28px;
`

export const UserImg = styled.img`
    width:144px;
    height:144px;
`

export const UserName = styled.h3`
    font-size:25px;
    font-weight:bold;
`

export const UserInfomContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    gap:15px;
`

export const UserInfomWrap = styled.div`
    display:flex;
    justify-content:space-between;
`
export const OneLineItem = styled.div`
    border:2.5px solid black;
    border-radius:50px;
`

export const IndividualWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    padding-top:48px;
    padding-bottom:25px;
    gap:253px;
`
export const ClosetImg = styled.img`
    width:40px;
    height:40px;
`
export const HeartImg = styled.img`
    width:40px;
    height:40px;
`