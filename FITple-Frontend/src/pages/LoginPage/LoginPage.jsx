import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import { login } from "../../../data/LoginApi";
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
    setIsButtonActive(!!(loginId && loginPw));
  }, [loginId, loginPw]);

  const handleLogin = async () => {
    if (!isButtonActive) return;

    try {
      const response = await login(loginId, loginPw);

      switch (response.status) {
        case 200:
          alert("로그인 성공!");
          navigate("/cloth");
          break;
        case 400:
          alert("잘못된 요청! 존재하지 않는 회원입니다.");
          break;
        case 401:
          alert("아이디가 존재하지 않습니다.");
          break;
        case 402:
          alert("정보를 다시 입력해주세요.");
          break;
        case 403:
          alert("비밀번호가 일치하지 않습니다.");
          break;
        case 500:
          alert("진행 중 오류가 생겼습니다.");
          break;
        default:
          alert("알 수 없는 오류가 발생했습니다.");
          break;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignupClick = () => {
    navigate("/tos");
  };

  const handleIdFindClick = () => {
    navigate("/findid");
  };

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
        <SubmitButton
          isActive={isButtonActive}
          onClick={handleLogin}
          disabled={!isButtonActive}
        >
          로그인
        </SubmitButton>
      </FormWrapper>
      <OptionWrapper>
        <OptionButton onClick={handleSignupClick}>회원가입</OptionButton>
        <OptionButton onClick={handleIdFindClick}>ID/PW 찾기</OptionButton>
      </OptionWrapper>
    </LoginPageWrapper>
  );
}

export default LoginPage;
