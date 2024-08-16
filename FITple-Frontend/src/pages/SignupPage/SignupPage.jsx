import logo from "../../../assets/Logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignupPageWrapper,
  FormWrapper,
  InputText,
  InputBox,
  ErrorText,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  SubmitButton,
} from "./SignupPage.style";

function SignupPage() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [loginPwConfirm, setLoginPwConfirm] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("영어, 소문자, 숫자를 조합하여 입력해주세요.");
  const [pwConfirmError, setPwConfirmError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleIdChange = (e) => {
    const id = e.target.value;
    setLoginId(id);

    if (id === "umc") {
      setIdError("중복된 아이디입니다.");
    } else if (id) {
      setIdError("사용할 수 있는 아이디입니다.");
    } else {
      setIdError(" ");
    }
  };

  const handlePwChange = (e) => {
    const pw = e.target.value;
    setLoginPw(pw);

    const pwRegex = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    if (!pwRegex.test(pw)) {
      setPwError("영어 소문자, 숫자를 조합하여 8글자 이상 입력해주세요.");
    } else {
      setPwError(" ");
    }
  };

  const handlePwConfirmChange = (e) => {
    const pwConfirm = e.target.value;
    setLoginPwConfirm(pwConfirm);

    if (pwConfirm !== loginPw) {
      setPwConfirmError("입력한 비밀번호와 일치하지 않습니다.");
    } else {
      setPwConfirmError(" ");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setLoginEmail(email);

    if (email === "umc@gmail.com") {
      setEmailError("이미 가입된 이메일입니다.");
    } else if (email) {
      setEmailError("사용할 수 있는 이메일입니다.");
    } else {
      setEmailError(" ");
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleButtonClick = () => {
    navigate('/userinfo');
  };

  return (
    <SignupPageWrapper>
      <img width="50px" src={logo} alt="FITple Logo" />
      <FormWrapper>
        <InputText>아이디</InputText>
        <InputBox 
          type="text" 
          id="login-id" 
          value={loginId}
          onChange={handleIdChange}
          placeholder="" 
        />
        <ErrorText isError={idError.includes("중복된")}>{idError}</ErrorText>

        <InputText>비밀번호</InputText>
        <InputBox 
          type="password" 
          id="login-pw" 
          value={loginPw}
          onChange={handlePwChange}
          placeholder="" 
        />
        <ErrorText isError={!!pwError}>{pwError}</ErrorText>

        <InputText>비밀번호 확인</InputText>
        <InputBox 
          type="password" 
          id="login-pw2" 
          value={loginPwConfirm}
          onChange={handlePwConfirmChange}
          placeholder="" 
        />
        <ErrorText isError={!!pwConfirmError}>{pwConfirmError}</ErrorText>

        <InputText>이메일</InputText>
        <InputBox 
          type="email" 
          id="login-email" 
          value={loginEmail}
          onChange={handleEmailChange}
          placeholder="" 
        />
        <ErrorText isError={emailError.includes("가입된")}>{emailError}</ErrorText>

        <InputText>이메일 마케팅 정보 수신 동의</InputText>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel>동의함</CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={!isChecked}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel>동의하지 않음</CheckboxLabel>
        </CheckboxContainer>

        <SubmitButton onClick={handleButtonClick}>회원정보 작성하기</SubmitButton>
      </FormWrapper>
    </SignupPageWrapper>
  );
}

export default SignupPage;
