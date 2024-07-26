import profile from '../../assets/profile.svg'
import { useState } from 'react'
import {
    UserInfoPageWrapper,
    MainText,
    SubText,
    Container,
    InfoContainer,
    InfoWrapper,
    TextWrapper,
    InputWrapper,
    InputBox,
    GenderWrapper,
    GenderButton,
    FitWrapper,
    FitButton,
    StyleWrapper,
    StyleButton,
    BodyInfoContainer,
    BodyInputWrapper,
    BodyInputBox,
    UnitText,
    SubmitButton
} from './UserInfoPage.style';

function UserInfoPage() {
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedFits, setSelectedFits] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);

    const handleStyleClick = (style) => {
        setSelectedStyles((prevSelectedStyles) =>
            prevSelectedStyles.includes(style)
                ? prevSelectedStyles.filter((selectedStyle) => selectedStyle !== style)
                : [...prevSelectedStyles, style]
        );
    };

    const handleFitClick = (fit) => {
        setSelectedFits((prevSelectedFits) =>
            prevSelectedFits.includes(fit)
                ? prevSelectedFits.filter((selectedFit) => selectedFit !== fit)
                : [...prevSelectedFits, fit]
        );
    };

    const fits = ['슬림', '레귤러', '세미오버', '오버'];
    const styles = [
        '심플베이직', '캐주얼', '시크', '러블리', '빈티지', '보헤미안',
        '모던', '펑크', '오피스룩', '로맨틱'
    ];

    return(
        <UserInfoPageWrapper>
            <MainText>회원정보</MainText>

            <InfoContainer>
                <MainText>기본 정보</MainText>
                <InfoWrapper>
                    <img width="120px" src={profile} alt="proflie-icon" />
                    <TextWrapper>
                        <SubText>이름</SubText>
                        <SubText>성별</SubText>
                        <SubText>선호 핏</SubText>
                        <SubText>스타일</SubText>
                        <Container></Container>
                        <SubText>한줄소개</SubText>
                    </TextWrapper>
                    <InputWrapper>
                        <InputBox type="text" id="login-id" placeholder="이름을 입력해주세요"/>
                        <GenderWrapper>
                            <GenderButton isSelected={selectedGender === 'male'} onClick={() => setSelectedGender('male')}>남성</GenderButton>
                            <GenderButton isSelected={selectedGender === 'female'} onClick={() => setSelectedGender('female')}>여성</GenderButton>
                        </GenderWrapper>
                        <FitWrapper>
                            {fits.map((fit) => (
                                <FitButton key={fit} isSelected={selectedFits.includes(fit)} onClick={() => handleFitClick(fit)}>{fit}</FitButton>
                            ))}
                        </FitWrapper>
                        <StyleWrapper>
                            {styles.map((style) => (
                                <StyleButton
                                    key={style}
                                    isSelected={selectedStyles.includes(style)}
                                    onClick={() => handleStyleClick(style)}
                                >
                                    {style}
                                </StyleButton>
                            ))}
                        </StyleWrapper>
                        <InputBox type="text" id="login-id" placeholder="한 줄 소개를 입력해주세요"/>
                    </InputWrapper>
                </InfoWrapper>
            </InfoContainer>

            <InfoContainer>
                <MainText>체형정보</MainText>
                <BodyInfoContainer>
                    <TextWrapper>
                        <SubText>키</SubText>
                        <SubText>몸무게</SubText>
                        <SubText>어깨너비</SubText>
                        <SubText>가슴둘레</SubText>
                        <SubText>팔길이</SubText>
                        <SubText>허리둘레</SubText>
                        <SubText>허벅지둘레</SubText>
                        <SubText>엉덩이둘레</SubText>
                    </TextWrapper>
                    <InputWrapper>
                        <BodyInputWrapper>
                            <BodyInputBox placeholder="" /><UnitText>cm</UnitText>
                        </BodyInputWrapper>
                        <BodyInputWrapper>
                            <BodyInputBox placeholder="" /><UnitText>kg</UnitText>
                        </BodyInputWrapper>
                        <BodyInputWrapper>
                            <BodyInputBox placeholder="" /><UnitText>cm</UnitText>
                        </BodyInputWrapper>
                        <BodyInputWrapper>
                            <BodyInputBox placeholder="" /><UnitText>cm</UnitText>
                        </BodyInputWrapper>
                        <BodyInputWrapper>
                            <BodyInputBox placeholder="" /><UnitText>cm</UnitText>
                        </BodyInputWrapper>
                        <BodyInputWrapper>
                            <BodyInputBox placeholder="" /><UnitText>cm</UnitText>
                        </BodyInputWrapper>
                        <BodyInputWrapper>
                            <BodyInputBox placeholder="" /><UnitText>cm</UnitText>
                        </BodyInputWrapper>
                        <BodyInputWrapper>
                            <BodyInputBox placeholder="" /><UnitText>cm</UnitText>
                        </BodyInputWrapper>
                    </InputWrapper>
                </BodyInfoContainer>
            </InfoContainer>

            <SubmitButton>저장</SubmitButton>

        </UserInfoPageWrapper>
    );
}

export default UserInfoPage