import styled from "styled-components";

export const BackgroundContainer = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0,0,0,0.5);
    overflow-y: auto;  /* 추가: 스크롤 가능하도록 설정 */
`;

export const CompareSearchPopUpContainer = styled.div`
    position: absolute;
    top: 143px; left: 383px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 40px;
    width: 674px;
    height: 964px;
`;

export const CompareTitleContainer = styled.div`
    margin-top : 28px;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const BackArrowBtn = styled.img`
    margin-left: 48px;
    height: 60px;
    width: 30px;
    cursor: pointer;
`;

export const CompareTitle = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #0276FE;
    font-size: 32px;
    font-weight: 700;
`;

export const CloseBtn = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 44px;
    cursor: pointer;
`;

export const CompareResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FITpleLogo = styled.img`
    height: 97px;
    width: 62px;
    margin-top: 25px;
`;

export const CompareResultSpeechBubble = styled.img`
    height: 94px;
    width: 276px;
    margin-top: 16px;
`;

export const CompareResultTable = styled.img`
    height: 316px;
    width: 393px;
    margin-top: 23px;
`;