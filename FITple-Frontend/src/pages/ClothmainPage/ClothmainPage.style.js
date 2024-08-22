import styled from "styled-components";
export const MainProductItem = styled.div`
  width: 250px;
  height: 250px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 10px;
`;
export const MainProductBrand = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: "SUIT Variable", sans-serif;
  color: #000000;
`;

export const MainProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: #d9d9d9;
  background-position: center;
  background-size: cover;
  margin-bottom: 10px;
`;
export const MainImgContainer = styled.div`
  display: flex;
  position: relative;
`;

export const MainProductName = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const MainProductDetail = styled.div`
  font-size: 18px;
  color: #666;
`;
export const MainProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90%;
  margin-bottom: auto;
  overflow: hidden;
`;

export const MainParent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 140px;
`;

export const MainFilledHeart = styled.div`
  background: url(assets/filledheart.svg);
  position: absolute;
  top: 20px;
  right: 15px;
  width: 33.33px;
  height: 30.58px;
  z-index: 1;
`;

export const MainPLUSbutton = styled.div`
  background: url(assets/plus.svg);
  position: fixed;
  width: 97px;
  height: 97px;
  right: 100px;
  top: 500px;
  cursor: pointer;
`;
//수정하기
export const EditButtons = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
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
export const MainClothdebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: pointer;

  margin-left: 180px;
  margin-top: 210px;
`;
export const MainClothdebar = styled.div`
  //옷 이름 옆 점 세개(추가,수정나오는칸)
  background: url(assets/detailbar.svg);
  width: 7px;
  height: 7px;
  margin-bottom: 3px;
`;
export const LoadMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  font-family: "SUIT Variable", sans-serif;
  color: #000000;
  background-color: #f5f5f5;
  cursor: pointer;
`;
//검색창 만들기

export const MainSearchContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
  margin-right: 100px;
`;
export const MainSearchIcon = styled.div`
  background: url(assets/search.svg);
  position: absolute;
  width: 30px;
  height: 30px;
  left: 350px;
  top: 60px;
`;

export const MainSearchBar = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #838383;
  border-radius: 10px;
  padding-left: 50px;
  font-size: 20px;
  font-family: "SUIT Variable", sans-serif;
  color: #000000;
`;

export const MainSerchTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
`;
export const MainSerchTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  font-family: "SUIT Variable", sans-serif;
  color: #0276fe;
`;
export const MainSerchTitle2 = styled.div`
  font-size: 24px;
  font-weight: 800;
  font-family: "SUIT Variable", sans-serif;
  color: #000000;
`;
export const MainSideBarWrapper = styled.div`
  display: flex;
  margin-top: 100px;
`;
