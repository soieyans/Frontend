import styled from "styled-components";
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 42px 0px;
`;
export const ProfileBox = styled.div`
  display: flex;
  position: relative;
  border: 1px solid red;
`;
export const ClothContainer = styled.div`
  box-shadow: 8px -8px 20px 0px #c9c7c730;
  border-radius: 30px 30px 0 0;
`;

export const Box = styled.div`
  width: 748px;
  height: 204px;
  border: 1px solid red;
`;
export const OptionBtn = styled.button`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  background: none;
  border: none;
  padding: 0px;
  margin-left: 88px;
`;

export const OptionBox = styled.div`
  width: 230px;
  height: 138px;
  position: absolute;
  right: 0;
  top: 29px;
  margin-top: 4px;
  border-radius: 10px;
  box-shadow: 8px 8px 20px 0px #c9c7c730;
  background-color: #efefef;
  display: ${(props) => (props.$active ? "block" : "none")};
`;

export const OptionItem = styled.div`
  width: 230px;
  height: 46px;
  padding: 13px 0 13px 36px;
  box-sizing: border-box;
  border-bottom: ${(props) => (props.$last ? "none" : "1px solid #d9d9d9")};
`;
