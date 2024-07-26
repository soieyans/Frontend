import styled from "styled-components";

export const CompareCardContainer = styled.div`
    margin-top: 12px;
    width: 593px;
    height: 168px;
    border: solid 1px #838383;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ItemImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 99px;
    margin-left: 40px;
`;

export const CompareCardTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ItemTitleText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #000000;
    font-size: 20px;
    font-weight: 600;
`;

export const ItemSubTitleText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #000000;
    font-size: 20px;
    font-weight: 800;
`;

export const ItemSizeText = styled.div`
    font-family: 'SUIT Variable', sans-serif;
    color: #838383;
    font-size: 16px;
    font-weight: 500;
`;

export const SelectBtn = styled.button`
    font-family: 'SUIT Variable', sans-serif;
    color: white;
    font-size: 20px;
    font-weight: 700;
    background: #0276FE;
    width: 99px;
    height: 49px;
    border: none;
    border-radius: 50px;
    margin-right: 36px;
    cursor: pointer;
`;