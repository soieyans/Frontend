import logo from "../../../assets/FITple-logo.svg";
import {
  LoginPageWrapper,
  MainText,
  FormWrapper,
  InputBox,
  SubmitButton,
  OptionWrapper,
  OptionButton,
} from "./LoginPage.style";

import Test from '../RecomMainPage/RecomMainPage'

function LoginPage() {
  return (
    <LoginPageWrapper>
      <img src={logo} alt="FITple Logo" />
      <MainText>F I T p l e</MainText>
      <FormWrapper>
        <InputBox type="text" id="login-id" placeholder="ID" />
        <InputBox type="password" id="login-pw" placeholder="PASSWORD" />
        <SubmitButton>로그인</SubmitButton>
      </FormWrapper>
      <OptionWrapper>
        <OptionButton>회원가입</OptionButton>
        <OptionButton>ID/PW 찾기</OptionButton>
      </OptionWrapper>
      <Test/>
    </LoginPageWrapper>
  );
}

export default LoginPage;
