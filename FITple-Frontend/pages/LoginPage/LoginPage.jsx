import logo from '../../assets/FITple-logo.svg'
import styled from 'styled-components'

function LoginPage() {
    return(
        <LoginPageWrapper>
            <img src={logo} alt="FITple Logo" />
            <MainText>F I T p l e</MainText>
            <FormWrapper>
                <InputBox type="text" id="login-id" placeholder="ID"/>
                <InputBox type="password" id="login-pw" placeholder="PASSWORD"/>
                <SubmitButton>로그인</SubmitButton>
            </FormWrapper>
            <OptionWrapper>
                <OptionButton>회원가입</OptionButton>
                <OptionButton>ID/PW 찾기</OptionButton>
            </OptionWrapper>
        </LoginPageWrapper>
    );
}

const LoginPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainText = styled.p`
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 40px 0;
    padding: 0;
`;

const FormWrapper = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
        placeholder: props.placeholder // 힌트 텍스트를 props로 받음
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

const SubmitButton = styled.button`
    width: 64%;
    height: 50px;
    background-color: black;
    // background-color: #0075FF;
    // background-color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
    border-radius: 10px;
    font-size: 17px;
    color: white;
    margin-top: 25px;
`;

const OptionWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const OptionButton = styled.button`
    margin-top: 30px;
    font-size: 17px;
    text-decoration: underline solid #888888;
    background-color: white;
`;

export default LoginPage