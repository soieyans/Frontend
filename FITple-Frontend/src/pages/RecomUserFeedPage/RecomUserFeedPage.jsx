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
import { useParams, useLocation } from "react-router-dom";

import CloIcon from "/assets/ClosetBlue.svg";
import CloIconEmpty from "/assets/ClosetEmpty.svg";
import HeartIcon from "/assets/HeartBlue.svg";
import HeartIconEmpty from "/assets/HeartEmpty.svg";
import { useState } from "react";


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
    type: "원피스",
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
  const user = location.state;

  const { userId } = useParams();
  console.log({ userId });

  // 필터링된 의류 데이터를 관리할 상태


  // 옷장, 즐찾 의류 데이터
  const [filteredClothes, setFilteredClothes] = useState(clothesData);

  // 옷장, 즐찾 카테고리
  const [isInCloset, setIsInCloset] = useState(true); // 초기값은 옷장


  // 카테고리 클릭 시 필터링 로직
  const handleCategoryClick = (category) => {
    const dataToFilter = isInCloset ? clothesData : favoriteClothesData;

    if (category === "전체") {
      setFilteredClothes(dataToFilter);
    } else {
      const filtered = dataToFilter.filter((item) => item.type === category);
      setFilteredClothes(filtered);
    }
  };

  // 옷장/즐겨찾기 버튼 클릭 핸들러
  const handleToggleCloset = () => {
    setIsInCloset((prev) => !prev);
    // 상태 변경 후 필터링된 데이터 설정
    console.log(isInCloset)
    if (isInCloset==true) {
      setFilteredClothes(clothesData); // 옷장으로 전환 시 옷장 데이터
    } else {
      setFilteredClothes(favoriteClothesData); // 즐겨찾기로 전환 시 즐겨찾기 데이터
    }
  };

  return (
    <Container>
      <InformWrap>
        <Infom user={user} />
      </InformWrap>

      <Wrap>
        <IndividualWrap>
          <FeedButton 
            icon={isInCloset ? CloIcon : CloIconEmpty} 
            alt="옷장" 
            onClick={handleToggleCloset} 
          />
          <FeedButton 
            icon={isInCloset ? HeartIconEmpty : HeartIcon} 
            alt="즐겨찾는 옷" 
            onClick={handleToggleCloset} 
          />
        </IndividualWrap>
        <SubWrap>
          <FeedNav onCategoryClick={handleCategoryClick} />
          <Closet clothes={filteredClothes} />
        </SubWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserFeedPage;
