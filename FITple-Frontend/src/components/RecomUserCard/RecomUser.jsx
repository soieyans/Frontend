import {
  Container,
  UserName,
  UserProfile,
  UserFit,
  UserStyle,
  Follow,
  UserImg,
} from "./RecomUser.style";
import SetUserImg from "/assets/UserImg.svg";

function RecomUser() {
  return (
    <Container>
      <UserImg src={SetUserImg} alt="User Image" />
      <UserName>핏플 1004</UserName>
      <UserProfile>160cm 48kg</UserProfile>
      <UserFit>
        <img src="/assets/Heart.svg" width={16} height={16}></img>
        세미오버, 슬림
      </UserFit>
      <UserStyle>
        <img src="/assets/Hanger.svg" width={16} height={16}></img>
        페미닌, 모던시크
      </UserStyle>
      <Follow>팔로우</Follow>
    </Container>
  );
}

export default RecomUser;
