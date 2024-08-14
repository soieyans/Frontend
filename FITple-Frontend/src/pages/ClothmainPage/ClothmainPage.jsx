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
} from "./ClothmainPage.style";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";

const clothData = [
  {
    id: 0,
    brand: "NERDY",
    name: "NY 트랙탑",
    size: "XL",
    detail: "오버핏",
    type: "아우터",
    wish: "찜",
  },
  {
    id: 1,
    brand: "NIKE",
    name: "풀 에센셜",
    size: "L",
    detail: "오버핏",
    type: "아우터",
    wish: "찜",
  },
  {
    id: 2,
    brand: "ADIDAS",
    name: "릴렉스핏 티셔츠",
    size: "M",
    detail: "여유로운 핏",
    type: "상의",
    wish: "찜",
  },
  {
    id: 3,
    brand: "PUMA",
    name: "스포츠 반바지",
    size: "L",
    detail: "짧고 편안함",
    type: "바지",
    wish: "찜",
  },
  {
    id: 4,
    brand: "CHANEL",
    name: "플레어 스커트",
    size: "38",
    detail: "여성스러운 디자인",
    type: "스커트",
    wish: "찜",
  },
  {
    id: 5,
    brand: "GUCCI",
    name: "गुच्ची 롱 원피스",
    size: "S",
    detail: "우아한 스타일",
    type: "원피스",
  },
  {
    id: 6,
    brand: "BURBERRY",
    name: "머플러",
    detail: "따뜻하고 세련된 디자인",
    type: "액세서리",
  },
  {
    id: 7,
    brand: "CONVERSE",
    name: "운동화",
    size: "270",
    detail: "편안하고 가벼움",
    type: "신발",
  },
];

const ClothmainPage = () => {
  const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터 상태 관리
  const navigate = useNavigate();
  // 카테고리 클릭 시 이벤트 처리 함수
  const handleCategoryClick = (category) => {
    if (category === "전체") {
      // 전체 데이터 표시
      setFilteredData(clothData);
    } else {
      // 선택된 카테고리와 일치하는 데이터만 필터링
      const filtered = clothData.filter((item) => item.type === category);
      setFilteredData(filtered);
    }
  };

  // 처음 페이지 로드 시 전체 데이터 표시
  useEffect(() => {
    setFilteredData(clothData);
  }, []);

  //plusopen 클릭시 이벤트 처리 함수
  const [isplusopen, setIsplusopen] = useState(false);
  const handlePlusOpen = () => {
    setIsplusopen(!isplusopen);
  };
  //수정하기,삭제하기 칸 열기

  const [isEdit, setIsEdit] = useState(clothData.map(() => false));
  const toggleEdit = (index) => {
    setIsEdit((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const handleNavigate = () => {
    navigate("/clothupdate");
  };
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);
  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
  };

  return (
    <div>
      <Parent>
        <SideBar onCategoryClick={handleCategoryClick} />
        <ProductContainer>
          {filteredData.length === 0 && <div>검색 결과가 없습니다.</div>}
          {filteredData.map((item, index) => (
            <ProductItem key={item.id}>
              <Imgcontainer>
                <ProductImage
                  image={`../../assets/${item.type}_${item.id}.jpg`}
                />
                {item.wish === "찜" && <FilledHeart />}
              </Imgcontainer>

              <ProductBrand>{item.brand}</ProductBrand>
              <ClothdebarContainer
                key={index}
                onClick={() => toggleEdit(index)}
              >
                <Clothdebar />
                <Clothdebar />
                <Clothdebar />
                {isEdit && (
                  <EditButtons isEdit={isEdit[index]}>
                    <EditButton onClick={handleNavigate}>
                      옷 정보 수정하기
                    </EditButton>

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

              <ProductName>{item.name}</ProductName>

              <ProductDetail>
                {item.size}•{item.detail}
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
