import { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import {
  ProductDetail,
  ProductImage,
  ProductItem,
  ProductName,
  ProductBrand,
  ProductContainer,
  Parent,
  FilledHeart,
  Imgcontainer,
  PLUSbutton,
  EditButtons,
  EditButton,
  ClothdebarContainer,
  Clothdebar,
  SearchBar,
  SearchIcon,
  SerchContainer,
  SerchTitle,
  SerchTitle2,
  SerchTitleContainer,
} from "./ClothmainPage.style";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";

const localhost = "http://localhost:3000";

const ClothmainPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isEdit, setIsEdit] = useState({});
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);

  useEffect(() => {
    fetchClothData();
  }, []);

  // Fetch data from the API
  const fetchClothData = async () => {
    try {
      const url = new URL(`${localhost}/FITple/my/closet/main`); // API 주소

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // 'data.result.clothData'로 접근하여 데이터를 설정
        if (data.result && Array.isArray(data.result.clothData)) {
          setFilteredData(data.result.clothData);
        } else {
          console.error("Unexpected response format:", data.result.clothData);
          setFilteredData([]); // 데이터가 배열이 아닌 경우, 빈 배열로 설정
        }
      } else {
        console.error("Failed to fetch cloth data:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch cloth data:", error);
    }
  };

  const toggleEdit = (clothId) => {
    setIsEdit((prev) => ({
      ...prev,
      [clothId]: !prev[clothId], // 현재 clothId의 값을 반전시킴
    }));
  };

  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
  };

  return (
    <div>
      <Parent>
        <SideBar
          onCategoryClick={(categoryId) => fetchClothData(categoryId)} // 카테고리 ID를 그대로 category로 전달
        />

        <ProductContainer>
          <SerchContainer>
            <SerchTitleContainer>
              <SerchTitle>내 옷</SerchTitle>
              <SerchTitle2>을 검색해보세요.</SerchTitle2>
            </SerchTitleContainer>
            <SearchIcon />
            <SearchBar placeholder="" />
          </SerchContainer>
          {filteredData.map((item) => (
            <ProductItem key={item.cloth_id}>
              <Imgcontainer>
                <Link to={`/clothdetail/${item.cloth_id}`}>
                  <ProductImage
                    src={item.cloth_image}
                    // 수정된 경로
                  />
                </Link>
                {item.likes > 0 && <FilledHeart />}
              </Imgcontainer>

              <ProductBrand>{item.brand}</ProductBrand>
              <ClothdebarContainer onClick={() => toggleEdit(item.cloth_id)}>
                <Clothdebar />
                <Clothdebar />
                <Clothdebar />
                {/* isEdit 상태를 활용해 Edit 버튼을 보여줌 */}
                {isEdit[item.cloth_id] && (
                  <EditButtons>
                    <Link to="/clothupdate">
                      <EditButton>옷 정보 수정하기</EditButton>
                    </Link>

                    <EditButton onClick={handleDeleteCloth}>
                      옷 정보 삭제하기
                    </EditButton>
                  </EditButtons>
                )}
                {isDeletePopupOpen && (
                  <Modal
                    isOpen={isDeletePopupOpen}
                    onRequestClose={() => setisDeletePopupOpen(false)}
                    style={{
                      overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                      content: {
                        border: "none",
                        backgroundColor: "transparent",
                        overflow: "hidden",
                      },
                    }}
                  >
                    <DeletePopUp
                      isOpen={isDeletePopupOpen}
                      onClose={() => setisDeletePopupOpen(false)}
                    />
                  </Modal>
                )}
              </ClothdebarContainer>

              <ProductName>{item.cloth_name}</ProductName>

              <ProductDetail>
                {item.size} • {item.fit}
              </ProductDetail>
            </ProductItem>
          ))}
          <Link to="/clothregister">
            <PLUSbutton />
          </Link>
        </ProductContainer>
      </Parent>
    </div>
  );
};

export default ClothmainPage;
