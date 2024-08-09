import React from "react";
import Logo from "/assets/Logo.svg";
import SearchIcon from "/assets/SearchIcon.svg";
import {
  NavBarBox,
  MenuBox,
  LogoBox,
  MainBox,
  MenuItem,
  SearchContainer,
  SearchIconBox,
  SearchInputBox,
  Container,
  LogoTitle,
} from "./Navbar.style";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = ({ blue }) => {
  return (
    <Container blue={blue}>
      {/* 전체 Navbar 가운데 정렬 */}
      <NavBarBox>
        {/* 로고 & 메뉴 영역 */}
        <MainBox>
          {/* 로고 */}
          <LogoBox to="/cloth">
            <img src={Logo} />
            <LogoTitle blue={blue}>FITple</LogoTitle>
          </LogoBox>
          {/* 메뉴 */}
          <MenuBox>
            <MenuItem to="/cloth" blue={blue}>
              옷장
            </MenuItem>
            <MenuItem to="/recommend" blue={blue}>
              추천
            </MenuItem>
            <MenuItem blue={blue}>검색</MenuItem>
            <MenuItem to="/profile" blue={blue}>
              프로필
            </MenuItem>
          </MenuBox>
        </MainBox>
        {/* 오른쪽 검색 영역 */}
        <SearchContainer blue={blue}>
          {/* <SearchIconBox>
            <img src={SearchIcon} />
          </SearchIconBox>
          <SearchInputBox placeholder="내 옷 검색하기" /> */}
          <SearchBox src={SearchIcon} placeholder={"내 옷 검색하기"} />
        </SearchContainer>
      </NavBarBox>
    </Container>
  );
};

export default Navbar;
