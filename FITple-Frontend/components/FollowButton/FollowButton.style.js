import styled from "styled-components";

export const Container = styled.button`
  font-size: 23px;
  font-weight: 700;
  margin-left:auto;
  width:145px;
  padding: 4px 38px;
  border-radius: 50px;
  background-color: ${props => (props.isClicked ? '#d9d9d9' : 'black')};
  color: white;
  border: none;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;
