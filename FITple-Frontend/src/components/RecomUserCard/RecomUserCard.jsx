import {
  Container,
  UserName,
  UserProfile,
  UserFit,
  UserStyle,
  Follow,
  UserImg,
} from "./RecomUserCard.style";
import SetUserImg from "/assets/UserImg.svg";

import { useEffect } from "react";
import RecomStore from "../../store/RecomStore";
import { useStore } from "zustand";

function RecomUser({ userId, userName, userProfile, userFit, userStyle, isFollowed }) {
  const { fetchUsers } = RecomStore();
  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // const updateFollowStatus = useStore((state) => state.updateFollowStatus);

  // const handleFollowClick = () => {
  //   updateFollowStatus(userId, !isFollowed); // 팔로우 상태 업데이트
  // };

  return (
    <Container to={`/recommenduser`}>
      <UserImg src={SetUserImg} alt="User Image" />
      <UserName>{userName}</UserName>
      <UserProfile>{userProfile}</UserProfile>
      <UserFit>
        <img src="/assets/Heart.svg" width={16} height={16} alt="Fit" />
        {userFit}
      </UserFit>
      <UserStyle>
        <img src="/assets/Hanger.svg" width={16} height={16} alt="Style" />
        {userStyle}
      </UserStyle>
      <Follow 
        // isFollowed={isFollowed} 
        // onClick={handleFollowClick} 
        // disabled={isFollowed} // isFollowed에 따라 비활성화
      >
        팔로잉{/* {isFollowed ? "팔로잉" : "팔로우"} */}
      </Follow>
    </Container>
  );
}

export default RecomUser;
