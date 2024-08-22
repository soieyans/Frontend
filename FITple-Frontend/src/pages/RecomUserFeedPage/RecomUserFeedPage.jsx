import {
  Container,
  Wrap,
  SubWrap,
  IndividualWrap,
  InformWrap,
} from "./RecomUserFeedPage.style";
import Infom from "../../components/Infom/Infom";
import FeedButton from "../../components/FeedButton/FeedButton";
import FeedNav from "../../components/FeedNav/FeedNav";
import Closet from "../../components/Closet/Closet";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import CloIcon from "/assets/ClosetBlue.svg";
import CloIconEmpty from "/assets/ClosetEmpty.svg";
import HeartIcon from "/assets/HeartBlue.svg";
import HeartIconEmpty from "/assets/HeartEmpty.svg";

const clothesData = [
  {
    id: 0,
    brand: "NERDY",
    name: "NY 트랙탑",
    size: "XL",
    detail: "오버핏",
    type: "아우터",
  },
  {
    id: 1,
    brand: "NIKE",
    name: "풀 에센셜",
    size: "L",
    detail: "오버핏",
    type: "아우터",
  },
  {
    id: 2,
    brand: "ADIDAS",
    name: "릴렉스핏 티셔츠",
    size: "M",
    detail: "여유로운 핏",
    type: "상의",
  },
  {
    id: 3,
    brand: "PUMA",
    name: "스포츠 반바지",
    size: "L",
    detail: "짧고 편안함",
    type: "바지",
  },
  {
    id: 4,
    brand: "CHANEL",
    name: "플레어 스커트",
    size: "38",
    detail: "여성스러운 디자인",
    type: "스커트",
  },
  {
    id: 5,
    brand: "GUCCI",
    name: "롱 원피스",
    size: "S",
    detail: "우아한 스타일",
    type: "원피스",
  },
  {
    id: 6,
    brand: "CONVERSE",
    name: "운동화",
    size: "270",
    detail: "편안하고 가벼움",
    type: "신발",
  },
];

const favoriteClothesData = [
  {
    id: 0,
    brand: "NIKE",
    name: "풀 에센셜",
    size: "L",
    detail: "오버핏",
    type: "아우터",
  },
  {
    id: 1,
    brand: "ADIDAS",
    name: "릴렉스핏 티셔츠",
    size: "M",
    detail: "여유로운 핏",
    type: "상의",
  },
];

function RecomUserFeedPage() {
  const location = useLocation();
  const data = location.state;

  const [filteredClothes, setFilteredClothes] = useState(clothesData);
  const [isInCloset, setIsInCloset] = useState(true);
  const [clothes, setClothes] = useState(clothesData);
  const [selectedCategory, setSelectedCategory] = useState("전체"); // 선택된 카테고리 상태 추가

  // 카테고리 변경 시 filteredClothes 업데이트
  useEffect(() => {
    if (selectedCategory === "전체") {
      setFilteredClothes(clothes); // 전체 선택 시 초기 데이터로 설정
    } else {
      const filtered = clothes.filter((item) => item.type === selectedCategory);
      setFilteredClothes(filtered);
    }
  }, [selectedCategory, clothes]);
  // selectedCategory와 clothes가 변경될 때마다 실행

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // 카테고리 선택 시 selectedCategory를 업데이트
  };

  const handleToggleCloset = (isCloset) => {
    if (isCloset) {
      setIsInCloset(true);
      setClothes(clothesData);
      setSelectedCategory("전체"); // 카테고리 초기화
    } else {
      setIsInCloset(false);
      setClothes(favoriteClothesData);
      setSelectedCategory("전체"); // 카테고리 초기화
    }
  };

  return (
    <Container>
      <InformWrap>
        <Infom />
      </InformWrap>

      <Wrap>
        <IndividualWrap>
          <FeedButton
            icon={isInCloset ? CloIcon : CloIconEmpty}
            alt="옷장"
            color={isInCloset ? '#0276FE' : '#838383'}
            onClick={() => handleToggleCloset(true)}
          />
          <FeedButton
            icon={isInCloset ? HeartIconEmpty : HeartIcon}
            alt="즐겨찾는 옷"
            color={isInCloset ? '#838383' : '#0276FE'}
            onClick={() => handleToggleCloset(false)}
          />
        </IndividualWrap>
        <SubWrap>
          <FeedNav
            onCategoryClick={handleCategoryClick}
            selectedCategory={selectedCategory} // selectedCategory를 props로 전달
          />
          <Closet clothes={filteredClothes} />
        </SubWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserFeedPage;
