import { BackgroundContainer, CompareSearchPopUpContainer, CompareTitleContainer, BackArrowBtn, CompareTitle, CloseBtn, FITpleLogo, CompareLodingContainer, CompareLoadingText, CompareLoadingSubText, CompareLoadingBar } from "./CompareLoading.style"


function CompareLoading() {

    return (
      <>
        <BackgroundContainer>
            <CompareSearchPopUpContainer>
                <CompareTitleContainer>
                    <BackArrowBtn src="../../assets/BackArrow.svg" />
                    <CompareTitle>사이즈 비교</CompareTitle>
                    <CloseBtn src="../assets/X.svg" />
                </CompareTitleContainer>
                <CompareLodingContainer>
                    <FITpleLogo src="../assets/핏플 로고.svg" />
                    <CompareLoadingText>내 옷과 사이즈 비교 중이에요!</CompareLoadingText>
                    <CompareLoadingSubText>조금만 기다려주세요.</CompareLoadingSubText>
                    <CompareLoadingBar src="../assets/Rectangle 65.svg" />
                </CompareLodingContainer>
                
            </CompareSearchPopUpContainer>
        </BackgroundContainer>
      </>
    )
  }
  
  export default CompareLoading