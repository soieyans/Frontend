import {
  BackIcon,
  SS,
  Parent1,
  Parent2,
  Parent3,
  ProductDeImage,
  ProductDeImagemin,
  Imgcontainer,
  CurvedRectangle,
  DetailNamebox,
  DetailName,
  Detailbox,
  NoteArea,
  FullStar,
  EmptyStar,
  CurvedRectangle2,
  Toggledown,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  Dropdefault,
  MeasureArea,
  MeasureNamebox,
  MeasureName,
  CurvedRectangle3,
  StyledButton,
  Registerimage,
  SearchIconBox,
} from "./ClothregisterPage.style";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "/assets/SearchIcon.svg";
import BrandSearch from "../../components/BrandSearch/BrandSearch";
import BrandNumberSearch from "../../components/BrandNumberSearch/BrandNumberSearch";
import RegisterPopUp from "../../components/RegisterPopUp/RegisterPopUp";
import Modal from "react-modal";

const ClothregisterPage = () => {
  //더미데이터
  const clothingCategories = [
    { value: "아우터", label: "아우터" },
    { value: "반소매 상의", label: "반소매 상의" },
    { value: "긴소매 상의", label: "긴소매 상의" },
    { value: "슬리브리스 상의", label: "슬리브리스 상의" },
    { value: "롱팬츠", label: "롱팬츠" },
    { value: "숏팬츠", label: "숏팬츠" },
    { value: "스커트", label: "스커트" },
    { value: "원피스", label: "원피스" },
    { value: "신발", label: "신발" },
  ];

  const fitOptions = [
    { value: "세미", label: "세미" },
    { value: "오버", label: "오버" },
    { value: "세미오버", label: "세미오버" },
  ];
  //드롭다운
  const [dropdown, setDropdown] = useState({
    category: {
      isOpen: false,
      value: "",
    },
    fit: {
      isOpen: false,
      value: "",
    },
  });
  const handleDropdown = (type) => {
    setDropdown((prevstate) => ({
      ...prevstate,
      [type]: {
        ...prevstate[type],
        isOpen: !prevstate[type].isOpen,
      },
    }));
  };
  const handelDropdownSelect = (type, value) => {
    setDropdown((prevstate) => ({
      ...prevstate,
      [type]: {
        ...prevstate[type],
        isOpen: false,
        value,
      },
    }));
  };
  //별점
  const [rating, setRating] = useState(0);
  const handleStarClick = (newRating) => {
    setRating(newRating);
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilledStar = i < rating;
      const StarComponent = isFilledStar ? FullStar : EmptyStar;
      stars.push(
        <StarComponent
          key={i}
          onClick={() => handleStarClick(i + 1)}
          style={{ cursor: "pointer" }}
        />
      );
    }
    return stars;
  };
  //브랜드 검색
  const [brand, setBrand] = useState(false);
  const handleBrand = () => {
    setBrand(!brand);
  };
  //제품번호 검색
  const [number, setNumber] = useState(false);
  const handleNumber = () => {
    setNumber(!number);
  };
  //옷정보등록하기
  const [registerpopup, setRegisterpopup] = useState(false);
  const handleRegister = () => {
    setRegisterpopup(!registerpopup);
  };

  return (
    <div>
      <Parent1>
        <Parent2>
          <Link to="/cloth">
            <BackIcon />
          </Link>
          <ProductDeImage>
            <Registerimage />
          </ProductDeImage>
          <Imgcontainer>
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
          </Imgcontainer>
        </Parent2>
        <Parent3>
          <DetailNamebox>
            <DetailName>브랜드</DetailName>
            <CurvedRectangle>
              <SearchIconBox onClick={handleBrand}>
                <img src={SearchIcon} />
              </SearchIconBox>
            </CurvedRectangle>
            {brand && (
              <Modal
                isOpen={brand}
                onRequestClose={() => handleBrand(false)}
                style={{
                  overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                  content: {
                    border: "none",
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  },
                }}
              >
                <BrandSearch onClose={handleBrand} />
              </Modal>
            )}
          </DetailNamebox>

          <DetailNamebox>
            <DetailName>
              제품명 <SS>*</SS>
            </DetailName>

            <CurvedRectangle>
              <NoteArea></NoteArea>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              제품번호<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <SearchIconBox onClick={handleNumber}>
                <img src={SearchIcon} />
              </SearchIconBox>
            </CurvedRectangle>
            {number && (
              <Modal
                isOpen={number}
                onRequestClose={() => handleNumber(false)}
                style={{
                  overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                  content: {
                    border: "none",
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  },
                }}
              >
                <BrandNumberSearch onClose={handleNumber} />
              </Modal>
            )}
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              분류<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <Dropdefault>{dropdown.category.value}</Dropdefault>
              <Toggledown onClick={() => handleDropdown("category")}>
                &lt;
              </Toggledown>
            </CurvedRectangle>
            <DropdownContainer isToggle={dropdown.category.isOpen}>
              <DropdownList>
                {clothingCategories.map((category) => (
                  <DropdownItem
                    key={category.value}
                    onClick={() =>
                      handelDropdownSelect("category", category.value)
                    }
                  >
                    {category.label}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropdownContainer>
          </DetailNamebox>

          <DetailNamebox>
            <DetailName>
              사이즈<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <NoteArea></NoteArea>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              핏<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <Dropdefault>{dropdown.fit.value}</Dropdefault>
              <Toggledown onClick={() => handleDropdown("fit")}>
                &lt;
              </Toggledown>
            </CurvedRectangle>
            <DropdownContainer isToggle={dropdown.fit.isOpen}>
              <DropdownList>
                {fitOptions.map((fit) => (
                  <DropdownItem
                    key={fit.value}
                    onClick={() => handelDropdownSelect("fit", fit.value)}
                  >
                    {fit.label}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropdownContainer>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>색상</DetailName>
            <CurvedRectangle>
              <NoteArea></NoteArea>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>URL</DetailName>
            <CurvedRectangle>
              <Detailbox></Detailbox>
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>평가</DetailName>
            <Detailbox style={{ display: "flex", marginTop: "5px" }}>
              {renderStars()}
            </Detailbox>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>메모</DetailName>
            <CurvedRectangle2>
              <NoteArea></NoteArea>
            </CurvedRectangle2>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>실축 사이즈</DetailName>
            <MeasureNamebox>
              <MeasureName>총장</MeasureName>
              <CurvedRectangle3>
                <MeasureArea></MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>어깨너비</MeasureName>
              <CurvedRectangle3>
                <MeasureArea></MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>가슴단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea></MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>암홀단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>-</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>소매단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>-</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>소매길이</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>-</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>밑단단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea>-</MeasureArea>
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <StyledButton onClick={handleRegister}>
              옷 정보 등록하기
            </StyledButton>
            {registerpopup && (
              <Modal
                isOpen={registerpopup}
                onRequestClose={() => handleRegister(false)}
                style={{
                  overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                  content: {
                    border: "none",
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  },
                }}
              >
                <RegisterPopUp onClose={handleRegister} />
              </Modal>
            )}
          </DetailNamebox>
        </Parent3>
      </Parent1>
    </div>
  );
};

export default ClothregisterPage;
