import { BackgroundContainer, ComparePopUpContainer, ComparePopUpBackground, ComparePopUpInnerContainer, ComparePopUpInnerMainContainer, BackArrowBtn, ComparePopUpMainText, CloseBtn, FITpleLogo, CompareLoadingText, CompareLoadingSubText, CompareLoadingBar, CompareLoadingInnerBar,  } from "./CompareLoading.style"


function CompareLoading() {

  return (
    <>
      <BackgroundContainer>
        <ComparePopUpContainer>
          <ComparePopUpBackground>
            <ComparePopUpInnerContainer>
              <ComparePopUpInnerMainContainer>
                <BackArrowBtn src="../assets/_.svg" />
                <ComparePopUpMainText>사이즈 비교</ComparePopUpMainText>
                <CloseBtn src="../assets/X(Compare).svg" />
              </ComparePopUpInnerMainContainer>
              <FITpleLogo src="../assets/핏플 로고.svg" />
              <CompareLoadingText>내 옷과 사이즈 비교 중이에요!</CompareLoadingText>
              <CompareLoadingSubText>조금만 기다려주세요.</CompareLoadingSubText>
              <CompareLoadingBar>
                <CompareLoadingInnerBar />
              </CompareLoadingBar>
            </ComparePopUpInnerContainer>
          </ComparePopUpBackground>
        </ComparePopUpContainer>
      </BackgroundContainer>

    </>
  )
}

export default CompareLoading