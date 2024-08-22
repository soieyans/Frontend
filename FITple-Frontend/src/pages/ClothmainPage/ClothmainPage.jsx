import { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import {
  MainProductDetail as ProductDetail,
  MainProductImage as ProductImage,
  MainProductItem as ProductItem,
  MainProductName as ProductName,
  MainProductBrand as ProductBrand,
  MainProductContainer as ProductContainer,
  MainParent as Parent,
  MainFilledHeart as FilledHeart,
  MainImgContainer as Imgcontainer,
  MainPLUSbutton as PLUSbutton,
  MainClothdebarContainer as ClothdebarContainer,
  MainClothdebar as Clothdebar,
  MainSearchBar as SearchBar,
  MainSearchIcon as SearchIcon,
  MainSearchContainer as SerchContainer,
  MainSerchTitle as SerchTitle,
  MainSerchTitle2 as SerchTitle2,
  MainSerchTitleContainer as SerchTitleContainer,
  MainSideBarWrapper as SideBarWrapper,
} from "./ClothmainPage.style";
import { Link } from "react-router-dom";

const ClothmainPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState(undefined); // 선택된 카테고리 상태

  // Fetch data from the API
  const fetchClothData = async (category) => {
    try {
      const url = new URL(`http://localhost:3000/FITple/my/closet/main`);

      // 선택된 카테고리가 있을 때만 쿼리스트링에 category 추가
      if (category !== undefined) {
        url.searchParams.append("category", category);
      }

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();

        if (data.result && Array.isArray(data.result.clothData)) {
          setFilteredData(data.result.clothData); // 데이터 설정
        } else {
          console.error("Unexpected response format:", data.result);
          setFilteredData([]); // 데이터가 배열이 아닌 경우 빈 배열 설정
        }
      } else {
        console.error("Failed to fetch cloth data:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch cloth data:", error);
    }
  };

  // 선택된 카테고리가 변경될 때마다 데이터를 다시 로드
  useEffect(() => {
    fetchClothData(category);
  }, [category]);

  return (
    <Parent>
      <SideBarWrapper>
        <SideBar setCategory={setCategory} />
      </SideBarWrapper>

      <ProductContainer>
        <SerchContainer>
          <SerchTitleContainer>
            <SerchTitle>내 옷</SerchTitle>
            <SerchTitle2>을 검색해보세요.</SerchTitle2>
          </SerchTitleContainer>
          <SearchIcon />
          <SearchBar placeholder="검색어를 입력하세요" />
        </SerchContainer>

        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <ProductItem key={item.cloth_id}>
              <Imgcontainer>
                <Link to={`/clothdetail/${item.cloth_id}`}>
                  <ProductImage src={item.cloth_image} />
                  {item.likes > 0 && <FilledHeart />}
                </Link>
              </Imgcontainer>

              <ProductBrand>{item.brand}</ProductBrand>
              <ClothdebarContainer>
                <Clothdebar />
                <Clothdebar />
                <Clothdebar />
              </ClothdebarContainer>

              <ProductName>{item.cloth_name}</ProductName>
              <ProductDetail>
                {item.size} • {item.fit}
              </ProductDetail>
            </ProductItem>
          ))
        ) : (
          <p>해당 카테고리에 옷이 없습니다.</p>
        )}

        <Link to="/clothregister">
          <PLUSbutton />
        </Link>
      </ProductContainer>
    </Parent>
  );
};

export default ClothmainPage;
