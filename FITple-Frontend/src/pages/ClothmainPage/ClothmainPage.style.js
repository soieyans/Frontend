import styled from "styled-components";
export const ProductItem = styled.div`
  width: 250px;
  height: 250px;
  top: 50px;
  background: #fff;
  border-radius: 20px;

  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px; /* 이미지 높이 설정 */
  border-radius: 20px;
  border-color: gray;
  background-color: #d9d9d9;
  background-image: url(); /* 이미지 URL 설정 */
  background-position: center; /* 이미지 위치 설정 */
  background-size: cover; /* 이미지 크기 설정 */
  margin-bottom: 10px; /* 하단 여백 */
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px; /* 하단 여백 */
`;

export const ProductDetail = styled.div`
  font-size: 18px;
  color: #666;
`;
export const ProductContainer = styled.div`
  display: flex; /* flexbox 레이아웃 사용 */
  flex-wrap: wrap; /* 여러 줄로 나열 가능 */
  justify-content: flex-start; /* 아이템 사이 공간 최대한 활용 */
  width: 90%;
  margin-bottom: auto;
  overflow: hidden;
`;

export const Parent = styled.div`
  display: flex;
  align-items: flex-start;
`;
