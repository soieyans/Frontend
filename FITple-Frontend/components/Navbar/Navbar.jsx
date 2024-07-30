import Logo from "/assets/Logo.svg";
import SearchIcon from "/assets/SearchIcon.svg";
import {
  Container,
  MenuBox,
  MenuItem,
  SearchBox,
  SearchInputBox,
} from "./Navbar.style";
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