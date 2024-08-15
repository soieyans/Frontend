import {
  SearchBox,
  Searchtitle,
  SearchInputBox,
  SearchIconBox,
  Container,
  TitleContainer,
  Xiconbox,
  BrandContainer,
  BrandImg,
  Brandname,
  ENBrand,
  BrandNameContainer,
  Nosearch,
} from "./BrandSearch.style";
import SearchIcon from "/assets/SearchIcon.svg";
import XIcon from "/assets/Xicon.svg";
import { useState, useEffect } from "react";

const ClothData = [
  {
    id: 1,
    brand: "아디다스",
    enbrand: "ADIDAS",
    num: "IL2506",
    name: "에센셜 풀집 후디",
    img: "/assets/에센셜 풀집 후디 pic.svg",
    size: "XL",
    detail: "오버핏",
    type: "아우터",
    wish: "찜",
  },
];

const BrandSearch = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  //텍스트 입력시 필터링
  useEffect(() => {
    const filtered = ClothData.filter(
      (item) =>
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.enbrand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClose = () => {
    onClose();
  };
  return (
    <Container>
      <TitleContainer>
        <Searchtitle>브랜드 검색</Searchtitle>
        <Xiconbox onClick={handleClose}>
          <img src={XIcon} />
        </Xiconbox>
      </TitleContainer>
      <SearchBox>
        <SearchIconBox>
          <img src={SearchIcon} />
        </SearchIconBox>
        <SearchInputBox
          placeholder="브랜드를 입력하세요."
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchBox>
      <div>
        {filteredData.length > 0 && searchTerm !== "" ? (
          filteredData.map((item) => (
            <BrandContainer key={item.brand}>
              <BrandImg src={item.img} />
              <BrandNameContainer>
                <Brandname>{item.brand}</Brandname>
                <ENBrand>{item.enbrand}</ENBrand>
              </BrandNameContainer>
            </BrandContainer>
          ))
        ) : (
          <Nosearch>검색 결과가 없습니다.</Nosearch>
        )}
      </div>
    </Container>
  );
};
export default BrandSearch;
