import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartIcon from "../../../assets/filledheart.svg";
import OptionIcon from "../../../assets/Option.svg";
import {
  Brand,
  BrandWrap,
  Container,
  HeartImg,
  ImgWrap,
  ItemImg,
  ItemName,
  ItemWrap,
  OptionBTN,
  OptionBox,
  OptionImg,
  OptionItem,
  Size,
  SizeWrap,
  UserImg,
  UserInfo,
} from "./UserItem.style";

const UserItem = ({ item }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navigateToDetail = () => {
    navigate(`/clothdetail/${item.cloth_id}`);
  };

  // Default dummy item data
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
    likes: 0,
  };

  // Use the provided item or fallback to the dummyItem
  const currentItem = item || dummyItem;

  const toggleOptionBox = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      {/* Item Image */}
      <ImgWrap onClick={navigateToDetail}>
        <ItemImg src={currentItem.cloth_image} alt={currentItem.cloth_name} />
        {currentItem.likes > 0 && <HeartImg src={HeartIcon} />}
      </ImgWrap>

      {/* User Information */}
      <UserInfo>
        <UserImg
          src={currentItem.user_image}
          alt={`${currentItem.nickname}'s profile`}
        />
        <p>{currentItem.nickname}</p>
      </UserInfo>

      <ItemWrap>
        <BrandWrap>
          <Brand>{currentItem.brand}</Brand>
          <OptionBTN onClick={toggleOptionBox}>
            <OptionImg src={OptionIcon} alt="Options" />
          </OptionBTN>
          {isOpen && (
            <OptionBox>
              <OptionItem>옷 정보 수정하기</OptionItem>
              <OptionItem>옷 정보 삭제하기</OptionItem>
            </OptionBox>
          )}
        </BrandWrap>
        <ItemName>{currentItem.cloth_name}</ItemName>
        <SizeWrap>
          <Size>{currentItem.size} ㆍ</Size>
          <Size>{currentItem.fit}</Size>
        </SizeWrap>
      </ItemWrap>
    </Container>
  );
};

export default UserItem;
