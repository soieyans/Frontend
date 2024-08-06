import { Container, Wrap,SubWrap, IndividualWrap } from "./RecomUserFeedPage.style";
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
      <Infom />
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
