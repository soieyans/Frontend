import SearchBox from "../../components/SearchBox/SearchBox";
import SearchIconWhite from "../../../assets/searchIcon-white.svg";
import {
  Box,
  Container,
  ImpactText,
  ItemContainer,
  MainContainer,
  SearchContainer,
  SearchText,
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

        <SearchContainer>
          <SearchText>내 아이템들을 검색해서 등록해보세요!</SearchText>
          <SearchBox
            src={SearchIconWhite}
            placeholder={"ex) 아디다스 에센셜 풀집 후디"}
            $white
          />
        </SearchContainer>
      </MainContainer>
      {/* 밑에 아이템 나오는 영역 */}
      <ItemContainer>아래</ItemContainer>
    </Container>
  );
};

export default SearchMainPage;
