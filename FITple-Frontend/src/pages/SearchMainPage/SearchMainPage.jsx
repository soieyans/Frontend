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
  BlueText,
  Blur,
  BoldText,
  Box,
  BrandWrap,
  Container,
  FireIconImg,
  HeartIconImg,
  ImpactText,
  ItemContainer,
  ItemListWrap,
  ItemWrap,
  MainContainer,
  ResultText,
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
  UserWrap,
  Wrap,
} from "./SearchMainPage.style";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import ItemList from "../../components/ItemList/ItemList";
import { searchMain } from "../../../data/SearchMainApi";
import { searchTotal } from "../../../data/SearchTotalApi";
import { useState } from "react";
import { useEffect } from "react";

// 1. 데이터 갯수 확인하기

const SearchMainPage = () => {
  const [dataCount, setDataCount] = useState(0);
  const [itemData, setItemData] = useState([]);
  const [category, setCategory] = useState(undefined);
  const [keyword, setKeyword] = useState("");

  // API 문제로 데이터 개수 가져오기
  const getCount = async () => {
    const response = await searchMain();
    setDataCount(response.result.clothData[0].cloth_id + 1);
  };
  // 데이터 메인 가져오기
  const getData = async () => {
    const response = await searchMain(category, dataCount);
    setItemData(response.result.clothData);
  };

  //검색 데이터 가져오기
  const getSearchData = async () => {
    const response = await searchTotal(keyword);
    console.log(response);
  };

  useEffect(() => {
    getCount();
  }, [category]);

  useEffect(() => {
    if (dataCount > 0) {
      getData();
    }
  }, [dataCount, category]);

  useEffect(() => {
    if (keyword !== "") getSearchData();
  }, [keyword]);

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
            setKeyword={setKeyword}
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
            <SideBar setCategory={setCategory} />
          </SideBarWrap>
          <ItemListWrap>
            {/* <ItemList $user data={itemData} /> */}
            <ItemWrap>
              <ResultText>
                <BoldText>제품이름</BoldText> 검색 결과
                <BlueText> 10건</BlueText>
              </ResultText>
              <ItemList />
            </ItemWrap>

            <BrandWrap>
              <ResultText>
                <BoldText>브랜드</BoldText> 검색 결과
                <BlueText> 1건</BlueText>
              </ResultText>
              <ItemList />
            </BrandWrap>

            <UserWrap>
              <ResultText>
                <BoldText>브랜드</BoldText> 검색 결과
                <BlueText> 1건</BlueText>
              </ResultText>
              <ItemList />
            </UserWrap>
          </ItemListWrap>
        </Wrap>
      </ItemContainer>
    </Container>
  );
};

export default SearchMainPage;
