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

const ClothmainPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isEdit, setIsEdit] = useState({});
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);

  // Fetch data from the API
  const fetchClothData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/FITple/my/closet/main?`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFilteredData(data);
      } else {
        console.error("Failed to fetch cloth data:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch cloth data:", error);
    }
  };

  useEffect(() => {
    fetchClothData();
  }, []);

  const toggleEdit = (clothId) => {
    setIsEdit((prev) => ({
      ...prev,
      [clothId]: !prev[clothId],
    }));
  };

  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
  };

  return (
    <div>
      <Parent>
        <SideBar onCategoryClick={(category) => fetchClothData(category)} />

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
                <ProductImage
                  image={`../../assets/${item.type}_${item.cloth_id}.jpg`}
                />
                {item.likes > 0 && <FilledHeart />}
              </Imgcontainer>

              <ProductBrand>{item.brand}</ProductBrand>
              <ClothdebarContainer onClick={() => toggleEdit(item.cloth_id)}>
                <Clothdebar />
                <Clothdebar />
                <Clothdebar />
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
