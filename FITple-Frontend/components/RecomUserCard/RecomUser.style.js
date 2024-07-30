import styled from "styled-components";

export const Container = styled.div`
  box-sizing:border-box;
  flex:0 0 auto;
  width: 278px;
  height: 384px;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;



export const UserImg = styled.img`
  width: 100px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px 0;
`;

export const UserName = styled.h3`
  font-size:25px;
  font-weight:bold;
  margin: 10px 0;
`;

export const UserProfile = styled.h3`
  font-size:23px;
  margin: 5px 0;
`;

export const UserFit = styled.h3`
font-size:23px;
  margin: 5px 0;
`;

export const UserStyle = styled.h3`
font-size:23px;
  margin: 5px 0;
`;

export const Follow = styled.button`
    font-size:23px;
  padding: 10px 50px;
  border: none;
  border-radius: 50px;
  background-color: #000;
  color: white;
  cursor: pointer;
`;
