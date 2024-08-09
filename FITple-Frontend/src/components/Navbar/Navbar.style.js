import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  background-color: ${(props) => (props.blue ? "#0075FF" : "white")};
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const NavBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1253px;
`;

export const MainBox = styled.div`
  display: flex;
  width: 715px;
`;
export const LogoBox = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 900;
  text-decoration: none;
  margin-right: 84px;
`;
export const LogoTitle = styled.p`
  margin-left: 0.8em;
  color: ${(props) => (props.blue ? "white" : "black")};
`;
export const LogoItem = styled.div`
  cursor: pointer;
`;
export const MenuBox = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
`;

export const MenuItem = styled(Link)`
  color: black;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: scale(1.2);
    color: ${(props) => (props.blue ? "white" : "#0276fe")};
    font-weight: 800;
  }
`;
export const SearchContainer = styled.div`
  height: 61px;
  width: 31%;
  display: ${(props) => (props.blue ? "none" : "flex")};
  align-items: center;
  position: relative;
`;
export const SearchInputBox = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  border: 2px solid #0276fe;
  border-radius: 30px;
  padding-left: 55px;
  color: #838383;
  outline: none;
  box-shadow: 0px 1px 3px #0000001a, 0px 5px 5px #00000017,
    0px 11px 6px #0000000d, 0px 19px 8px #00000003, 0px 29px 8px #00000000;
`;

export const SearchIconBox = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  padding: 0px;
  left: 28px;
`;
