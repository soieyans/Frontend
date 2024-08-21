import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: fit-content;
  padding: 40px 0;
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
`;
export const SearchText = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;
export const ItemContainer = styled.div`
  box-sizing: border-box;
  padding: 50px 114px;
  width: 100%;
`;

export const Blur = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  top: -117px;
  transform: scaleX(1.2);
  z-index: -1;
  /* main/blue */
  background: #0075ff;
  filter: blur(50px);
`;

export const SunIconImg = styled.img`
  position: absolute;
  left: 0;
  top: 190px;
`;

export const FireIconImg = styled.img`
  position: absolute;
  width: 120px;
  height: auto;
  left: 50px;
  top: 0px;
`;

export const SpringIconImg = styled.img`
  position: absolute;
  width: 100px;
  left: 201px;
  top: 277px;
`;

export const HeartIconImg = styled.img`
  position: absolute;
  left: 417px;
  top: 101px;
  z-index: -1;
`;

export const ThumbIconImg = styled.img`
  position: absolute;
  right: 97px;
  top: -10px;
  width: 100px;
`;

export const ThunderIconImg = styled.img`
  position: absolute;
  width: 120px;
  right: 5px;
  top: 151px;
`;
export const StartRedIconImg = styled.img`
  position: absolute;
  width: 120px;
  right: 190px;
  top: 255px;
`;
export const SideBarWrap = styled.div``;

export const ItemListWrap = styled.div``;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
