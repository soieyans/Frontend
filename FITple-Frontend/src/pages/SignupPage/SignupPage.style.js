import styled from 'styled-components';

export const SignupPageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 30px 0;
`;

export const FormWrapper = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0 50px 0;
`;

export const InputBox = styled.input.attrs(props => ({
    type: props.type || 'text',
    id: props.id,
    placeholder: props.placeholder
}))`
    width: 60%;
    height: 30px;
    margin-top: 25px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 5px 15px;
    font-size: 17px;
    outline-color: #0075FF;
`;

export const ErrorText = styled.p`
    color: ${props => (props.isError ? 'red' : '#0075FF')};
    width: 62%;
    margin: 5px 0 0 0;
    padding: 0;
    font-size: 17px;
`;

export const MainText = styled.p`
    width: 62%;
    font-size: 20px;
    margin: 25px 0 15px 0;
    padding: 0;
    font-weight: bold;
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