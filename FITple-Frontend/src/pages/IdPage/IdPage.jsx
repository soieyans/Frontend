import logo from "../../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import {
    IdPageWrapper,
    MainText,
    FormWrapper,
    TextWrapper,
    LabelText,
    InfoText,
    Button
} from "./IdPage.style";

function IdPage() {
    const navigate = useNavigate();

    const handleIdFindClick = () => {
        navigate('/findpw');
    }

    return (
        <IdPageWrapper>
            <img src={logo} width="50px" alt="FITple Logo" />
            <MainText>FITple</MainText>
            <FormWrapper>
                <TextWrapper $isLast={false}>
                    <LabelText>이름</LabelText>
                    <InfoText>핏플</InfoText>
                </TextWrapper>
                <TextWrapper $isLast={false}>
                    <LabelText>이메일</LabelText>
                    <InfoText>fitple@gmail.com</InfoText>
                </TextWrapper>
                <TextWrapper $isLast={true}>
                    <LabelText>아이디</LabelText>
                    <InfoText>fitple</InfoText>
                </TextWrapper>
                <Button $isActive={true}>로그인하기</Button>
                <Button $isActive={false} onClick={handleIdFindClick}>비밀번호 찾기</Button>
            </FormWrapper>
        </IdPageWrapper>
    );
}

export default IdPage;
