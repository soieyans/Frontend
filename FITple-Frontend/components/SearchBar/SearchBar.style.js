import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 511px;
    height: 60px;
    position: relative;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background-color: white;
    border: solid 3px #838383;
    border-radius: 30px;
    padding-left: 28px;
    font-family: 'SUIT Variable', sans-serif;
    color: #black;
    font-size: 20px;
    font-weight: 600;
    font-color: black;
    &::placeholder{
        color: #838383;
    }
	}`;

export const SearchIcon = styled.img`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 20px;
    right: -6px;
    width: 27px;
    height: 28.4px;
`;