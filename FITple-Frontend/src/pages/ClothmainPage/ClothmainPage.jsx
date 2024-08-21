import { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import PlusOpen from "../../components/PlusOpen/PlusOpen";
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
import useAuthStore from "../../../data/store/userAuthStore";

const ClothmainPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [isplusopen, setIsplusopen] = useState(false);
  const [isEdit, setIsEdit] = useState([]);
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);

  const { token } = useAuthStore();

  // Fetch data from the API
  const fetchClothData = async (category = "", clothId = "", size = 8) => {
    console.log("토큰유효", token);

    const params = new URLSearchParams({ category, clothId, size });

    try {
      const response = await fetch(
        `http://localhost:3000/FITple/my/closet/main?${params.toString()}`,
        {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFilteredData(data.closetData || []);
        setIsEdit(data.closetData.map(() => false));
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

  const handlePlusOpen = () => {
    setIsplusopen(!isplusopen);
  };

  const toggleEdit = (index) => {
    setIsEdit((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
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
            <SearchBar placeholder="옷을 검색하세요" />
          </SerchContainer>
          {filteredData.map((item, index) => (
            <ProductItem key={item.cloth_id}>
              <Imgcontainer>
                <ProductImage
                  image={`../../assets/${item.type}_${item.cloth_id}.jpg`}
                />
                {item.likes > 0 && <FilledHeart />}
              </Imgcontainer>

              <ProductBrand>{item.brand}</ProductBrand>
              <ClothdebarContainer onClick={() => toggleEdit(index)}>
                <Clothdebar />
                <Clothdebar />
                <Clothdebar />
                {isEdit[index] && (
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
          <PLUSbutton onClick={handlePlusOpen}>
            {isplusopen && <PlusOpen isplusopen={isplusopen} />}
          </PLUSbutton>
        </ProductContainer>
      </Parent>
    </div>
  );
};

export default ClothmainPage;
