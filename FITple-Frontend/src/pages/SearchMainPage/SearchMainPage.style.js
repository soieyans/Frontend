import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;
export const MainContainer = styled.div`
  border: 2px solid red;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 0 41px 0;
  position: relative;
`;
export const TitleContainer = styled.div``;
export const TitleBox = styled.div`
  width: fit-content;
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.p`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 12px;
`;
export const ImpactText = styled.span`
  color: #ff84a9;
`;
export const Title = styled.div`
  font-size: 56px;
  font-weight: 400;
  display: flex;
  border: 1px solid red;
  align-items: center;
`;
export const Box = styled.span`
  border: 1px solid blue;
  font-size: 100px;
  font-weight: 700;
`;
export const TitleBackground = styled.div`
  background-color: rgb(0, 0, 0, 0.2);
  height: fit-content;
  padding: 0 24px;
  margin: 0 32px;
`;
export const SearchContainer = styled.div`
  border: 1px solid red;
  width: 504px;
  margin-top: 72px;
`;
export const SearchText = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;
export const ItemContainer = styled.div`
  border: 1px solid blue;
  height: 600px;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 536px;
  top: -117px;
  transform: scaleX(1.1);
  z-index: -1;
  /* main/blue */
  background: #0075ff;
  filter: blur(50px);
`;

export const SunIconImg = styled.img`
  position: absolute;
  left: 0;
  top: 210px;
`;
