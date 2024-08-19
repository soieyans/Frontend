import React from "react";
import {
  MainText,
  InfoContainer,
  BodyInfoContainer,
  InputSet,
  SubText,
  BodyInputWrapper,
  BodyInputBox,
  UnitText,
  MainBox,
  EditBTN,
} from "../../pages/UserInfoPage/UserInfoPage.style";

function UserBodyInfo({ ...props }) {
  return (
    <InfoContainer {...props}>
      {/* 컴포넌트 작업을 위해서 div하나 추가 */}
      <MainBox {...props}>
        <MainText>체형 정보</MainText>
        <EditBTN {...props}>수정</EditBTN>
      </MainBox>

      <BodyInfoContainer>
        <InputSet>
          <SubText>키</SubText>
          <BodyInputWrapper>
            <BodyInputBox placeholder="" />
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>몸무게</SubText>
          <BodyInputWrapper>
            <BodyInputBox placeholder="" />
            <UnitText>kg</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>어깨 너비</SubText>
          <BodyInputWrapper>
            <BodyInputBox placeholder="" />
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>가슴둘레</SubText>
          <BodyInputWrapper>
            <BodyInputBox placeholder="" />
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>팔 길이</SubText>
          <BodyInputWrapper>
            <BodyInputBox placeholder="" />
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>허리 둘레</SubText>
          <BodyInputWrapper>
            <BodyInputBox placeholder="" />
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>허벅지 둘레</SubText>
          <BodyInputWrapper>
            <BodyInputBox placeholder="" />
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
        <InputSet>
          <SubText>엉덩이 둘레</SubText>
          <BodyInputWrapper>
            <BodyInputBox placeholder="" />
            <UnitText>cm</UnitText>
          </BodyInputWrapper>
        </InputSet>
      </BodyInfoContainer>
    </InfoContainer>
  );
}

export default UserBodyInfo;
