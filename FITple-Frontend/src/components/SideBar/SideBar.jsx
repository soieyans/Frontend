import { Menu, SideBarContainer } from "./SideBar.style";
import { useState } from "react";

// 카테고리 이름과 ID를 매핑
const categories = [
  { id: null, name: "전체" }, // 전체 선택 시 category 파라미터 없이 요청
  { id: 1, name: "아우터" },
  { id: 2, name: "상의" },
  { id: 3, name: "바지" },
  { id: 4, name: "스커트" },
  { id: 5, name: "원피스" },
  { id: 6, name: "신발" },
];

const SideBar = ({ onCategoryClick }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // ID로 상태 관리

  const handleCategoryClick = (category) => {
    setSelectedCategoryId(category.id); // 선택된 카테고리의 ID를 저장
    onCategoryClick(category.id); // 카테고리 ID를 서버에 전달
  };

  return (
    <SideBarContainer>
      {categories.map((category, index) => (
        <Menu
          key={category.id} // id를 key로 사용
          selected={selectedCategoryId === category.id} // ID로 선택 여부 판단
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </Menu>
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
