import React from "react";
import IMG from "../../../assets/EXadidas.svg";
import {
  Brand,
  Container,
  ItemImg,
  ItemName,
  ItemWrap,
  Size,
  UserImg,
  UserInfo,
} from "./UserItem.style";
const UserItem = () => {
  return (
    <Container>
      {/* 아이템 이미지 */}
      <ItemImg src="https://blog.kakaocdn.net/dn/mmiWC/btszy4hoVjM/JAHukeXLibgX76VaWsAqp1/img.jpg" />
      {/* 유저정보 */}
      <UserInfo>
        {/* 유저 프로필 */}
        <UserImg src="https://blog.kakaocdn.net/dn/mmiWC/btszy4hoVjM/JAHukeXLibgX76VaWsAqp1/img.jpg" />
        <p>핏플1004</p>
      </UserInfo>
      <ItemWrap>
        <Brand>컨버스</Brand>
        <ItemName>척테일러 올스타 클래식 하이</ItemName>
        <Size>230mm</Size>
      </ItemWrap>
    </Container>
  );
};

export default UserItem;
