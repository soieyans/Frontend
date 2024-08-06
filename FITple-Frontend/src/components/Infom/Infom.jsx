import { Container, Wrap, SubWrap, UserImg, UserName } from "./Infom.style";
import SetUserImg from "/assets/UserImg.svg";

import Profile from "../../components/Profile/Profile";
import Followcom from "../../components/Follow/Follow";
import Follower from "../../components/Follower/Follower";
import OneLine from "../../components/OneLine/OneLine";
import FollowButton from "../../components/FollowButton/FollowButton";

function Infom() {
  return (
    <Container>
      <Wrap>
        <SubWrap>
          <UserImg src={SetUserImg}></UserImg>
        </SubWrap>
        <UserName>핏플3</UserName>
        <SubWrap>
          <Profile></Profile>
        </SubWrap>
        <SubWrap>
          <Follower></Follower>
          <Followcom></Followcom>
        </SubWrap>
      </Wrap>
      <Wrap>
        <OneLine></OneLine>
        <FollowButton></FollowButton>
      </Wrap>
    </Container>
  );
}

export default Infom;
