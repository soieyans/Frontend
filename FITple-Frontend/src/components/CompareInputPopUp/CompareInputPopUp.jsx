import { AddInputCardBtn, BackArrowBtn, BackgroundContainer, CloseBtn, CompareInput, CompareInputAndText, CompareInputAndTextContainer, CompareInputCard, CompareInputCardConfirmBtn, CompareInputCardDelBtn, CompareInputContainer, CompareInputText, ComparePopUpBackground, ComparePopUpContainer, ComparePopUpInnerContainer, ComparePopUpInnerMainContainer, ComparePopUpMainText, CompareSubText } from "./CompareInputPopUp.style"


function CompareInputPopUp() {

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
                        <CompareSubText>비교할 옷의 사이즈를 입력해주세요.</CompareSubText>
                        <CompareInputContainer>
                            <CompareInputCard>
                                <CompareInputAndTextContainer>
                                    <CompareInputAndText>
                                        <CompareInputText>사이즈</CompareInputText>
                                        <CompareInput/>
                                    </CompareInputAndText>
                                    <CompareInputAndText>
                                        <CompareInputText>총장</CompareInputText>
                                        <CompareInput/>
                                    </CompareInputAndText>
                                    <CompareInputAndText>
                                        <CompareInputText>어깨단면</CompareInputText>
                                        <CompareInput/>
                                    </CompareInputAndText>
                                    <CompareInputAndText>
                                        <CompareInputText>가슴단면</CompareInputText>
                                        <CompareInput/>
                                    </CompareInputAndText>
                                </CompareInputAndTextContainer>
                                <CompareInputAndTextContainer>
                                    <CompareInputAndText>
                                        <CompareInputText>암홀단면</CompareInputText>
                                        <CompareInput/>
                                    </CompareInputAndText>
                                    <CompareInputAndText>
                                        <CompareInputText>소매단면</CompareInputText>
                                        <CompareInput/>
                                    </CompareInputAndText>
                                    <CompareInputAndText>
                                        <CompareInputText>소매길이</CompareInputText>
                                        <CompareInput/>
                                    </CompareInputAndText>
                                    <CompareInputAndText>
                                        <CompareInputText>밑단단면</CompareInputText>
                                        <CompareInput/>
                                    </CompareInputAndText>
                                </CompareInputAndTextContainer>
                                <CompareInputCardDelBtn>삭제하기</CompareInputCardDelBtn>
                            </CompareInputCard>
                            <AddInputCardBtn src="../assets/Group 330.svg" />
                        </CompareInputContainer>
                        <CompareInputCardConfirmBtn>저장하기</CompareInputCardConfirmBtn>
                    </ComparePopUpInnerContainer>
                </ComparePopUpBackground>
            </ComparePopUpContainer>
        </BackgroundContainer>
      </>
    )
  }
  
  export default CompareInputPopUp