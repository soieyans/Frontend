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

export const CompareLodingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FITpleLogo = styled.img`
    height: 97px;
    width: 62px;
    margin-top: 135px;
`;

export const CompareLoadingText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: black;
    font-size: 28px;
    font-weight: 700;
    margin-top: 24px;
`;

export const CompareLoadingSubText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: black;
    font-size: 16px;
    font-weight: 500;
    margin-top: 4px;
`;

export const CompareLoadingBar = styled.img`
    height: 15px;
    width: 337px;
    margin-top: 24px;
`;