import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
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
  ModalContainer,
  ModalInput,
  ModalButton,
} from "./ClothregisterPage.style";
import SearchIcon from "/assets/SearchIcon.svg";
import BrandSearch from "../../components/BrandSearch/BrandSearch";
import BrandNumberSearch from "../../components/BrandNumberSearch/BrandNumberSearch";
import RegisterPopUp from "../../components/RegisterPopUp/RegisterPopUp";

const localhost = "http://localhost:3000";

const ClothregisterPage = () => {
  // 더미 데이터
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

  // 드롭다운 상태 관리
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

  const [imageUrl, setImageUrl] = useState("");
  const [imageModalOpen, setImageModalOpen] = useState(false); // 이미지 모달 상태
  const [tempImageUrl, setTempImageUrl] = useState(""); // 임시로 입력된 이미지 URL
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState(0);
  const [memo, setMemo] = useState("");
  const [measurements, setMeasurements] = useState({
    length: null,
    shoulder: null,
    chest: null,
    armhole: null,
    sleeve: null,
    sleeve_length: null,
    hem: null,
  });
  const [registerpopup, setRegisterpopup] = useState(false);
  const [brandSearchOpen, setBrandSearchOpen] = useState(false);
  const [numberSearchOpen, setNumberSearchOpen] = useState(false);

  // 이미지 URL 입력 모달 핸들러
  const handleImageModalOpen = () => setImageModalOpen(true);
  const handleImageModalClose = () => setImageModalOpen(false);
  const handleImageUrlSubmit = () => {
    setImageUrl(tempImageUrl); // 입력된 URL을 최종 이미지 URL로 설정
    handleImageModalClose();
  };

  // 옷 정보 등록 함수
  const handleRegister = async () => {
    const requestBody = {
      image: imageUrl,
      brand,
      name,
      product_code: productCode,
      category: dropdown.category.value,
      size,
      fit: dropdown.fit.value,
      color,
      url,
      rating,
      memo,
      length: measurements.length,
      shoulder: measurements.shoulder,
      chest: measurements.chest,
      armhole: measurements.armhole,
      sleeve: measurements.sleeve,
      sleeve_length: measurements.sleeve_length,
      hem: measurements.hem,
    };

    try {
      const response = await fetch(`${localhost}/FITple/my/closet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setRegisterpopup(true); // 성공 시 팝업 표시
      } else {
        console.error("Failed to register clothing:", response.statusText);
      }
    } catch (error) {
      console.error("Clothing registration error:", error);
    }
  };

  // 드롭다운 처리 함수들
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

  // 별점 처리 함수들
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

  // 브랜드 검색
  const handleBrandSearch = () => {
    setBrandSearchOpen(!brandSearchOpen);
  };

  // 제품번호 검색
  const handleNumberSearch = () => {
    setNumberSearchOpen(!numberSearchOpen);
  };

  // 옷 정보 등록 모달 핸들러
  const handleRegisterModal = () => {
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
            <Registerimage onClick={handleImageModalOpen} />
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
          {/* 이미지 URL 입력 모달 */}
          <Modal
            isOpen={imageModalOpen}
            onRequestClose={handleImageModalClose}
            style={{
              overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
              content: {
                border: "none",
                backgroundColor: "transparent",
                overflow: "hidden",
              },
            }}
          >
            <ModalContainer>
              <h2>이미지 URL 입력</h2>
              <ModalInput
                type="text"
                placeholder="이미지 URL을 입력하세요"
                value={tempImageUrl}
                onChange={(e) => setTempImageUrl(e.target.value)}
              />
              <ModalButton onClick={handleImageUrlSubmit}>확인</ModalButton>
            </ModalContainer>
          </Modal>

          <DetailNamebox>
            <DetailName>브랜드</DetailName>
            <CurvedRectangle>
              <SearchIconBox onClick={handleBrandSearch}>
                <img src={SearchIcon} alt="브랜드 검색" />
              </SearchIconBox>
            </CurvedRectangle>
            {brandSearchOpen && (
              <Modal
                isOpen={brandSearchOpen}
                onRequestClose={() => setBrandSearchOpen(false)}
                style={{
                  overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                  content: {
                    border: "none",
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  },
                }}
              >
                <BrandSearch onClose={handleBrandSearch} />
              </Modal>
            )}
          </DetailNamebox>

          <DetailNamebox>
            <DetailName>
              제품명 <SS>*</SS>
            </DetailName>

            <CurvedRectangle>
              <NoteArea
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </CurvedRectangle>
          </DetailNamebox>

          <DetailNamebox>
            <DetailName>
              제품번호<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <SearchIconBox onClick={handleNumberSearch}>
                <img src={SearchIcon} alt="제품번호 검색" />
              </SearchIconBox>
            </CurvedRectangle>
            {numberSearchOpen && (
              <Modal
                isOpen={numberSearchOpen}
                onRequestClose={() => setNumberSearchOpen(false)}
                style={{
                  overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                  content: {
                    border: "none",
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  },
                }}
              >
                <BrandNumberSearch onClose={handleNumberSearch} />
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
              <NoteArea
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
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
              <NoteArea
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </CurvedRectangle>
          </DetailNamebox>

          <DetailNamebox>
            <DetailName>URL</DetailName>
            <CurvedRectangle>
              <Detailbox>
                <NoteArea
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Detailbox>
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
              <NoteArea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </CurvedRectangle2>
          </DetailNamebox>

          <DetailNamebox>
            <DetailName>실축 사이즈</DetailName>
            <MeasureNamebox>
              <MeasureName>총장</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  value={measurements.length || ""}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, length: e.target.value })
                  }
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>

            <MeasureNamebox>
              <MeasureName>어깨너비</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  value={measurements.shoulder || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      shoulder: e.target.value,
                    })
                  }
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>

            <MeasureNamebox>
              <MeasureName>가슴단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  value={measurements.chest || ""}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, chest: e.target.value })
                  }
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>

            <MeasureNamebox>
              <MeasureName>암홀단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  value={measurements.armhole || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      armhole: e.target.value,
                    })
                  }
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>

            <MeasureNamebox>
              <MeasureName>소매단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  value={measurements.sleeve || ""}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, sleeve: e.target.value })
                  }
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>

            <MeasureNamebox>
              <MeasureName>소매길이</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  value={measurements.sleeve_length || ""}
                  onChange={(e) =>
                    setMeasurements({
                      ...measurements,
                      sleeve_length: e.target.value,
                    })
                  }
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>

            <MeasureNamebox>
              <MeasureName>밑단단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  value={measurements.hem || ""}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, hem: e.target.value })
                  }
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>

            <StyledButton onClick={handleRegister}>
              옷 정보 등록하기
            </StyledButton>
            {registerpopup && (
              <Modal
                isOpen={registerpopup}
                onRequestClose={() => setRegisterpopup(false)}
                style={{
                  overlay: { backgroundColor: "rgba(81, 78, 78, 0.162)" },
                  content: {
                    border: "none",
                    backgroundColor: "transparent",
                    overflow: "hidden",
                  },
                }}
              >
                <RegisterPopUp onClose={handleRegisterModal} />
              </Modal>
            )}
          </DetailNamebox>
        </Parent3>
      </Parent1>
    </div>
  );
};

export default ClothregisterPage;
