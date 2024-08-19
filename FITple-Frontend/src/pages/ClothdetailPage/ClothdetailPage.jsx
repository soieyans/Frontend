import { useState, useEffect } from "react";
import {
  BackIcon,
  CurrentCloth,
  Parent1,
  Parent2,
  Parent3,
  ProductDeImage,
  ClothNamebox,
  ClothName,
  Clothdebar,
  ClothdebarContainer,
  DetailName,
  DetailNamebox,
  DetailboxContainer,
  Detailbox,
  CurvedRectangle,
  NoteArea,
  EditButtons,
  EditButton,
  CurvedRectangle3,
  MeasureArea,
  MeasureNamebox,
  MeasureName,
  FullStar,
  EmptyStar,
  ProductContainer,
  StarContainer,
  Imgcontainer,
  ProductDeImagemin,
  ChangeButton,
  EmptyBookmark,
  FilledBookmark,
} from "./ClothdetailPage.style";
import { Link, useParams } from "react-router-dom"; // useParams 추가
import Modal from "react-modal";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";

const ClothdetailPage = () => {
  // 노트
  const [note, setNote] = useState("");

  // 수정하기, 삭제하기 칸 열기
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);
  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleInputchange = (e) => {
    setNote(e.target.value);
  };

  // 별점
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

  // 찜하기
  const [isBookmark, setIsBookmark] = useState(false);
  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  // API에서 데이터 가져오기 위한 상태 관리
  const [clothData, setClothData] = useState(null);
  const { clothId } = useParams(); // URL에서 clothId 가져오기

  useEffect(() => {
    const fetchClothDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/FITple/my/closet/${clothId}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer your_access_token_here", // 실제 액세스 토큰으로 대체
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (result && result.data && result.data.clothData) {
          setClothData(result.data.clothData[0]); // 데이터를 상태로 설정
        } else {
          console.error("Unexpected response structure:", result);
          setClothData(null);
        }
      } catch (error) {
        console.error("Error fetching cloth detail:", error);
        setClothData(null);
      }
    };

    fetchClothDetail();
  }, [clothId]);

  if (!clothData) {
    return <div>Loading...</div>; // 로딩 상태
  }

  return (
    <div>
      <Parent1>
        <ChangeButton />
        {isBookmark ? (
          <FilledBookmark onClick={handleBookmark} />
        ) : (
          <EmptyBookmark onClick={handleBookmark} />
        )}
        <BackIcon />
        <CurrentCloth>옷장{">"}아우터</CurrentCloth>
      </Parent1>
      <Parent2>
        <ProductDeImage
          src={`../../assets/${clothData.cloth_name}_${clothData.cloth_id}.jpg`}
        />
        <ProductContainer>
          <Imgcontainer>
            <ProductDeImagemin
              src={`../../assets/${clothData.cloth_name}_${clothData.cloth_id}_thumb.jpg`}
            />
            {/* 추가 이미지들이 필요하다면 여기에 추가 */}
          </Imgcontainer>
          <StarContainer>{renderStars()}</StarContainer>
        </ProductContainer>
        <Parent3>
          <ClothNamebox>
            <ClothName>
              {clothData.brand}
              <br></br>
              <b>{clothData.cloth_name}</b>
            </ClothName>

            <ClothdebarContainer onClick={toggleEdit}>
              <Clothdebar />
              <Clothdebar />
              <Clothdebar />
              {isEdit && (
                <EditButtons isEdit={isEdit}>
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
          </ClothNamebox>
          <DetailNamebox>
            <DetailName>사이즈</DetailName>
            <DetailName>핏</DetailName>
            <DetailName>색상</DetailName>
            <DetailName>제품번호</DetailName>
          </DetailNamebox>
          <DetailboxContainer>
            <Detailbox>{clothData.size}</Detailbox>
            <Detailbox>{clothData.fit}</Detailbox>
            <Detailbox>{clothData.color}</Detailbox>
            <Detailbox>{clothData.product_code}</Detailbox>
          </DetailboxContainer>
          <DetailName>URL</DetailName>
          <Detailbox>
            <a href={clothData.URL}>{clothData.URL}</a>
          </Detailbox>
          <DetailName>메모</DetailName>
          <CurvedRectangle>
            <NoteArea
              id="note-area"
              placeholder="메모를 입력하세요"
              value={note}
              onChange={handleInputchange}
            />
          </CurvedRectangle>
          <DetailName>실측 사이즈</DetailName>
          <MeasureNamebox>
            <MeasureName>총장</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>{clothData.length}</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          {/* 다른 실측 사이즈도 비슷하게 렌더링 */}
        </Parent3>
      </Parent2>
    </div>
  );
};

export default ClothdetailPage;
