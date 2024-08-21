import SearchBox from "../../components/SearchBox/SearchBox";
import SearchIconWhite from "../../../assets/searchIcon-white.svg";
import SunIcon from "../../../assets/Sun.svg";
import FireIcon from "../../../assets/Fire.svg";
import SpringIcon from "../../../assets/Spring.svg";
import ThumbIcon from "../../../assets/Thumb.svg";
import ThunderIcon from "../../../assets/Thunder.svg";
import HeartRedIcon from "../../../assets/Heart-red.svg";
import StarRedIcon from "../../../assets/Star-red.svg";
import {
  Blur,
  Box,
  Container,
  FireIconImg,
  HeartIconImg,
  ImpactText,
  ItemContainer,
  ItemListWrap,
  MainContainer,
  SearchContainer,
  SearchText,
  SideBarWrap,
  SpringIconImg,
  StartRedIconImg,
  SubTitle,
  SunIconImg,
  ThumbIconImg,
  ThunderIconImg,
  Title,
  TitleBackground,
  TitleBox,
  TitleContainer,
  Wrap,
} from "./SearchMainPage.style";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import ItemList from "../../components/ItemList/ItemList";
import { searchMain } from "../../../data/SearchMainApi";

const SearchMainPage = () => {
  const getData = async () => {
    const response = await searchMain(undefined, undefined, 5);
    console.log(response);
  };
  getData();

  return (
    <Container>
      <Blur />
      {/* 위에 파란색 영역 */}
      <MainContainer>
        {/* <SunIconImg src={SunIcon} />
        <FireIconImg src={FireIcon} />
        <SpringIconImg src={SpringIcon} />
        <HeartIconImg src={HeartRedIcon} />
        <ThumbIconImg src={ThumbIcon} />
        <ThunderIconImg src={ThunderIcon} />
        <StartRedIconImg src={StarRedIcon} /> */}
        {/* <TitleBox>
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
        </TitleBox> */}

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
      <ItemContainer>
        <Wrap>
          <SideBarWrap>
            <SideBar />
          </SideBarWrap>
          <ItemListWrap>
            <ItemList />
          </ItemListWrap>
        </Wrap>
      </ItemContainer>
    </Container>
  );
};

export default SearchMainPage;
