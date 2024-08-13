import {
  SearchBox,
  Searchtitle,
  SearchInputBox,
  SearchIconBox,
  Container,
  TitleContainer,
  Xiconbox,
} from "./BrandSearch.style";
import SearchIcon from "/assets/SearchIcon.svg";
import XIcon from "/assets/Xicon.svg";

const BrandSearch = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Container>
      <TitleContainer>
        <Searchtitle>브랜드 검색</Searchtitle>
        <Xiconbox onClick={handleClose}>
          <img src={XIcon} />
        </Xiconbox>
      </TitleContainer>
      <SearchBox>
        <SearchIconBox>
          <img src={SearchIcon} />
        </SearchIconBox>
        <SearchInputBox placeholder="브랜드를 입력하세요." />
      </SearchBox>
    </Container>
  );
};
export default BrandSearch;
