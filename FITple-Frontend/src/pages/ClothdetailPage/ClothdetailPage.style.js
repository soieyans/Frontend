import styled from "styled-components";

export const Parent1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 60px;
`;
export const Parent2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 80px;
`;
export const Parent3 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 80px;
  margin-top: 40px;
`;
export const ProductContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom: 60px;
`;
export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 200px;
  margin-top: 20px;
`;

export const Imgcontainer = styled.div`
  display: flex;
  width: 400px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  margin-top: 10px;
  &::-webkit-scrollbar {
    width: 7px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
export const ProductDeImagemin = styled.img`
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  border-color: 1px solid gray;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #efefef;
  background-image: url();
  background-position: center;
  background-size: cover;
`;

export const ClothNamebox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 30px;
`;
export const ClothName = styled.div`
  font-size: 35px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 700;
  color: #000000;
  margin-top: 20px;
`;
export const ClothdebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  margin-bottom: 60px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
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
  margin-top: 20px;
`;

export const CurrentCloth = styled.div`
  //옷장{">"}아우터
  font-size: 20px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #000000;
  margin-left: 370px;
`;
//상세 정보 옷사진 나중에 fetch로 받아오기
export const ProductDeImage = styled.img`
  width: 400px;
  height: 400px;
  border-color: gray;
  border-radius: 10px;
  background-color: #d9d9d9;
  background-image: url();
  background-position: center;
  background-size: cover;
  margin-bottom: 620px;
  margin-left: 50px;
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
  font-size: 25px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #0276fe;
  margin-left: 30px;
  margin-top: 40px;
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
  font-weight: 700;
  color: #000000;
  margin-left: 30px;
  margin-top: 20px;
`;

/*수정하기 삭제하기*/
export const EditButtons = styled.div`
  display: flex;
  position: absolute;
  right: 390px;
  bottom: 330px;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.isEdit ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
export const EditButton = styled.button`
  padding: 10px 40px;
  border: 1px solid #000000;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  font-family: "SUIT Variable", sans-serif;
  border-radius: 10px;
  background-color: #efefef;
  cursor: pointer;
  &:hover {
    background-color: #626262;
  }
`;

export const FullStar = styled.div`
  width: 38px;
  height: 37px;
  background: url(assets/Star8.svg);
`;
export const EmptyStar = styled.div`
  width: 38px;
  height: 37px;
  background: url(assets/Star5.svg);
`;

export const MeasureName = styled.div`
  font-size: 20px;
  font-family: "SUIT Variable", sans-serif;
  font-weight: 600;
  color: #838383;
  margin-top: 20px;
  width: 100%;
`;
export const MeasureNamebox = styled.div`
  display: flex;
  width: 80%;
  margin-left: 70px;
  justify-content: center;
  align-items: center;
`;
export const CurvedRectangle3 = styled.div`
  /*메모*/
  width: 180px;
  height: 20px;
  border: 1px solid #efefef;
  border-radius: 16px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #efefef;
`;
export const MeasureArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-family: "SUIT Variable", sans-serif;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  margin-left: 130px;
  margin-right: 20px;
`;
//비교
export const ChangeButton = styled.div`
  position: fixed;
  background: url(assets/changebutton.svg);
  width: 97px;
  height: 97px;
  top: 450px;
  left: 1280px;
  cursor: pointer;
`;
// 하얀찜
export const EmptyBookmark = styled.div`
  position: fixed;
  background: url(assets/emptybookmark.svg);
  width: 97px;
  height: 97px;
  top: 550px;
  left: 1280px;
  cursor: pointer;
`;
//파란색찜
export const FilledBookmark = styled.div`
  position: fixed;
  background: url(assets/filledbookmark.svg);
  width: 97px;
  height: 97px;
  top: 550px;
  left: 1280px;
  cursor: pointer;
`;
