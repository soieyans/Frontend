import React from "react";
import {
  Container,
  LogoImg,
  TitleBox,
  TitleEng,
  TitleKor,
} from "./BrandBox.style";
import Logo from "../../../assets/Converse.svg";
const BrandBox = () => {
  return (
    <Container>
      <LogoImg src={Logo} />
      <TitleBox>
        <TitleEng>CONVERSE</TitleEng>
        <TitleKor>컨버스</TitleKor>
      </TitleBox>
    </Container>
  );
};

export default BrandBox;
