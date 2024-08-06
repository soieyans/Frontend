import { Container, Items, SubItems } from "./Profile.style";

function Profile() {
  return (
    <Container>
      <Items>160cm 48kg</Items>
      <SubItems>
        <img src="/assets/HeartGray.svg" height={16}/>세미오버, 슬림
      </SubItems>
      <SubItems>
        <img src="/assets/HangerGray.svg" height={16}/>
        페미닌, 모던시크
      </SubItems>
    </Container>
  );
}

export default Profile;
