import logo from "../../../assets/Logo.svg";
import {
    PwPageWrapper,
    MainText,
    FormWrapper,
    TextWrapper,
    LabelText,
    InfoText,
    Button
} from "./PwPage.style";

function PwPage() {

    return (
        <PwPageWrapper>
            <img src={logo} width="50px" alt="FITple Logo" />
            <MainText>FITple</MainText>
            <FormWrapper>
                <TextWrapper $isLast={false}>
                    <LabelText>이름</LabelText>
                    <InfoText>김핏플</InfoText>
                </TextWrapper>
                <TextWrapper $isLast={false}>
                    <LabelText>이메일</LabelText>
                    <InfoText>fitple@gmail.com</InfoText>
                </TextWrapper>
                <TextWrapper $isLast={true}>
                    <LabelText>아이디</LabelText>
                    <InfoText>fitpleZ</InfoText>
                </TextWrapper>
                <Button $isActive={true}>비밀번호 재설정</Button>
            </FormWrapper>
        </PwPageWrapper>
    );
}

export default PwPage;
