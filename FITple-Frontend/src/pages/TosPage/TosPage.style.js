import styled from 'styled-components';

export const TosPageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 30px 0;
`;

export const MainText = styled.p`
    width: 62%;
    font-size: 20px;
    margin: 25px 0 15px 0;
    padding: 0;
    font-weight: bold;
`;

export const ScrollBox = styled.div`
    width: 59%;
    height: 200px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow-y: scroll;
    background-color: #fcfcfc;
`;

export const CheckboxContainer = styled.div`
    width: 62%;
    margin: 12px 0;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
`;

export const SubmitButton = styled.button`
    width: 64%;
    height: 50px;
    background-color: black;
    border-radius: 10px;
    font-size: 17px;
    color: white;
    margin-top: 25px;
`;
