// Desc: ClothdetailPage
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";
const ClothdetailPage = () => {
  const navigate = useNavigate();
  //노트
  const [note, setNote] = useState("");
  //수정하기,삭제하기 칸 열 기

  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleNavigate = () => {
    navigate("/clothupdate");
  };
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);
  const handleDeleteCloth = () => {
    setisDeletePopupOpen(!isDeletePopupOpen);
  };

  const handleInputchange = (e) => {
    setNote(e.target.value);
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
  //찜하기
  const [isBookmark, setIsBookmark] = useState(false);
  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };
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
        <ProductDeImage />
        <ProductContainer>
          <Imgcontainer>
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
            <ProductDeImagemin />
          </Imgcontainer>
          <StarContainer>{renderStars()}</StarContainer>
        </ProductContainer>
        <Parent3>
          <ClothNamebox>
            <ClothName>
              아디다스<br></br>
              <b>에센셜 풀집 후디</b>
            </ClothName>

            <ClothdebarContainer onClick={toggleEdit}>
              <Clothdebar />
              <Clothdebar />
              <Clothdebar />
              {isEdit && (
                <EditButtons isEdit={isEdit}>
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
          </ClothNamebox>
          <DetailNamebox>
            <DetailName>사이즈</DetailName>
            <DetailName>핏</DetailName>
            <DetailName> 색상</DetailName>
            <DetailName>제품번호</DetailName>
          </DetailNamebox>
          <DetailboxContainer>
            <Detailbox>XL</Detailbox>
            <Detailbox>오버</Detailbox>
            <Detailbox>그레이</Detailbox>
            <Detailbox>IL2516</Detailbox>
          </DetailboxContainer>
          <DetailName>URL</DetailName>
          <Detailbox>
            <a href="https://www.adidas.co.kr/">https://www.adidas.co.kr/</a>
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
          <DetailName>실축 사이즈</DetailName>
          <MeasureNamebox>
            <MeasureName>총장</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>40</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          <MeasureNamebox>
            <MeasureName>어깨너비</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>71</MeasureArea>
            </CurvedRectangle3>
            <MeasureName>cm</MeasureName>
          </MeasureNamebox>
          <MeasureNamebox>
            <MeasureName>가슴단면</MeasureName>
            <CurvedRectangle3>
              <MeasureArea>73</MeasureArea>
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
        </Parent3>
      </Parent2>
    </div>
  );
};

export default ClothdetailPage;
