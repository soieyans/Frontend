import React, { useState, useRef } from 'react';
import uploadButton from "../../../assets/btn_image_upload.svg";
import {
    MainText, SubText, InfoContainer, InfoWrapper, InputWrapper, InputBox, GenderWrapper, 
    GenderButton, FitWrapper, FitButton, StyleWrapper, StyleButton, ProfileImageWrapper, ProfileImage
} from '../../pages/UserInfoPage/UserInfoPage.style';

function UserInfoBasic({
    selectedGender, setSelectedGender, selectedFits, setSelectedFits,
    selectedStyles, setSelectedStyles, handleFitClick, handleStyleClick,
    handleNicknameChange, fileInputRef, profileImage, setProfileImage, errorMessage
}) {
    const fits = ['슬림', '레귤러', '세미오버', '오버'];
    const styles = ['심플베이직', '캐주얼', '시크', '러블리', '아메카지', '유니크', '유니섹스', '스트릿', '스포티'];

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <InfoContainer>
            <MainText>기본 정보</MainText>
            <ProfileImageWrapper onClick={() => fileInputRef.current.click()}>
                {profileImage ? (
                    <ProfileImage src={profileImage} alt="Profile" />
                ) : (
                    <img width="150px" src={uploadButton} alt="uploadButton" />
                )}
            </ProfileImageWrapper>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageUpload}
            />
            <InfoWrapper>
                <InputWrapper>
                    <SubText>닉네임</SubText>
                    <InputBox type="text" id="userinfo-nickname" onChange={handleNicknameChange} />
                    {errorMessage && <SubText style={{ color: 'red' }}>{errorMessage}</SubText>}
                    <SubText>성별</SubText>
                    <GenderWrapper>
                      <GenderButton isSelected={selectedGender === 0} onClick={() => setSelectedGender(0)}>남성</GenderButton>
                      <GenderButton isSelected={selectedGender === 1} onClick={() => setSelectedGender(1)}>여성</GenderButton>
                    </GenderWrapper>
                    <SubText>선호 핏</SubText>
                    <FitWrapper>
                        {fits.map((fit) => (
                            <FitButton key={fit} isSelected={selectedFits.includes(fit)} onClick={() => handleFitClick(fit)}>{fit}</FitButton>
                        ))}
                    </FitWrapper>
                    <SubText>선호 스타일</SubText>
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
                    <SubText>한 줄 소개</SubText>
                    <InputBox type="text" id="userinfo-infotext" />
                </InputWrapper>
            </InfoWrapper>
        </InfoContainer>
    );
}

export default UserInfoBasic;
