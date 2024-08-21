import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 250px;
`;

export const ItemImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 20px;
  margin-bottom: 8px;
`;

export const UserInfo = styled.div`
  display: ${(props) => (props.$user ? "flex" : "none")};
  align-items: center;
  margin-bottom: 8px;
`;
export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const ItemWrap = styled.div`
  font-size: 20px;
`;

export const Brand = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
`;
export const ItemName = styled.p`
  max-height: 40px;
  font-weight: 800;
  margin-bottom: 4px;

  /* 2줄 넘어가면 ...으로표시 */
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
export const Size = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1250x;
`;

export const SizeWrap = styled.div`
  display: flex;
`;
