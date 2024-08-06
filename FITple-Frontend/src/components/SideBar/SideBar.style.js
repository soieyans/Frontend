import styled from "styled-components";
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
  margin-right: 60px;
  left: 20px;
  height: 413px;
  width: 140px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-family: "SUIT Variable", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer; /* 클릭 시 커서 모양 변경 */
  color: ${(props) =>
    props.selected
      ? "#000000"
      : "#838383"}; /* 선택된 카테고리는 검은 글씨, 다른 카테고리는 회색 글씨 */
`;
