import styled from "styled-components";

export const Container = styled.div`
  padding-left: 89px;
  padding-right: 98px;
  padding-top: 20px;
  box-sizing:border-box;
  display: flex;
  justify-content: space-between;
  font-family: "Noto Sans KR";
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  width: 715px;
  justify-content: space-between;
`;

export const MenuTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
`;

export const MenuItem = styled.div`
  font-size: 20px;
  font-weight: 700;

  &:hover {
    font-size: 24px;
    color: #0276FE; /* 색상 코드에 '#' 추가 */
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInputBox = styled.input`
  width: 395px;
  height: 61px;
  box-sizing: border-box;
  border-width: 2px;
  border-radius: 30px;
  border-color:#0276FE;
  font-size: 16px;
  font-weight: 500;
  line-height: 36.2px;
  text-align: left;
  margin-left:143px;
  padding-left: 67px; /* 이미지 공간 확보를 위한 패딩 */

  /* 배경 이미지 설정 */
  background-image: url('/assets/SearchIcon.svg');
  background-repeat: no-repeat;
  background-position: 28px center; /* 이미지 위치 조정 */
  background-size: 27px; /* 이미지 크기 조정 */
`;
