import {
  Container,
  SetGoodsImg,
  Brand,
  GoodsName,
  GoodsSize,
  HeartIcon,
} from "./Goods.style";

function Goods({ ...props }) {
  console.log(props);
  return (
    <Container>
      <SetGoodsImg src={props.src} />
      <Brand>{props.brand}</Brand>
      <GoodsName>{props.cloth_name}</GoodsName>
      <GoodsSize>{props.size} - {props.fit}</GoodsSize>
      {props.like === "1" && <HeartIcon src="/assets/LoveCloth-blue.svg" />}
    </Container>
  );
}

export default Goods;
