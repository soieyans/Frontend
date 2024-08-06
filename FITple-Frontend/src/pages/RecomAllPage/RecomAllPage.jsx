import RecomUser from "../../components/RecomUserCard/RecomUserCard";
import {
  Container,
  Highlight,
  SubTitle,
  RecomUserWrap,
} from "./RecomAllPage.style";

function RecomMainPage() {
  return (
    <Container>
      <SubTitle>
        <Highlight>핏플1004</Highlight>님과 비슷한 체형의 유저들이에요.
      </SubTitle>
      <RecomUserWrap>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
        <RecomUser></RecomUser>
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
