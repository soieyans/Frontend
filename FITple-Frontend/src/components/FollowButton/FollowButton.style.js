import styled from "styled-components";

export const Container = styled.button`
  font-size: 20px;
  font-weight: 700;
  margin-left:auto;
  width:222px;
  padding: 9px 0;
  border-radius: 10px;
  background-color: ${props => (props.isClicked ? '#0276FE' : 'black')};
  color: white;
  border: none;
  text-align:center;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;
