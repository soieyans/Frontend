import { Container } from "./Closet.style";
import Goods from "../Goods/Goods"; // Goods 컴포넌트
import EX_IMG from "../../../assets/EXadidas.svg";
function Closet({ clothes }) {
  return (
    <Container>
      {clothes.map((cloth) => (
        <Goods key={cloth.id} src={EX_IMG} />
      ))}
    </Container>
  );
}

export default Closet;
