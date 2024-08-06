import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MainText = styled.p`
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 40px 0;
    padding: 0;
`;

export const FormWrapper = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text',
        id: props.id,
        placeholder: props.placeholder
    }))`
    width: 60%;
    height: 30px;
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 5px 15px;
    font-size: 17px;
    outline-color: #0075FF;
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

export const OptionWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const OptionButton = styled.button`
    margin-top: 30px;
    font-size: 17px;
    text-decoration: underline solid #888888;
    background-color: white;
`;
