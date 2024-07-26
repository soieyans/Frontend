import { BackgroundContainer, CompareSearchPopUpContainer, CompareTitleContainer, BackArrowBtn, CompareTitle, CloseBtn, CompareResultContainer, FITpleLogo, CompareResultSpeechBubble, CompareResultTable } from "./CompareResult.style"


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
                    <CompareResultSpeechBubble src="../assets/말풍선.svg" />
                    <CompareResultTable src="../assets/image 5.svg" />
                </CompareResultContainer>

            </CompareSearchPopUpContainer>
        </BackgroundContainer>
      </>
    )
  }
  
  export default CompareResult