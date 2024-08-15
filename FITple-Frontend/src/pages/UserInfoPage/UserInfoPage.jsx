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
        navigate('/login');  // LoginPage로 이동
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
