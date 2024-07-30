import InfomBox from "../../components/InfomBox/InfomBox";
import {
  Container,
  ImgWrap,
  Item,
  ItemImg,
  SWrap,
  Wrap,
  Rate,
  Root,
  Like,
  Bookmark,
  Table,
  Td,
  MemoBox,
  MemoWrap,
} from "./RecomUserCloInfomPage.style";

function RecomUserCloInfomPage() {
  return (
    <Container>
      <SWrap>
        <img src="/assets/Back.svg" width={22} alt="Back" />
        <Root>핏플548아우터</Root>
      </SWrap>
      <Wrap>
        <ImgWrap>
          <ItemImg src="/assets/item-image.jpg" alt="Item" />
          <Like src="/assets/Heart.svg" alt="Like" />
          <Rate>
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStar.svg" width={46} height={42} />
            <img src="/assets/KidStarEmpty.svg" width={46} height={42} />
          </Rate>
        </ImgWrap>

        <ImgWrap>
          <Wrap>
            <Item>
              아디다스
              <br />
              에센셜 풀집 후디
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
            <MemoBox>길이는 딱 맞고, 팔이 조금 길다</MemoBox>
          </MemoWrap>

          <Table>
            <tbody>
              <tr>
                <Td>총 기장</Td>
                <Td>100cm</Td>
              </tr>
              <tr>
                <Td>어깨 너비</Td>
                <Td>40cm</Td>
              </tr>
              <tr>
                <Td>가슴 단면</Td>
                <Td>50cm</Td>
              </tr>
              <tr>
                <Td>소매 길이</Td>
                <Td>60cm</Td>
              </tr>
            </tbody>
          </Table>
        </ImgWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserCloInfomPage;
