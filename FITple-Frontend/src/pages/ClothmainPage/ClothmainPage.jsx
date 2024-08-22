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
  SerchTitle,
  SerchTitle2,
  SerchTitleContainer,
  Container,
  FirstContainer,
  SecondContainer,
  SearchContainer,
  SearchBarWrap,
  SearchImg,
  SideBarWrap,
  Wrap,
  ItemListWrap,
} from "./ClothmainPage.style";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";
import { ClothApi } from "../../../data/ClothApi";
import SearchIcon from "../../../assets/search.svg";
import ItemList from "../../components/ItemList/ItemList";
import { useNavigate } from "react-router-dom";

const ClothmainPage = () => {
  const [category, setCategory] = useState(undefined);
  const [isEdit, setIsEdit] = useState({});
  const [clothData, SetClothData] = useState([]);
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);

  const navigate = useNavigate();

  const toggleEdit = (clothId) => {
    setIsEdit((prev) => ({
      ...prev,
      [clothId]: !prev[clothId], // 현재 clothId의 값을 반전시킴
    }));
  };

  const goToResister = () => {
    navigate("/clothregister");
  };

  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
  };

  // Api 데이터 가져오기
  const getClothData = async () => {
    const response = await ClothApi(category);
    SetClothData(response.result.clothData);
    console.log("옷장확인", response.result.clothData);
  };
  useEffect(() => {
    getClothData();
  }, [category]);

  return (
    <Container>
      {/* 위에 컨테이너 */}
      <FirstContainer>
        <SearchContainer>
          <SerchTitleContainer>
            <SerchTitle>내 옷</SerchTitle>
            <SerchTitle2>을 검색해보세요.</SerchTitle2>
          </SerchTitleContainer>
          <SearchBarWrap>
            <SearchImg src={SearchIcon} />
            <SearchBar placeholder="" />
          </SearchBarWrap>
        </SearchContainer>
      </FirstContainer>
      <SecondContainer>
        {/* <SideBar
          onCategoryClick={(categoryId) => fetchClothData(categoryId)} // 카테고리 ID를 그대로 category로 전달
        /> */}
        <Wrap>
          <SideBarWrap>
            <SideBar setCategory={setCategory} />
          </SideBarWrap>
          <ItemListWrap>
            <ItemList $main data={clothData} />
            {/* <ProductContainer>
              {filteredData.map((item) => (
                <ProductItem key={item.cloth_id}>
                  <Imgcontainer>
                    <Link to={`/clothdetail/${item.cloth_id}`}>
                      <ProductImage
                        image={`../../assets/${item.cloth_id}.jpg`} // 수정된 경로
                      />
                      {item.likes > 0 && <FilledHeart />}
                    </Link>
                  </Imgcontainer>

                  <ProductBrand>{item.brand}</ProductBrand>
                  <ClothdebarContainer
                    onClick={() => toggleEdit(item.cloth_id)}
                  >
                    <Clothdebar />
                    <Clothdebar />
                    <Clothdebar /> */}
            {/* isEdit 상태를 활용해 Edit 버튼을 보여줌 */}
            {/* {isEdit[item.cloth_id] && (
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
                          overlay: {
                            backgroundColor: "rgba(81, 78, 78, 0.162)",
                          },
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
            </ProductContainer> */}
            <PLUSbutton onClick={() => goToResister()} />
          </ItemListWrap>
        </Wrap>
      </SecondContainer>
    </Container>
  );
};

export default ClothmainPage;
