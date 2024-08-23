import { Container } from "./Closet.style";
import Goods from "../Goods/Goods"; // Goods 컴포넌트
import EX_IMG from "../../../assets/EXadidas.svg";



function Closet({ clothes }) {
  
  return (
    <Container>
      {clothes.map((cloth) => (
        <Goods
          key={cloth.cloth_id}
          src={EX_IMG}
          brand={cloth.brand}
          cloth_name={cloth.cloth_name}
          size={cloth.size}
          fit={cloth.fit}
          like={cloth.like}
        />
      ))}
    </Container>
  );
}

export default Closet;
