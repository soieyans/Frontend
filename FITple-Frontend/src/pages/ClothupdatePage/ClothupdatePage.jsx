import { useState } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
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
} from "./ClothupdatePage.style";
import updateCloth from "../../../data/UpdateApi";

// 카테고리와 핏 옵션을 상수로 관리
const clothingCategories = [
  { value: 1, label: "아우터" },
  { value: 2, label: "상의" },
  { value: 3, label: "바지" },
  { value: 4, label: "스커트" },
  { value: 5, label: "원피스" },
  { value: 6, label: "신발" },
];

const fitOptions = [
  { value: "레귤러", label: "레귤러" },
  { value: "오버", label: "오버" },
  { value: "세미오버", label: "세미오버" },
  { value: "슬림", label: "슬림" },
];

const ClothupdatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clothId } = useParams();

  // detail 페이지에서 전달된 clothData를 state로 받아옴
  const initialClothData = location.state?.clothData || {};

  const [clothData, setClothData] = useState(initialClothData);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isFitOpen, setIsFitOpen] = useState(false);
  const [rating, setRating] = useState(initialClothData.rating || 0);

  // 카테고리와 핏의 label을 찾기 위한 함수
  const getLabelByValue = (options, value) => {
    const option = options.find((opt) => opt.value === value);
    return option ? option.label : "선택";
  };

  const handleCategorySelect = (value) => {
    setClothData((prevData) => ({
      ...prevData,
      category: value,
    }));
    setIsCategoryOpen(false);
  };

  const handleFitSelect = (value) => {
    setClothData((prevData) => ({
      ...prevData,
      fit: value,
    }));
    setIsFitOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClothData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  const handleUpdate = async () => {
    try {
      const updatedData = {
        ...clothData,
        rating,
      };

      await updateCloth(clothId, updatedData);

      alert("옷 정보가 성공적으로 수정되었습니다.");
      navigate(`/clothdetail/${clothId}`);
    } catch (error) {
      alert("옷 정보 수정에 실패했습니다. 다시 시도해주세요.");
    }

    console.log(clothData);
  };

  return (
    <div>
      <Parent1>
        <Parent2>
          <Link to="/cloth">
            <BackIcon />
          </Link>
          <ProductDeImage src={clothData.cloth_image} alt="Cloth Image" />
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
              <NoteArea
                name="brand_name"
                value={clothData.brand_name}
                onChange={handleInputChange}
              />
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              제품명 <SS>*</SS>
            </DetailName>

            <CurvedRectangle>
              <NoteArea
                name="name"
                value={clothData.name}
                onChange={handleInputChange}
              />
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              제품번호<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <NoteArea
                name="product_code"
                value={clothData.product_code}
                onChange={handleInputChange}
              />
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>
              분류<SS>*</SS>
            </DetailName>
            <CurvedRectangle>
              <Dropdefault>
                {getLabelByValue(clothingCategories, clothData.category)}
              </Dropdefault>
              <Toggledown onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                &lt;
              </Toggledown>
            </CurvedRectangle>
            <DropdownContainer isToggle={isCategoryOpen}>
              <DropdownList>
                {clothingCategories.map((category) => (
                  <DropdownItem
                    key={category.value}
                    onClick={() => handleCategorySelect(category.value)}
                  >
                    {category.label}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropdownContainer>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>사이즈</DetailName>
            <CurvedRectangle>
              <NoteArea
                name="size"
                value={clothData.size}
                onChange={handleInputChange}
              />
            </CurvedRectangle>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>핏</DetailName>
            <CurvedRectangle>
              <Dropdefault>
                {getLabelByValue(fitOptions, clothData.fit)}
              </Dropdefault>
              <Toggledown onClick={() => setIsFitOpen(!isFitOpen)}>
                &lt;
              </Toggledown>
            </CurvedRectangle>
            <DropdownContainer isToggle={isFitOpen}>
              <DropdownList>
                {fitOptions.map((fit) => (
                  <DropdownItem
                    key={fit.value}
                    onClick={() => handleFitSelect(fit.value)}
                  >
                    {fit.label}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropdownContainer>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>URL</DetailName>
            <CurvedRectangle>
              <Detailbox>
                <a
                  href={clothData.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {clothData.URL}
                </a>
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
                name="memo"
                value={clothData.memo}
                onChange={handleInputChange}
              />
            </CurvedRectangle2>
          </DetailNamebox>
          <DetailNamebox>
            <DetailName>실축 사이즈</DetailName>
            <MeasureNamebox>
              <MeasureName>총장</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  name="length"
                  value={clothData.length}
                  onChange={handleInputChange}
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>어깨너비</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  name="shoulder"
                  value={clothData.shoulder}
                  onChange={handleInputChange}
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>가슴단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  name="chest"
                  value={clothData.chest}
                  onChange={handleInputChange}
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>암홀단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  name="armhole"
                  value={clothData.armhole}
                  onChange={handleInputChange}
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>소매단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  name="sleeve"
                  value={clothData.sleeve}
                  onChange={handleInputChange}
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>소매길이</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  name="sleeve_length"
                  value={clothData.sleeve_length}
                  onChange={handleInputChange}
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <MeasureNamebox>
              <MeasureName>밑단단면</MeasureName>
              <CurvedRectangle3>
                <MeasureArea
                  name="hem"
                  value={clothData.hem}
                  onChange={handleInputChange}
                />
              </CurvedRectangle3>
              <MeasureName>cm</MeasureName>
            </MeasureNamebox>
            <StyledButton onClick={handleUpdate}>옷 정보 수정하기</StyledButton>
          </DetailNamebox>
        </Parent3>
      </Parent1>
    </div>
  );
};

export default ClothupdatePage;
