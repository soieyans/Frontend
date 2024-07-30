import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    box-sizing:border-box;
    width:100%;
    padding: 0 64px;
    overflow:hidden;

`

export const SubTitleWrap = styled.div`
    padding-top:40px;
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const SubTitle = styled.div`
    font-size:30px;
    color:#838383;
    font-weight:700;

`

export const ShowAll = styled.div`
    font-size:25px;
    color:#838383;
    font-weight:500;
`

export const RecomUserWrap = styled.div`
    width:100vw;
    height:400px;
    padding-top:26px;
    display:flex;
    gap:36px;
    align-items:center;
    overflow-x:auto;
    white-space: nowrap;
    -ms-overflow-style: none;  /* IE 및 Edge */
    scrollbar-width: none;
`
