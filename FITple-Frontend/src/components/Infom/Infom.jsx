import { Container, Wrap, SubWrap, UserImg, UserName } from "./Infom.style";
import SetUserImg from "/assets/UserImg.svg";

import Profile from "../../components/Profile/Profile";
import Followcom from "../../components/Follow/Follow";
import Follower from "../../components/Follower/Follower";
import OneLine from "../../components/OneLine/OneLine";
import FollowButton from "../../components/FollowButton/FollowButton";

function Infom(showFollowButton={showFollowButton}) {


  return (
    <Container>
      <Wrap>
        <SubWrap>
          <UserImg src={SetUserImg}></UserImg>
        </SubWrap>
        <UserName>핏플3</UserName>
        <SubWrap>
          <Profile />
        </SubWrap>
        <SubWrap>
          <Follower />
          <Followcom />
        </SubWrap>
      </Wrap>
      <Wrap>
        {/* showFollowButton이 True면 기본 값유지 False면 FollowButton제거하고  OneLine 크기증가*/}
        {showFollowButton ? (
          <>
            <OneLine />
            <FollowButton />
          </>
        ) : (
          <>
            <OneLine width={"100%"} />
          </>
        )}
      </Wrap>
    </Container>
  );
}

export default Infom;
