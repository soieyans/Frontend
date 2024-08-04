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
  TableContainer,
  TableRow,
  TableCell,
  MeasureCell,
  MeasureLabel,
  EditButtons,
  EditButton,
} from "./ClothdetailPage.style";
import { useState } from "react";
const ClothdetailPage = () => {
  const [note, setNote] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleInputchange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <Parent1>
        <BackIcon />
        <CurrentCloth>옷장{">"}아우터</CurrentCloth>
      </Parent1>
      <Parent2>
        <ProductDeImage />
        <Parent3>
          <ClothNamebox>
            <ClothName>
              아디다스<br></br>
              <b>에센셜 풀집 후디</b>
            </ClothName>

            <ClothdebarContainer onClick={handleEdit}>
              <Clothdebar />
              <Clothdebar />
              <Clothdebar />
              {isEdit && (
                <EditButtons isEdit={isEdit}>
                  <EditButton>수정하기</EditButton>
                  <EditButton>삭제하기</EditButton>
                </EditButtons>
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
          <TableContainer>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <MeasureCell>총기장</MeasureCell>
              </TableCell>
              <TableCell>
                <MeasureLabel>69cm</MeasureLabel>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <MeasureCell>어깨너비</MeasureCell>
              </TableCell>
              <TableCell>
                <MeasureLabel>71cm</MeasureLabel>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <MeasureCell>가슴둘레</MeasureCell>
              </TableCell>
              <TableCell>
                <MeasureLabel>66cm</MeasureLabel>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <MeasureCell>소매길이</MeasureCell>
              </TableCell>
              <TableCell>
                <MeasureLabel>62cm</MeasureLabel>
              </TableCell>
            </TableRow>
          </TableContainer>
        </Parent3>
      </Parent2>
    </div>
  );
};

export default ClothdetailPage;
