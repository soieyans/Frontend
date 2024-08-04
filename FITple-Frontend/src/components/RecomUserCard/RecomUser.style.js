import styled from "styled-components";

export const Container = styled.div`
  box-sizing:border-box;
  flex:0 0 auto;
  width: 250px;
  height: 317px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;



export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  
`;

export const UserName = styled.h3`
  font-size:20px;
  font-weight:bold;
  margin-top:14px;
`;

export const UserProfile = styled.h3`
  font-size:12px;
  font-weight:650;
  margin-top:9px;
`;

export const UserFit = styled.h3`
  font-size:16px;
  margin-top:11px;
`;

export const UserStyle = styled.h3`
font-size:16px;
  margin-top:4px;
  text-align:center;
`;

export const Follow = styled.button`
  margin-top:12px;
    font-size:12px;
  padding: 11px 48px;
  border: none;
  border-radius: 50px;
  background-color: #0276FE;
  color: white;
  cursor: pointer;
`;
