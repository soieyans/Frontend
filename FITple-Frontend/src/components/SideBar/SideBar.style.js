import styled from "styled-components";
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 400px;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px 10px;
  font-family: "SUIT Variable", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => (props.selected ? "32px" : "24px")};
  cursor: pointer; /* 클릭 시 커서 모양 변경 */
  color: ${(props) =>
    props.selected
      ? "#000000"
      : "#838383"}; /* 선택된 카테고리는 검은 글씨, 다른 카테고리는 회색 글씨 */
  &::before {
    content: "";
    position: absolute;
    width: 65%;
    height: 35%;
    background-color: #0276fe;
    opacity: 0.3;
    bottom: 10px;
    left: 12px;
    display: ${(props) => (props.selected ? "block" : "none")};
  }
`;
