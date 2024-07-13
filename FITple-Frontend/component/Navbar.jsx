import styled from "styled-components";
import React from "react";
import Logo from "/assets/Logo.svg";
import SearchIcon from "/assets/SearchIcon.svg";

const Container = styled.div`
  padding-left: 25px;
  padding-right: 62px;
  padding-top: 21px;
  display: flex;
  justify-content: space-between;
  font-family: "Noto Sans KR";
`;
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  justify-content: space-between;
`;
const MenuItem = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;
const SearchInputBox = styled.input`
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
const Navbar = () => {
  return (
    <Container>
      <MenuBox>
        <img src={Logo} height={98} width={98} />

        <MenuItem>옷장</MenuItem>
        <MenuItem>추천</MenuItem>
        <MenuItem>검색</MenuItem>
        <MenuItem>프로필</MenuItem>
      </MenuBox>
      <SearchBox>
        <div>
          <img src={SearchIcon} height={40} width={40} />
        </div>
        <SearchInputBox placeholder="내 옷 검색하기" />
      </SearchBox>
    </Container>
  );
};

export default Navbar;
