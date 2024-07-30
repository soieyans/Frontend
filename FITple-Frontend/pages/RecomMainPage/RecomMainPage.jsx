import RecomUser from "../../components/RecomUserCard/RecomUser"
import { Container, SubTitleWrap, SubTitle, ShowAll, RecomUserWrap } from "./RecomMainPage.style"

function RecomMainPage() {
  return (
    <Container>

        <SubTitleWrap>
            <SubTitle>핏플1004님과 비슷한 체형을 추천해요</SubTitle>
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
            <SubTitle>핏플1004님과 비슷한 스타일을 추천해요</SubTitle>
            <ShowAll>모두 보기</ShowAll>
        </SubTitleWrap>
        <RecomUserWrap>
            <RecomUser></RecomUser>
            <RecomUser></RecomUser>
            <RecomUser></RecomUser>
            <RecomUser></RecomUser>
        </RecomUserWrap>
    </Container>
  )
}

export default RecomMainPage