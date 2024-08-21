import Goods from "../Goods/Goods";
import { Container } from "./Closet.style";
import EX_IMG from "../../../assets/EXadidas.svg";
function Closet() {
  return (
    <Container>
      <Goods src={EX_IMG} />
      <Goods src={EX_IMG} />
      <Goods src={EX_IMG} />
      <Goods src={EX_IMG} />
      <Goods src={EX_IMG} />
      <Goods src={EX_IMG} />
      <Goods src={EX_IMG} />
      <Goods src={EX_IMG} />
    </Container>
  );
}

export default Closet;
