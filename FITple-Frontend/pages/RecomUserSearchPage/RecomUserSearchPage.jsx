import {
  Container,
  Back,
  SearchWrap,
  SearchBox,
  SearchInputBox
} from "./RecomUserSearchPage.style";
import SearchIcon from "/assets/SearchIcon.svg";
import RecomUserCard from "../../components/RecomUserCard/RecomUser";



function RecomUserSearchPage() {
  return (
    <Container>
      <Back src="/assets/Back.svg"></Back>
      <SearchWrap>
        <div>
          <img src={SearchIcon} height={40} width={40} />
        </div>
        <SearchInputBox placeholder="핏플" />
      </SearchWrap>
      <SearchBox>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
        <RecomUserCard></RecomUserCard>
      </SearchBox>
    </Container>
  );
}

export default RecomUserSearchPage;
