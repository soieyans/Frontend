import logo from "../../../assets/Logo.svg";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    UserInfoPageWrapper,
    SubmitButton
} from './UserInfoPage.style';
import BasicInfo from '../../components/UserInfoBasic/UserInfoBasic';
import BodyInfo from '../../components/UserInfoBody/UserInfoBody';

function UserInfoPage() {
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedFits, setSelectedFits] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);
    const navigate = useNavigate();

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

    const handleSubmit = () => {
        alert("회원가입이 완료되었습니다.");
        navigate('/login');
    };

    return (
        <UserInfoPageWrapper>
            <img width="50px" src={logo} alt="FITple Logo" />
            <BasicInfo
                selectedGender={selectedGender}
                setSelectedGender={setSelectedGender}
                selectedFits={selectedFits}
                setSelectedFits={setSelectedFits}
                selectedStyles={selectedStyles}
                setSelectedStyles={setSelectedStyles}
                handleFitClick={handleFitClick}
                handleStyleClick={handleStyleClick}
            />
            <BodyInfo />
            <SubmitButton onClick={handleSubmit}>저장</SubmitButton>
        </UserInfoPageWrapper>
    );
}

export default UserInfoPage;


// import logo from "../../../assets/Logo.svg";
// import uploadButton from "../../../assets/btn_image_upload.svg";
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import {
//     UserInfoPageWrapper,
//     MainText,
//     SubText,
//     InfoContainer,
//     InfoWrapper,
//     InputSet,
//     InputWrapper,
//     InputBox,
//     GenderWrapper,
//     GenderButton,
//     FitWrapper,
//     FitButton,
//     StyleWrapper,
//     StyleButton,
//     BodyInfoContainer,
//     BodyInputWrapper,
//     BodyInputBox,
//     UnitText,
//     SubmitButton
// } from './UserInfoPage.style';

// function UserInfoPage() {
//     const [selectedGender, setSelectedGender] = useState(null);
//     const [selectedFits, setSelectedFits] = useState([]);
//     const [selectedStyles, setSelectedStyles] = useState([]);
//     const navigate = useNavigate();

//     const handleStyleClick = (style) => {
//         setSelectedStyles((prevSelectedStyles) =>
//             prevSelectedStyles.includes(style)
//                 ? prevSelectedStyles.filter((selectedStyle) => selectedStyle !== style)
//                 : [...prevSelectedStyles, style]
//         );
//     };

//     const handleFitClick = (fit) => {
//         setSelectedFits((prevSelectedFits) =>
//             prevSelectedFits.includes(fit)
//                 ? prevSelectedFits.filter((selectedFit) => selectedFit !== fit)
//                 : [...prevSelectedFits, fit]
//         );
//     };

//     const fits = ['슬림', '레귤러', '세미오버', '오버'];
//     const styles = [
//         '심플베이직', '캐주얼', '시크', '러블리', '아메카지', '유니크', '유니섹스', '스트릿', '스포티'
//     ];

//     const handleSubmit = () => {
//         alert("회원가입이 완료되었습니다.");
//         navigate('/login');  // LoginPage로 이동
//     };

//     return (
//         <UserInfoPageWrapper>
//             <img width="50px" src={logo} alt="FITple Logo" />
//             <InfoContainer>
//                 <MainText>기본 정보</MainText>
//                 <img width="150px" src={uploadButton} alt="uploadButton" />
//                 <InfoWrapper>
//                     <InputWrapper>
//                         <SubText>닉네임</SubText>
//                         <InputBox type="text" id="userinfo-nickname"/>
//                         <SubText>성별</SubText>
//                         <GenderWrapper>
//                             <GenderButton isSelected={selectedGender === 'male'} onClick={() => setSelectedGender('male')}>남성</GenderButton>
//                             <GenderButton isSelected={selectedGender === 'female'} onClick={() => setSelectedGender('female')}>여성</GenderButton>
//                         </GenderWrapper>
//                         <SubText>선호 핏</SubText>
//                         <FitWrapper>
//                             {fits.map((fit) => (
//                                 <FitButton key={fit} isSelected={selectedFits.includes(fit)} onClick={() => handleFitClick(fit)}>{fit}</FitButton>
//                             ))}
//                         </FitWrapper>
//                         <SubText>선호 스타일</SubText>
//                         <StyleWrapper>
//                             {styles.map((style) => (
//                                 <StyleButton
//                                     key={style}
//                                     isSelected={selectedStyles.includes(style)}
//                                     onClick={() => handleStyleClick(style)}
//                                 >
//                                     {style}
//                                 </StyleButton>
//                             ))}
//                         </StyleWrapper>
//                         <SubText>한 줄 소개</SubText>
//                         <InputBox type="text" id="userinfo-infotext"/>
//                     </InputWrapper>
//                 </InfoWrapper>
//             </InfoContainer>

//             <InfoContainer>
//                 <MainText>체형 정보</MainText>
//                 <BodyInfoContainer>
//                     <InputSet>
//                         <SubText>키</SubText>
//                         <BodyInputWrapper>
//                             <BodyInputBox placeholder="" />
//                             <UnitText>cm</UnitText>
//                         </BodyInputWrapper>
//                     </InputSet>
//                     <InputSet>
//                         <SubText>몸무게</SubText>
//                         <BodyInputWrapper>
//                             <BodyInputBox placeholder="" />
//                             <UnitText>kg</UnitText>
//                         </BodyInputWrapper>
//                     </InputSet>
//                     <InputSet>
//                         <SubText>어깨 너비</SubText>
//                         <BodyInputWrapper>
//                             <BodyInputBox placeholder="" />
//                             <UnitText>cm</UnitText>
//                         </BodyInputWrapper>
//                     </InputSet>
//                     <InputSet>
//                         <SubText>가슴둘레</SubText>
//                         <BodyInputWrapper>
//                             <BodyInputBox placeholder="" />
//                             <UnitText>cm</UnitText>
//                         </BodyInputWrapper>
//                     </InputSet>
//                     <InputSet>
//                         <SubText>팔 길이</SubText>
//                         <BodyInputWrapper>
//                             <BodyInputBox placeholder="" />
//                             <UnitText>cm</UnitText>
//                         </BodyInputWrapper>
//                     </InputSet>
//                     <InputSet>
//                         <SubText>허리 둘레</SubText>
//                         <BodyInputWrapper>
//                             <BodyInputBox placeholder="" />
//                             <UnitText>cm</UnitText>
//                         </BodyInputWrapper>
//                     </InputSet>
//                     <InputSet>
//                         <SubText>허벅지 둘레</SubText>
//                         <BodyInputWrapper>
//                             <BodyInputBox placeholder="" />
//                             <UnitText>cm</UnitText>
//                         </BodyInputWrapper>
//                     </InputSet>
//                     <InputSet>
//                         <SubText>엉덩이 둘레</SubText>
//                         <BodyInputWrapper>
//                             <BodyInputBox placeholder="" />
//                             <UnitText>cm</UnitText>
//                         </BodyInputWrapper>
//                     </InputSet>
//                 </BodyInfoContainer>
//             </InfoContainer>

//             <SubmitButton onClick={handleSubmit}>저장</SubmitButton>
//         </UserInfoPageWrapper>
//     );
// }

// export default UserInfoPage;
