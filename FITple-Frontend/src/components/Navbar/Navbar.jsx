import React from "react";
import Logo from "/assets/Logo.svg";
import SearchIcon from "/assets/SearchIcon.svg";
import {
  NavBarBox,
  MenuBox,
  LogoItem,
  LogoBox,
  MainBox,
  MenuItem,
  SearchBox,
  SearchIconBox,
  SearchInputBox,
  Container,
  LogoTitle,
} from "./Navbar.style";

const Navbar = () => {
  return (
    <Container>
      {/* 전체 Navbar 가운데 정렬 */}
      <NavBarBox>
        {/* 로고 & 메뉴 영역 */}
        <MainBox>
          {/* 로고 */}
          <LogoBox>
            <img src={Logo} />
            <LogoTitle>FITple</LogoTitle>
          </LogoBox>
          {/* 메뉴 */}
          <MenuBox>
            <MenuItem>옷장</MenuItem>
            <MenuItem>추천</MenuItem>
            <MenuItem>검색</MenuItem>
            <MenuItem>프로필</MenuItem>
          </MenuBox>
        </MainBox>
        {/* 오른쪽 검색 영역 */}
        <SearchBox>
          <SearchIconBox>
            <img src={SearchIcon} />
          </SearchIconBox>
          <SearchInputBox placeholder="내 옷 검색하기" />
        </SearchBox>
      </NavBarBox>
    </Container>
  );
};


export default Navbar;
