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
import { Link } from "react-router-dom";
import Modal from "react-modal";
import DeletePopUp from "../../components/DeletePopUp/DeletePopUp";
import ComparePopUp from "../../components/ComparePopUp/ComparePopUp";
import CompareInputPopUp from "../../components/CompareInputPopUp/CompareInputPopUp";
import CompareSearchPopUp from "../../components/CompareSearchPopUp/CompareSearchPopUp";
import CompareLoading from "../../components/CompareLoading/CompareLoading";
import CompareResult from "../../components/CompareResult/CompareResult";

function ClothdetailPage() {
  //노트
  const [note, setNote] = useState("");

  //수정하기,삭제하기 칸 열 기

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
  //비교하기 팝업 열기
  const [popupOpen, setPopUpOpen] = useState("");
  const comparePopUpOpen = () => {
    setPopUpOpen("ComparePopUp");
  };
  const compareInputPopUpOpen = () => {
    setPopUpOpen("CompareInputPopUp");
  };
  const compareSearchPopUpOpen = () => {
    setPopUpOpen("CompareSearchPopUp");
  };
  const compareLoadingOpen = () => {
    setPopUpOpen("CompareLoading");
  };
  const compareResultOpen = () => {
    setPopUpOpen("CompareResult");
  };
  const popupClose = () => {
    setPopUpOpen("");
  };

  // CompareSearchCard에 들어갈 데이터를 관리할 상태
  const [compareData, setCompareData] = useState([]);

  // CompareInputPopUp에서 저장하기를 눌렀을 때 호출될 함수
  const handleSave = (newData) => {
    setCompareData([...compareData, ...newData]); // 기존 compareData와 새로운 newData를 합쳐서 상태로 저장
  };

  const cleanCompareData = () => {
    setCompareData([]); // 기존 compareData clean시키기
  };

  return (
    <div>
      <Parent1>
        <ChangeButton onClick={comparePopUpOpen} />
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
      {popupOpen == "ComparePopUp" && <ComparePopUp popupClose={popupClose} compareInputPopUpOpen={compareInputPopUpOpen} /> /* 팝업 열기 */}
      {popupOpen == "CompareInputPopUp" && <CompareInputPopUp comparePopUpOpen={comparePopUpOpen} compareSearchPopUpOpen={compareSearchPopUpOpen} popupClose={popupClose} onSave={handleSave} /> /* 팝업 열기 */}
      {popupOpen == "CompareSearchPopUp" && <CompareSearchPopUp compareInputPopUpOpen={compareInputPopUpOpen} popupClose={popupClose} compareData={compareData} cleanCompareData={cleanCompareData} compareLoadingOpen={compareLoadingOpen} /> /* 팝업 열기 */}
      {popupOpen == "CompareLoading" && <CompareLoading popupClose={popupClose} compareSearchPopUpOpen={compareSearchPopUpOpen} cleanCompareData={cleanCompareData} compareResultOpen={compareResultOpen}/> /* 팝업 열기 */}
      {popupOpen == "CompareResult" && <CompareResult popupClose={popupClose} compareData={compareData} cleanCompareData={cleanCompareData} compareLoadingOpen={compareLoadingOpen} compareSearchPopUpOpen={compareSearchPopUpOpen} /> /* 팝업 열기 */}
    </div>
  );
};

export default ClothdetailPage;
