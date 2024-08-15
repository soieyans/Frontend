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
import { useParams, useLocation } from "react-router-dom"; // useParams import

import CloIcon from "/assets/ClosetBlue.svg";
import CloIconEmpty from "/assets/ClosetEmpty.svg";
import HeartIcon from "/assets/HeartBlue.svg";
import HeartIconEmpty from "/assets/HeartEmpty.svg";

function RecomUserFeedPage() {
  const location = useLocation();
  const user = location.state;

  const { userId } = useParams(); // URL 파라미터에서 userId 가져오기
  console.log({userId});
  return (
    <Container>
      {/* Infom을 한번더 InformWrap으로 감싸서 위 영역과 아래 영역을 나눴습니다! */}
      <InformWrap>
        <Infom user={user} /> {/* Infom 컴포넌트에 userId 전달 */}
      </InformWrap>

      <Wrap>
        <IndividualWrap>
          <FeedButton icon={CloIcon} alt="옷장" />
          <FeedButton icon={HeartIcon} alt="즐겨찾는 곳" />
        </IndividualWrap>
        <SubWrap>
          <FeedNav />
          <Closet />
        </SubWrap>
      </Wrap>
    </Container>
  );
}

export default RecomUserFeedPage;
