import { BackgroundContainer, CompareSearchPopUpContainer, CompareTitleContainer, BackArrowBtn, CompareTitle, CloseBtn, CompareResultContainer, FITpleLogo } from "./CompareResult.style"


function CompareResult() {

    return (
      <>
        <BackgroundContainer>
            <CompareSearchPopUpContainer>
                <CompareTitleContainer>
                    <BackArrowBtn src="../../assets/BackArrow.svg" />
                    <CompareTitle>사이즈 비교</CompareTitle>
                    <CloseBtn src="../assets/X.svg" />
                </CompareTitleContainer>
                <CompareResultContainer>
                    <FITpleLogo src="../assets/핏플 로고.svg" />
                </CompareResultContainer>
            </CompareSearchPopUpContainer>
        </BackgroundContainer>
      </>
    )
  }
  
  export default CompareResult