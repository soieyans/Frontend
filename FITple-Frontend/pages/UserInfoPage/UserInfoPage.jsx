import styled from 'styled-components'
import profile from '../../assets/profile.svg'
import { useState } from 'react'

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

const UserInfoPageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 30px 0;
    padding-bottom: 40px;
`;

const MainText = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const SubText = styled.p`
    font-size: 17px;
    margin-bottom: 30px;
`;

const Container = styled.div`
    height: 135px;
`;

const InfoContainer = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 10px 40px;
`;

const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin-top: 10px;
`;

const TextWrapper = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: end;
`;

const InputWrapper = styled.div`
    width: 78%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`;

const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
        placeholder: props.placeholder // 힌트 텍스트를 props로 받음
    }))`
    width: 80%;
    height: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 5px 15px;
    font-size: 17px;
    outline-color: #0075FF;
`;

const GenderWrapper = styled.div`
    width: 84%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const GenderButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid black')};
    border-radius: 10px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const FitWrapper = styled.div`
    width: 84%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const FitButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid black')};
    border-radius: 25px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const StyleWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: start;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`;

const StyleButton = styled.button`
    width: 160px;
    padding: 10px 20px;
    border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid black')};
    border-radius: 25px;
    background-color: ${({ isSelected }) => (isSelected ? '#0075FF' : 'white')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    cursor: pointer;
    margin: 5px;

    &:focus {
        outline: none;
    }
`;

const BodyInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-around;
`;

const BodyInputWrapper = styled.div`
    position: relative;
    width: 90%;
    margin-top: 10px;
    margin-bottom: 23px;
`;

const BodyInputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
        placeholder: props.placeholder // 힌트 텍스트를 props로 받음
    }))`
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 5px 40px 5px 15px;
    font-size: 17px;
    outline-color: #0075FF;
    text-align: right;
    box-sizing: border-box;
`;

// 단위 텍스트를 스타일링하는 컴포넌트
const UnitText = styled.span`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 17px;
    pointer-events: none;
`;

const SubmitButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: black;
    border-radius: 10px;
    font-size: 17px;
    color: white;
    margin-top: 25px;
`;

export default UserInfoPage