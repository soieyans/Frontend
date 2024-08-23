import { Container, Wrap, SubWrap, UserImg, UserName } from "./RecomInfom.style";
import SetUserImg from "/assets/UserImg.svg";

import Profile from "../../components/Profile/Profile";
import Followcom from "../../components/Follow/Follow";
import Follower from "../../components/Follower/Follower";
import OneLine from "../../components/OneLine/OneLine";
import FollowButton from "../../components/FollowButton/FollowButton";

function Infom({ data }) {
  return (
    <Container>
      <Wrap>
        <SubWrap>
          <UserImg src={SetUserImg}></UserImg>
        </SubWrap>
        <UserName>{data.userName}</UserName>
        <SubWrap>
          <Profile
            userProfile={`${data.userHeight}cm ${data.userWeight}kg`}
            userFit={data.userFit}
            userStyle={data.userStyle}
          />
        </SubWrap>
        <SubWrap>
          <Follower />
          <Followcom />
        </SubWrap>
      </Wrap>
      <Wrap>
        {/* showFollowButton이 True면 기본 값유지 False면 FollowButton제거하고  OneLine 크기증가*/}
        {!data.isFollowed ? (
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
