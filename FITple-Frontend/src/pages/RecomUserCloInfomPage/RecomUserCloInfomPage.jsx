import Dimension from "../../components/Dimension/Dimension";
import InfomBox from "../../components/InfomBox/InfomBox";
import {
  Container,
  RightWrap,
  LeftWrap,
  Item,
  ImgWrap,
  SubImgWrap,
  ImgItem,
  Wrap,
  Rate,
  Root,
  Like,
  Bookmark,
  Brand,
  Product,
  MemoBox,
  MemoWrap,
} from "./RecomUserCloInfomPage.style";

function RecomUserCloInfomPage() {
  return (
    <Container>
      <Wrap>
        <LeftWrap>
          <Wrap>
            <img src="/assets/Back.svg" width={22} alt="Back" />
            <Root>핏플 아우터</Root>
          </Wrap>
          <ImgWrap>
            <img src="/assets/ExImg (6).png" width={550} height={550} alt="Item"/>
            <Like src="/assets/Heart.svg" alt="Like" />
          </ImgWrap>

          <SubImgWrap>
            <ImgItem src="/assets/ExImg (1).png" />
            <ImgItem src="/assets/ExImg (3).png" />
            <ImgItem src="/assets/ExImg (4).png" />
            <ImgItem src="/assets/ExImg (5).png" />
            <ImgItem src="/assets/ExImg (3).png" />
            <ImgItem src="/assets/ExImg (4).png" />
            <ImgItem src="/assets/ExImg (5).png" />
            <ImgItem src="/assets/ExImg (2).png" />
          </SubImgWrap>
          <Rate>
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStarEmpty.svg" width={46} height={42} />
          </Rate>
        </LeftWrap>

        <RightWrap>
          <Wrap>
            <Item>
              <Brand>아디다스</Brand>
              <Product>에센셜 풀집 후디</Product>
            </Item>
            <Bookmark src="/assets/Bookmark.svg" alt="Bookmark" />
          </Wrap>
          <Wrap>
            <Item>
              <InfomBox Name="사이즈" Infom="XL"></InfomBox>
            </Item>
            <Item>
              <InfomBox Name="핏" Infom="오버"></InfomBox>
            </Item>
            <Item>
              <InfomBox Name="색상" Infom="그레이"></InfomBox>
            </Item>
            <Item>
              <InfomBox Name="제품번호" Infom="IL2516"></InfomBox>
            </Item>
          </Wrap>
          <Wrap>
            <InfomBox Name="URL" Infom="https://adidas.co.kr/1245"></InfomBox>
          </Wrap>
          <MemoWrap>
            <Item>메모</Item>
            <MemoBox>길이는 딱 맞고, 팔이 조금 길다.</MemoBox>
          </MemoWrap>
          <Dimension></Dimension>

          
        </RightWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserCloInfomPage;
