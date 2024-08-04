import Logo from "/assets/Logo.svg";
import {
  Container,
  MenuBox,
  MenuTitle,
  MenuItem,
  SearchBox,
  SearchInputBox,
} from "./Navbar.style";

const Navbar = () => {
  return (
    <Container>
      <MenuBox>
        <img src={Logo} height={98} width={98} />
        <MenuTitle>FITple</MenuTitle>
        <MenuItem>옷장</MenuItem>
        <MenuItem>추천</MenuItem>
        <MenuItem>검색</MenuItem>
        <MenuItem>프로필</MenuItem>
      </MenuBox>
      <SearchBox>
        <SearchInputBox placeholder="내 옷 검색하기" />
      </SearchBox>
    </Container>
  );
};

export default Navbar;
