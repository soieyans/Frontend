import {
  Container,
  SetGoodsImg,
  Brand,
  GoodsName,
  GoodsSize,
  HeartIcon,
} from "./Goods.style";

function Goods({ src }) {
  return (
    <Container>
      <SetGoodsImg src={src} />
      <Brand>아디다스</Brand>
      <GoodsName>에센셜 풀집 후디</GoodsName>
      <GoodsSize>XL - 오버핏</GoodsSize>
      <HeartIcon src="/assets/LoveCloth-blue.svg"></HeartIcon>
    </Container>
  );
}

export default Goods;
