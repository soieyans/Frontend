import styled from "styled-components";

export const Container = styled.div`
  padding-left: 25px;
  padding-right: 62px;
  padding-top: 21px;
  display: flex;
  justify-content: space-between;
  font-family: "Noto Sans KR";
`;
export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  justify-content: space-between;
`;
export const MenuItem = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchInputBox = styled.input`
  width: 336px;
  height: 61px;
  box-sizing: border-box;
  border-width: 3px;
  border-radius: 30px;
  font-size: 25px;
  font-weight: 500;
  line-height: 36.2px;
  text-align: center;
  margin-left: 12px;
`;