import { useEffect } from "react";
import RecomUser from "../../components/RecomUserCard/RecomUserCard";
import {
  Container,
  Highlight,
  SubTitleWrap,
  SubTitle,
  ShowAll,
  RecomUserWrap,
} from "./RecomMainPage.style";
import RecomStore from "../../../data/store"; 



function RecomMainPage() {
  const { userData, fetchUsers } = RecomStore(); // 스토어에서 필요한 데이터 가져오기

  useEffect(() => {
    fetchUsers(); 
  }, [fetchUsers]);

  //팔로우 안한 사람들만
  const bodyTypeUsers = userData.filter(user => !user.isFollowed);

  return (
    <Container>
      <SubTitleWrap>
        <SubTitle>
          <Highlight>핏플1004</Highlight>님과 비슷한 체형의 유저들이에요.
        </SubTitle>
        <ShowAll to={`/recommendall`} state={{ users: bodyTypeUsers, title: '체형' }} >
          모두 보기
        </ShowAll>
      </SubTitleWrap>

      <RecomUserWrap>
        {bodyTypeUsers.slice(0, 8).map((user) => (
          <RecomUser
            key={user.userId}
            userName={user.userName}
            userProfile={`${user.userHeight}cm ${user.userWeight}kg`} // userWeight 수정
            userFit={user.userFit} 
            userStyle={user.userStyle} 
            isFollowed={user.isFollowed}
          />
        ))}
      </RecomUserWrap>

      <SubTitleWrap>
        <SubTitle>
          <Highlight>핏플1004</Highlight>님과 비슷한 스타일의 유저들이에요.
        </SubTitle>
        <ShowAll to={`/recommendall`} state={{ users: bodyTypeUsers,title: '스타일' }}>
          모두 보기
        </ShowAll>
      </SubTitleWrap>
      <RecomUserWrap>
      {bodyTypeUsers.slice(0, 8).map((user) => (
          <RecomUser
            key={user.userId}
            userName={user.userName}
            userProfile={`${user.userHeight}cm ${user.userWeight}kg`} // userWeight 수정
            userFit={user.userFit} 
            userStyle={user.userStyle} 
          />
        ))}
      </RecomUserWrap>
    </Container>
  );
}

export default RecomMainPage;
