import styled from "styled-components";

export const Parent1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;
export const Parent2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 60px;
`;
export const Parent3 = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 40px;
  margin-top: 40px;
`;

export const ClothNamebox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;
`;
export const ClothName = styled.div`
  font-size: 25px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 400;
  color: #000000;
  margin-top: 20px;
`;
export const ClothdebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 400px;
  margin-bottom: 60px;
`;
export const Clothdebar = styled.div`
  //옷 이름 옆 점 세개(추가,수정나오는칸)
  background: url(assets/detailbar.svg);
  width: 7px;
  height: 7px;
  margin-bottom: 3px;
`;

export const BackIcon = styled.div`
  //뒤로가기 아이콘
  width: 22.45px;
  height: 38.83px;
  background: url(assets/back.svg);
  margin-left: 70px;
`;

export const CurrentCloth = styled.div`
  //옷장{">"}아우터
  font-size: 25px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 400;
  color: #000000;
  margin-left: 290px;
  margin-top: 20px;
`;

export const ProductDeImage = styled.img`
  width: 600px;
  height: 600px;
  border-color: gray;
  background-color: #d9d9d9;
  background-image: url();
  background-position: center;
  background-size: cover;
`;

/*메모*/
export const CurvedRectangle = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
`;

export const NoteArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-family: sans-serif;
  background-color: transparent;
`;

export const DetailName = styled.div`
  font-size: 30px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 400;
  color: #838383;
  margin-left: 30px;
  margin-top: 20px;
`;
export const DetailNamebox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const DetailboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  margin-top: 10px;
`;
export const Detailbox = styled.div`
  font-size: 25px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 400;
  color: #000000;
  margin-left: 40px;
`;
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 50px;
`;
export const TableRow = styled.table`
  display: flex;
  border: 1px solid #d9d9d9;

  padding: 8px;
`;
export const TableCell = styled.div`
  text-align: center;
  width: 25%;
`;
export const MeasureCell = styled.div`
  font-weight: bold;
`;
export const MeasureLabel = styled.div`
  font-style: italic;
  border-left: 1px solid #d9d9d9;
`;
