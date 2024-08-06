import styled from "styled-components";

// 수영 : width 100% -> width 717px으로 수정하고 padding제거했습니다!
export const Container = styled.div`
  margin-top: 42px;
  position: relative;
  box-sizing: border-box;
  width: 717px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SubWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const UserImg = styled.img`
  width: 140px;
  height: 140px;
`;

export const UserName = styled.h3`
  font-size: 32px;
  font-weight: bold;
`;
