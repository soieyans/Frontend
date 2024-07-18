import logo from '../../assets/FITple-logo.svg'
import styled from 'styled-components'
import { useState } from 'react'

function SignupPage() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleButtonClick = () => {
        if (isChecked) {
        alert('이용약관에 동의하셨습니다.');
        } else {
        alert('이용약관에 동의해주세요.');
        }
    };

    const termsOfService = `
        제 1 조 (목적)
        이 약관은 회사가 제공하는 서비스의 이용 조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.

        제 2 조 (정의)
        이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
        1. "회사"라 함은 서비스를 제공하는 주체를 말합니다.
        2. "이용자"라 함은 회사의 서비스를 이용하는 자를 말합니다.

        제 3 조 (이용 계약의 성립)
        이용 계약은 이용자의 약관 동의와 이용 신청에 대하여 회사가 승낙함으로써 성립합니다.

        제 4 조 (서비스 이용)
        1. 서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴를 원칙으로 합니다.
        2. 회사는 필요한 경우 서비스의 내용을 변경할 수 있으며, 이 경우 변경 내용을 이용자에게 공지합니다.

        제 5 조 (이용 제한)
        회사는 이용자가 다음 각 호의 사유에 해당하는 경우, 서비스 이용을 제한할 수 있습니다.
        1. 이용 신청 시 허위 내용을 등록한 경우
        2. 타인의 서비스 이용을 방해하거나 타인의 정보를 도용한 경우

        제 6 조 (계약 해지 및 이용 제한)
        1. 이용자가 서비스 이용 계약을 해지하고자 할 때에는 언제든지 회사에 해지 신청을 할 수 있으며, 회사는 즉시 이용 계약 해지를 처리합니다.
        2. 회사는 이용자가 제 5 조에 규정된 행위를 한 경우, 사전 통지 없이 이용 계약을 해지하거나 또는 기간을 정하여 서비스 이용을 제한할 수 있습니다.

        제 7 조 (면책 조항)
        1. 회사는 천재지변, 전쟁, 기간 통신 사업자의 서비스 중지 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.
        2. 회사는 이용자의 귀책 사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.

        제 8 조 (관할 법원)
        서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우, 회사의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.
    `;

    return(
        <SignupPageWrapper>
            <img width="6%" src={logo} alt="FITple Logo"/>
            <FormWrapper>
                <InputBox type="text" id="login-id" placeholder="아이디"/>
                <ErrorText isError={false}>사용 가능한 아이디입니다.</ErrorText>
                <InputBox type="password" id="login-pw" placeholder="비밀번호"/>
                <ErrorText isError={true}>8자리 이상의 비밀번호를 입력해주세요.</ErrorText>
                <InputBox type="password" id="login-pw2" placeholder="비밀번호 확인"/>
                <ErrorText isError={true}>비밀번호가 일치하지 않습니다.</ErrorText>
                <InputBox type="password" id="login-email" placeholder="이메일"/>
                <ErrorText isError={false}>사용 가능한 이메일 주소입니다.</ErrorText>

                <MainText>이용약관 동의</MainText>
                <ScrollBox>
                    {termsOfService.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                    ))}
                </ScrollBox>
                <CheckboxContainer>
                    <Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                    <label>동의함</label>
                </CheckboxContainer>
                
                <MainText>개인정보 수집 및 이용 동의</MainText>
                <ScrollBox>
                    {termsOfService.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                    ))}
                </ScrollBox>
                <CheckboxContainer>
                    <Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                    <label>동의함</label>
                </CheckboxContainer>

                <MainText>이메일 마케팅 정보 수신 동의</MainText>
                <CheckboxContainer>
                    <Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                    <label>동의함</label>
                    <Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
                    <label>동의하지 않음</label>
                </CheckboxContainer>

                <SubmitButton>회원가입</SubmitButton>
            </FormWrapper>
        </SignupPageWrapper>
    );
}

const SignupPageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 30px 0;
`;

const FormWrapper = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0 50px 0;
`;

const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
        placeholder: props.placeholder // 힌트 텍스트를 props로 받음
    }))`
    width: 60%;
    height: 30px;
    margin-top: 25px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 5px 15px;
    font-size: 17px;
    outline-color: #0075FF;
`;

const ErrorText = styled.p`
    color: ${props => (props.isError ? 'red' : '#0075FF')};
    width: 62%;
    margin: 5px 0 0 0;
    padding: 0;
    font-size: 17px;
`;

const MainText = styled.p`
    width: 62%;
    font-size: 20px;
    margin: 25px 0 15px 0;
    padding: 0;
    font-weight: bold;
`;

const ScrollBox = styled.div`
    width: 59%;
    height: 200px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow-y: scroll;
    background-color: #fcfcfc;
`;

const CheckboxContainer = styled.div`
    width: 62%;
    margin: 12px 0;
`;

const Checkbox = styled.input`
    margin-right: 10px;
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

export default SignupPage