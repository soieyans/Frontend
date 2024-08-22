import {
  Container,
  UserName,
  UserProfile,
  UserFit,
  UserStyle,
  Follow,
  UserImg,
  Wrap,
  UserProfileWrap,
} from "./RecomUserCard.style";
import SetUserImg from "/assets/UserImg.svg";

function RecomUser({ item }) {
  // 더미데이터 확인용
  const dummyItem = {
    nickname: "닉네임",
    height: 163,
    weight: 50,
    prefer_fit: ["세미오버", "오버"],
    prefer_style: ["페미닌", "모던시크"],
  };

  const items = item || dummyItem;

  return (
    <Container>
      {/* Wrap으로 한번감싸줬습니다. */}
      <Wrap>
        <UserImg src={SetUserImg} alt="User Image" />
        <UserName>{items.nickname}</UserName>
        <UserProfileWrap>
          <UserProfile>{items.height}cm</UserProfile>
          <UserProfile>{items.weight}kg</UserProfile>
        </UserProfileWrap>
        {items.prefer_fit && items.prefer_fit.length > 0 && (
          <UserFit>
            <img
              src="/assets/Heart.svg"
              width={16}
              height={16}
              alt="Heart Icon"
            />
            {items.prefer_fit.map((fit, index) => (
              <span key={index}>
                {fit}
                {index < items.prefer_fit.length - 1 && ", "}
              </span>
            ))}
          </UserFit>
        )}

        {items.prefer_style && items.prefer_style.length > 0 && (
          <UserStyle>
            <img src="/assets/Hanger.svg" width={16} height={16} />
            {items.prefer_style.map((style, index) => (
              <span key={index}>
                {style}
                {index < items.prefer_style.length - 1 && ", "}
              </span>
            ))}
          </UserStyle>
        )}

        <Follow>팔로우</Follow>
      </Wrap>
    </Container>
  );
}

export default RecomUser;
