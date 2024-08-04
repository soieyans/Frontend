import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    box-sizing:border-box;
    width:100%;
    padding: 0 100px;
    padding-bottom:124px;
    

`

export const SubTitleWrap = styled.div`
    padding-top:40px;
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const SubTitle = styled.div`
    font-size:24px;
    color:#000;
    font-weight:bold;
    display:flex;

`

export const ShowAll = styled.div`
    font-size:20px;
    color:#838383;
    font-weight:500;
    text-decoration: underline;
    cursor: pointer;
`

export const Highlight = styled.div`
    white-space:nowrap;
    color:#0276FE;
    `

export const RecomUserWrap = styled.div`
    width: 100%;
    padding-top: 26px;
    display: flex;
    flex-wrap: wrap; /* 줄바꿈 허용 */
    gap: 36px;
    align-items: center;
    white-space: nowrap; /* 수평 스크롤을 방지하기 위해 사용 */
    justify-content:center;
`;

