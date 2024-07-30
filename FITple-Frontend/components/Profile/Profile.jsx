import { Container, Items } from "./Profile.style";

function Profile() {
  return (
    <Container>
      <Items>160cm 48kg</Items>
      <Items>
        <img src="/assets/Heart.svg" width={20}></img>세미오버, 슬림
      </Items>
      <Items>
        <img src="/assets/Hanger.svg" width={20}></img>
        페미닌, 모던시크
      </Items>
    </Container>
  );
}

export default Profile;
