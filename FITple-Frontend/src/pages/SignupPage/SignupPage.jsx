import logo from "../../../assets/Logo.svg";
import { useState } from "react";
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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      alert("이용약관에 동의하셨습니다.");
    } else {
      alert("이용약관에 동의해주세요.");
    }
  };

  return (
    <SignupPageWrapper>
      <img width="50px" src={logo} alt="FITple Logo" />
      <FormWrapper>
        <InputText>아이디</InputText>
        <InputBox type="text" id="login-id" placeholder="" />
        <ErrorText isError={false}></ErrorText>

        <InputText>비밀번호</InputText>
        <InputBox type="password" id="login-pw" placeholder="" />
        <ErrorText isError={true}>영어, 소문자, 숫자를 조합하여 입력해주세요.</ErrorText>

        <InputText>비밀번호 확인</InputText>
        <InputBox type="password" id="login-pw2" placeholder="" />
        <ErrorText isError={true}> </ErrorText>

        <InputText>이메일</InputText>
        <InputBox type="password" id="login-email" placeholder="" />
        <ErrorText isError={false}> </ErrorText>

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

        <SubmitButton>회원가입</SubmitButton>
      </FormWrapper>
    </SignupPageWrapper>
  );
}

export default SignupPage;
