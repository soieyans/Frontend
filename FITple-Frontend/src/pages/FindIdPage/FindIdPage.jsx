import React, { useState, useEffect } from 'react';
import logo from "../../../assets/Logo.svg";
import {
    FindIdPageWrapper,
    MainText,
    FormWrapper,
    InputBox,
    SubmitButton,
    OptionWrapper,
    OptionButton,
} from "./FindIdPage.style";

function FindIdPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        if (name && email) {
        setIsButtonActive(true);
        } else {
        setIsButtonActive(false);
        }
    }, [name, email]);

    return (
        <FindIdPageWrapper>
        <img src={logo} width="50px" alt="FITple Logo" />
        <MainText>FITple</MainText>
        <FormWrapper>
            <InputBox 
            type="text" 
            id="findid-name" 
            placeholder="이름을 입력해주세요" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <InputBox 
            type="password" 
            id="findid-email" 
            placeholder="이메일을 입력해주세요" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <SubmitButton isActive={isButtonActive}>ID 찾기</SubmitButton>
        </FormWrapper>
        <OptionWrapper>
            <OptionButton>로그인 화면으로 돌아가기</OptionButton>
            <OptionButton>비밀번호 찾기</OptionButton>
        </OptionWrapper>
        </FindIdPageWrapper>
    );
}

export default FindIdPage;
