import {
  Container,
  SetGoodsImg,
  Brand,
  GoodsName,
  GoodsSize,
  HeartIcon,
} from "./Goods.style";

function Goods() {
  return (
    <Container>
      <SetGoodsImg></SetGoodsImg>

      <Brand>아디다스</Brand>
      <GoodsName>에센셜 풀집 후디</GoodsName>
      <GoodsSize>XL - 오버핏</GoodsSize>
      <HeartIcon src='/assets/Heart.svg'></HeartIcon>
    </Container>
  );
}

export default Goods;
