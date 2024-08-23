import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    useEffect(() => {
        if (pw && pw2 && pw === pw2) {
            setIsButtonActive(true);
        } else {
            setIsButtonActive(false);
        }
    }, [pw, pw2]);

    const handleSubmit = () => {
        if (isButtonActive) {
            alert("비밀번호 변경이 완료됐습니다! 로그인 페이지로 이동합니다.");
            navigate('/login'); 
        }
    };

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
                <SubmitButton 
                    isActive={isButtonActive}
                    onClick={handleSubmit}  // 저장하기 버튼 클릭 시 이벤트 연결
                >
                    저장하기
                </SubmitButton>
            </FormWrapper>
        </RePwPageWrapper>
    );
}

export default RePwPage;
