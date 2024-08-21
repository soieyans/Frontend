import { Menu, SideBarContainer } from "./SideBar.style";
import { useState } from "react";

const categories = [
  "전체",
  "아우터",
  "상의",
  "바지",
  "스커트",
  "원피스",
  "신발",
];

const SideBar = ({ onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryClick(category);
  };

  return (
    <SideBarContainer>
      {categories.map((category) => (
        <Menu
          key={category}
          selected={selectedCategory === category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </Menu>
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
