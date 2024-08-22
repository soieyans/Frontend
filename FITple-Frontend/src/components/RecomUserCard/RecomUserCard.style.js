import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 317px;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  box-shadow: 8px 8px 20px rgba(201, 199, 199, 0.19);
  background-color: #fff;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-top: 14px;
`;
export const UserProfileWrap = styled.div`
  display: flex;
  gap: 5px;
`;

export const UserProfile = styled.h3`
  font-size: 12px;
  font-weight: 650;
  margin-top: 9px;
`;

export const UserFit = styled.h3`
  font-size: 16px;
  margin-top: 11px;
`;

export const UserStyle = styled.h3`
  font-size: 16px;
  margin-top: 4px;
  text-align: center;
`;

export const Follow = styled.button`
  margin-top: 12px;
  font-size: 12px;
  padding: 11px 48px;
  border: none;
  border-radius: 50px;
  background-color: #0276fe;
  color: white;
  cursor: pointer;
`;
