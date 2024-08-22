import React from "react";
import IMG from "../../../assets/EXadidas.svg";
import {
  Brand,
  Container,
  ItemImg,
  ItemName,
  ItemWrap,
  Size,
  SizeWrap,
  UserImg,
  UserInfo,
} from "./UserItem.style";
const UserItem = ({ ...props }) => {
  // 더미데이터
  const dummyItem = {
    nickname: "Anonymous",
    brand: "Generic Brand",
    cloth_name: "Unknown Cloth",
    size: "Unknown Size",
    fit: "Unknown Fit",
    cloth_image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8829244%2F88292446418.jpg&type=f372_372",
    user_image:
      "https://blog.kakaocdn.net/dn/mmiWC/btszy4hoVjM/JAHukeXLibgX76VaWsAqp1/img.jpg",
  };

  const item = props.item || dummyItem; // props.item이 없을 경우 dummyItem 사용

  return (
    <Container>
      {/* 아이템 이미지 */}
      <ItemImg
        src={
          item.cloth_image ||
          "https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8829244%2F88292446418.jpg&type=f372_372"
        }
      />
      {/* 유저정보 */}
      <UserInfo {...props}>
        {/* 유저 프로필 */}
        <UserImg
          src={
            item.user_image ||
            "https://blog.kakaocdn.net/dn/mmiWC/btszy4hoVjM/JAHukeXLibgX76VaWsAqp1/img.jpg"
          }
        />
        <p>{item.nickname}</p>
      </UserInfo>
      <ItemWrap>
        <Brand>{item.brand}</Brand>
        <ItemName>{item.cloth_name}</ItemName>
        <SizeWrap>
          <Size>{item.size} ㆍ</Size>
          <Size> {item.fit}</Size>
        </SizeWrap>
      </ItemWrap>
    </Container>
  );
};

export default UserItem;
