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
  Container,
  LogoTitle,
} from "./Navbar.style";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = ({ ...props }) => {
  return (
    <Container {...props}>
      {/* 전체 Navbar 가운데 정렬 */}
      <NavBarBox>
        {/* 로고 & 메뉴 영역 */}
        <MainBox>
          {/* 로고 */}
          <LogoBox to="/cloth">
            <img src={Logo} />
            <LogoTitle {...props}>FITple</LogoTitle>
          </LogoBox>
          {/* 메뉴 */}
          <MenuBox>
            <MenuItem to="/cloth" {...props}>
              옷장
            </MenuItem>
            <MenuItem to="/recommend" {...props}>
              추천
            </MenuItem>
            <MenuItem to="/search" {...props}>
              검색
            </MenuItem>
            <MenuItem to="/profile" {...props}>
              프로필
            </MenuItem>
          </MenuBox>
        </MainBox>
        {/* 오른쪽 검색 영역 */}
        <SearchContainer {...props}>
          {/* SearchBox 컴포넌트화 */}
          <SearchBox src={SearchIcon} placeholder={"내 옷 검색하기"} />
        </SearchContainer>
      </NavBarBox>
    </Container>
  );
};

export default Navbar;
