import { Menu, SideBarContainer } from "./SideBar.style";
import { useState } from "react";

const categories = [
  { id: undefined, name: "전체" },
  { id: 1, name: "아우터" },
  { id: 2, name: "상의" },
  { id: 3, name: "바지" },
  { id: 4, name: "스커트" },
  { id: 5, name: "원피스" },
  { id: 6, name: "신발" },
];

const SideBar = ({ onCategoryClick, setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    if (typeof onCategoryClick === "function") {
      onCategoryClick(category.name);
    }
    setCategory(category.id);
  };

  return (
    <SideBarContainer>
      {categories.map((category, index) => (
        <Menu
          key={index}
          selected={selectedCategory === category.name}
          onClick={() => handleCategoryClick(category)}
        >
          {category.name}
        </Menu>
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
