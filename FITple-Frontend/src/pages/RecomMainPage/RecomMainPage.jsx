import RecomUser from "../../components/RecomUserCard/RecomUserCard";
import {
  Container,
  Highlight,
  SubTitleWrap,
  SubTitle,
  ShowAll,
  RecomUserWrap,
} from "./RecomMainPage.style";

function RecomMainPage() {
  return (
    <Container>
      <SubTitleWrap>
        <SubTitle>
          <Highlight>핏플1004</Highlight>님과 비슷한 체형의 유저들이에요.
        </SubTitle>
        <ShowAll>모두 보기</ShowAll>
      </SubTitleWrap>
      <RecomUserWrap>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
      </RecomUserWrap>

      <SubTitleWrap>
        <SubTitle>
          <Highlight>핏플1004</Highlight>님과 비슷한 스타일의 유저들이에요.
        </SubTitle>
        <ShowAll>모두 보기</ShowAll>
      </SubTitleWrap>
      <RecomUserWrap>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
      </RecomUserWrap>
    </Container>
  );
}

export default RecomMainPage;
