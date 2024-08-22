import React from "react";
import {
  Arrow,
  Container,
  SubTitle,
  Title,
  TitleWrap,
  UserImg,
  Wrap,
} from "./BrandCard.style";

const BrandCard = ({ item }) => {
  return (
    <Container>
      <Wrap>
        <UserImg src="https://i.namu.wiki/i/eZiA7Yvh06E5jv5IsGTaiut615o4hpjALOlnqfIAvmHPnf3Je4JvglFmo635duNRly8aeOqMgS_oLWL8G_y1WQ.webp" />
        <TitleWrap>
          <Title>{item.brand_name}</Title>
          <SubTitle>{item.eng_name}</SubTitle>
        </TitleWrap>

        <Arrow>&gt;</Arrow>
      </Wrap>
    </Container>
  );
};

export default BrandCard;
