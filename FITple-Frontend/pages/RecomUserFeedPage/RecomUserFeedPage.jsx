import {
  Container,
  Wrap,
  UserImgWrap,
  UserImg,
  UserName,
  UserInfomContainer,
  UserInfomWrap,
  IndividualWrap,
  HeartImg,
} from "./RecomUserFeedPage.style";
import SetUserImg from "/assets/UserImg.svg";

import SetEmptyHeartImg from "/assets/HeartEmpty.svg";
import Closet from "../../components/Closet/Closet";
import Profile from "../../components/Profile/Profile";
import Followcom from "../../components/Follow/Follow";
import Follower from "../../components/Follower/Follower";
import OneLine from "../../components/OneLine/OneLine";
import ClosetButton from "../../components/ClosetButton/ClosetButton";
import FollowButton from "../../components/FollowButton/FollowButton";

function RecomUserFeedPage() {
  return (
    <Container>
      <Wrap>
        <UserImgWrap>
          <UserImg src={SetUserImg}></UserImg>
          <UserName>핏플548</UserName>
        </UserImgWrap>
        <UserInfomContainer>
          <FollowButton></FollowButton>
          <UserInfomWrap>
            <Profile></Profile>
            <Follower></Follower>
            <Followcom></Followcom>
          </UserInfomWrap>
          <OneLine></OneLine>
        </UserInfomContainer>
      </Wrap>
      <IndividualWrap>
        <ClosetButton></ClosetButton>
        <HeartImg src={SetEmptyHeartImg}></HeartImg>
      </IndividualWrap>

      <Closet></Closet>
    </Container>
  );
}

export default RecomUserFeedPage;
