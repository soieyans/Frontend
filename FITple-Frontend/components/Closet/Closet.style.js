import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 64px 125px;
    display: flex;
    flex-wrap: wrap; /* 항목이 줄 바꿈 가능하도록 설정 */
    justify-content: space-between; /* 항목 간의 간격을 자동으로 조정 */
    gap: 64px; /* 항목 간의 간격 */
    
    /* 각 아이템의 크기 */
    & > * {
        flex: 1 1 calc(25% - 64px); /* 기본 4열, 간격을 제외한 너비 */
        max-width: calc(25% - 64px); /* 최대 너비 설정 */
    }

    /* 반응형 설정 */
    @media (max-width: 1200px) {
        & > * {
            flex: 1 1 calc(33.33% - 64px); /* 3열로 변경 */
            max-width: calc(33.33% - 64px);
        }
    }

    @media (max-width: 900px) {
        & > * {
            flex: 1 1 calc(50% - 64px); /* 2열로 변경 */
            max-width: calc(50% - 64px);
        }
    }

    @media (max-width: 600px) {
        & > * {
            flex: 1 1 100%; /* 1열로 변경 */
            max-width: 100%;
        }
    }

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);
`;
