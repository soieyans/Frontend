import { BackgroundContainer, ComparePopUpBackground, ComparePopUpContainer, ComparePopUpInnerContainer, ComparePopUpInnerMainContainer, ComparePopUpMainText, BackArrowBtn, CloseBtn, CompareSearchContainer, CompareSearchBorderContainer, CompareSearchEditBtn, CompareSearchCard, CompareSizeText, CompareSizeContents, CompareSizeContainer, CompareSearchCardScroll, CompareStartBtn } from "./CompareSearchPopUp.style"

function CompareSearchPopUp() {

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
                        <CompareSearchContainer>
                            <CompareSearchBorderContainer>
                                <CompareSearchCardScroll>
                                <CompareSearchCard>
                                        <CompareSizeContainer><CompareSizeText>사이즈</CompareSizeText><CompareSizeContents>S</CompareSizeContents></CompareSizeContainer>
                                        <CompareSizeContainer><CompareSizeText>총장</CompareSizeText><CompareSizeContents>48.5</CompareSizeContents></CompareSizeContainer>
                                        <CompareSizeContainer><CompareSizeText>어깨단면</CompareSizeText><CompareSizeContents>-</CompareSizeContents></CompareSizeContainer>
                                        <CompareSizeContainer><CompareSizeText>가슴단면</CompareSizeText><CompareSizeContents>39.5</CompareSizeContents></CompareSizeContainer>
                                        <CompareSizeContainer><CompareSizeText>암홀단면</CompareSizeText><CompareSizeContents>10</CompareSizeContents></CompareSizeContainer>
                                        <CompareSizeContainer><CompareSizeText>소매단면</CompareSizeText><CompareSizeContents>10</CompareSizeContents></CompareSizeContainer>
                                        <CompareSizeContainer><CompareSizeText>소매길이</CompareSizeText><CompareSizeContents>10</CompareSizeContents></CompareSizeContainer>
                                        <CompareSizeContainer><CompareSizeText>밑단단면</CompareSizeText><CompareSizeContents>10</CompareSizeContents></CompareSizeContainer>
                                    </CompareSearchCard>
                                </CompareSearchCardScroll>
                                <CompareSearchEditBtn src="../assets/수정 버튼.svg" />
                            </CompareSearchBorderContainer>
                        </CompareSearchContainer>
                        <CompareStartBtn>사이즈 비교하기</CompareStartBtn>
                </ComparePopUpInnerContainer>
                </ComparePopUpBackground>
            </ComparePopUpContainer>
        </BackgroundContainer>
      </>
    )
  }
  
  export default CompareSearchPopUp
  