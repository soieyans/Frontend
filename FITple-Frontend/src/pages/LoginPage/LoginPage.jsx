import React, { useState, useEffect } from 'react';
import logo from "../../../assets/Logo.svg";
import {
  LoginPageWrapper,
  MainText,
  FormWrapper,
  InputBox,
  SubmitButton,
  OptionWrapper,
  OptionButton,
} from "./LoginPage.style";

function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    if (loginId && loginPw) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [loginId, loginPw]);

  return (
    <LoginPageWrapper>
      <img src={logo} width="50px" alt="FITple Logo" />
      <MainText>FITple</MainText>
      <FormWrapper>
        <InputBox 
          type="text" 
          id="login-id" 
          placeholder="ID" 
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <InputBox 
          type="password" 
          id="login-pw" 
          placeholder="PASSWORD" 
          value={loginPw}
          onChange={(e) => setLoginPw(e.target.value)}
        />
        <SubmitButton isActive={isButtonActive}>로그인</SubmitButton>
      </FormWrapper>
      <OptionWrapper>
        <OptionButton>회원가입</OptionButton>
        <OptionButton>ID/PW 찾기</OptionButton>
      </OptionWrapper>
    </LoginPageWrapper>
  );
}

export default LoginPage;
