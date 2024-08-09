import {
  Box,
  Container,
  ImpactText,
  ItemContainer,
  MainContainer,
  SubTitle,
  Title,
  TitleBackground,
  TitleBox,
  TitleContainer,
} from "./SearchMainPage.style";
import React from "react";

const SearchMainPage = () => {
  return (
    <Container>
      {/* 위에 파란색 영역 */}
      <MainContainer>
        {/* 타이틀 영역 */}
        <TitleContainer>
          <TitleBox>
            <SubTitle>
              옷장에 <ImpactText>많이 담긴</ImpactText> 아이템이에요.
            </SubTitle>
            <Title>
              <Box>(</Box>
              <TitleBackground>
                1. <ImpactText>컨버스</ImpactText> 척테일러 올스타 클래식 하이
              </TitleBackground>
              <Box>)</Box>
            </Title>
          </TitleBox>
        </TitleContainer>
        <div>검색 컨테이너</div>
      </MainContainer>
      {/* 밑에 아이템 나오는 영역 */}
      <ItemContainer>아래</ItemContainer>
    </Container>
  );
};

export default SearchMainPage;
