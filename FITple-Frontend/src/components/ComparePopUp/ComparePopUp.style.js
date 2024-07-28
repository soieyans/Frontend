import styled from "styled-components";

export const BackgroundContainer = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0,0,0,0.5);
    overflow-y: auto;  /* 추가: 스크롤 가능하도록 설정 */
`;