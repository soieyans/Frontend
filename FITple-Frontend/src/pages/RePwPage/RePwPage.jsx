import React, { useState, useEffect } from 'react';
import logo from "../../../assets/Logo.svg";
import {
    RePwPageWrapper,
    MainText,
    FormWrapper,
    InputBox,
    SubmitButton,
} from "./RePwPage.style";

function RePwPage() {
    const [pw, setPw] = useState("");
    const [pw2, setPw2] = useState("");
    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        if (pw && pw2 && pw === pw2) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [pw, pw2]);

    return (
        <RePwPageWrapper>
            <img src={logo} width="50px" alt="FITple Logo" />
            <MainText>FITple</MainText>
            <FormWrapper>
                <InputBox 
                    type="password" 
                    id="repw-pw" 
                    placeholder="새 비밀번호를 입력해주세요" 
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <InputBox 
                    type="password" 
                    id="repw-pw2" 
                    placeholder="새 비밀번호를 한 번 더 입력해주세요" 
                    value={pw2}
                    onChange={(e) => setPw2(e.target.value)}
                />
                <SubmitButton isActive={isButtonActive}>저장하기</SubmitButton>
            </FormWrapper>
        </RePwPageWrapper>
    );
}

export default RePwPage;
