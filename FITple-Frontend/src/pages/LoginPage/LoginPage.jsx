import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (loginId && loginPw) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [loginId, loginPw]);

  // TODO : 데모데이 촬영용으로 임시 개발. 추후 삭제
  const handleLoginClick = () => {
    alert('가입되지 않은 회원입니다.');
  };

  const handleSignupClick = () => { // 회원가입 버튼 클릭 시 TosPage로 이동
    navigate('/tos');
  };

  const handleIdFindClick = () => {
    navigate('/findid');
  }

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
        {/* // TODO : 데모데이 촬영용으로 임시 개발. 추후 삭제 */}
        <SubmitButton isActive={isButtonActive} onClick={handleLoginClick}>로그인</SubmitButton>
        {/* <SubmitButton isActive={isButtonActive}>로그인</SubmitButton> */}
      </FormWrapper>
      <OptionWrapper>
        <OptionButton onClick={handleSignupClick}>회원가입</OptionButton>
        <OptionButton onClick={handleIdFindClick}>ID/PW 찾기</OptionButton>
      </OptionWrapper>
    </LoginPageWrapper>
  );
}

export default LoginPage;
