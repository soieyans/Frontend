import CompareCard from "../CompareCard/CompareCard"
import SearchBar from "../SearchBar/SearchBar"
import { BackArrowBtn, BackgroundContainer, CloseBtn, CompareCardListContainer, CompareSearchPopUpContainer, CompareTitle, CompareTitleContainer, SearchBarContainer } from "./CompareSearchPopUp.style"

function CompareSearchPopUp() {

    return (
      <>
        <BackgroundContainer>
            <CompareSearchPopUpContainer>
                <CompareTitleContainer>
                    <BackArrowBtn src="../../assets/BackArrow.svg" />
                    <CompareTitle>비교하기</CompareTitle>
                    <CloseBtn src="../assets/X.svg" />
                </CompareTitleContainer>
                <SearchBarContainer>
                    <SearchBar/>
                </SearchBarContainer>
                <CompareCardListContainer>
                    <CompareCard/>
                    <CompareCard/>
                    <CompareCard/>
                    <CompareCard/>
                </CompareCardListContainer>
            </CompareSearchPopUpContainer>
        </BackgroundContainer>
      </>
    )
  }
  
  export default CompareSearchPopUp
  