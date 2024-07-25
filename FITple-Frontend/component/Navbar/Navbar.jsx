import React from "react";
import Logo from "/assets/Logo.svg";
import SearchIcon from "/assets/SearchIcon.svg";
import {
  Container,
  Menu,
  MenuBox,
  LogoItem,
  MenuItem,
  SearchBox,
  SearchIconBox,
  SearchInputBox,
} from "./Navbar.style";
const Navbar = () => {
  return (
    <Container>
      <Menu>
        <LogoItem>
          <img src={Logo} />
        </LogoItem>
        <MenuBox>
          <MenuItem>옷장</MenuItem>
          <MenuItem>추천</MenuItem>
          <MenuItem>검색</MenuItem>
          <MenuItem>프로필</MenuItem>
        </MenuBox>
      </Menu>
      <SearchBox>
        <SearchIconBox>
          <img src={SearchIcon} />
        </SearchIconBox>
        <SearchInputBox placeholder="내 옷 검색하기" />
      </SearchBox>
    </Container>
  );
};

export default Navbar;
