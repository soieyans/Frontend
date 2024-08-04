import styled from "styled-components";


export const Container = styled.div`
    position:relative;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    gap:42px;

`

export const Back = styled.img`
    position:absolute;
    top:47px;
    left:54px;
    width:22px;
    height:auto;
`

export const SearchWrap = styled.div`
display: flex;
align-items: center;
`

export const SearchInputBox = styled.input`
width: 690px;
height: 61px;
box-sizing: border-box;
border-width: 3px;
border-radius: 30px;
font-size: 25px;
font-weight: 500;
line-height: 36.2px;
padding-left:32px;
margin-left: 12px;
`;

export const SearchBox = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
    padding:0 74px;
    gap:30px;

`