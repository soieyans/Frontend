import { CompareCardContainer, CompareCardTextContainer, ItemImg, ItemSizeText, ItemSubTitleText, ItemTitleText, SelectBtn } from "./CompareCard.style"


function CompareCard() {

    return (
      <>
        <CompareCardContainer>
            <ItemImg src="../../assets/에센셜 풀집 후디 pic.svg" ></ItemImg>
            <CompareCardTextContainer>
                <ItemTitleText>아디다스</ItemTitleText>
                <ItemSubTitleText>에센셜 풀집 후디(Grey)</ItemSubTitleText>
                <ItemSizeText>S, M, L, XL</ItemSizeText>
            </CompareCardTextContainer>
            <SelectBtn>선택</SelectBtn>
        </CompareCardContainer>
      </>
    )
  }
  
  export default CompareCard
  