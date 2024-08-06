import {
  Container,
  Wrap,
  SubWrap,
  IndividualWrap,
  InformWrap,
} from "./RecomUserFeedPage.style";
import Infom from "../../components/Infom/Infom";
import FeedButton from "../../components/FeedButton/FeedButton";
import FeedNav from "../../components/FeedNav/FeedNav";
import Closet from "../../components/Closet/Closet";

import CloIcon from "/assets/ClosetBlue.svg";
import CloIconEmpty from "/assets/ClosetEmpty.svg";
import HeartIcon from "/assets/HeartBlue.svg";
import HeartIconEmpty from "/assets/HeartEmpty.svg";

function RecomUserFeedPage() {
  return (
    <Container>
      {/* Infom을 한번더 inFormWrap으로 감싸서 위 영역과 아래 영역을 나눴습니다! */}
      <InformWrap>
        <Infom />
      </InformWrap>

      <Wrap>
        <IndividualWrap>
          <FeedButton icon={CloIcon} alt="옷장" />
          <FeedButton icon={HeartIcon} alt="즐겨찾는 곳" />
        </IndividualWrap>
        <SubWrap>
          <FeedNav></FeedNav>
          <Closet />
        </SubWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserFeedPage;
