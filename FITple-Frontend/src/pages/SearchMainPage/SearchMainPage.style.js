import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;
export const MainContainer = styled.div`
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
  align-items: center;
`;
export const Box = styled.span`
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

export const FireIconImg = styled.img`
  position: absolute;
  left: 0;
  top: 21px;
`;

export const SpringIconImg = styled.img`
  position: absolute;
  left: 201px;
  top: 297px;
`;

export const HeartIconImg = styled.img`
  position: absolute;
  left: 417px;
  top: 141px;
  z-index: -1;
`;

export const ThumbIconImg = styled.img`
  position: absolute;
  right: 97px;
  top: 0px;
`;

export const ThunderIconImg = styled.img`
  position: absolute;
  right: 5px;
  top: 191px;
`;
export const StartRedIconImg = styled.img`
  position: absolute;
  right: 190px;
  top: 295px;
`;
