import React from "react";
import {
  Container,
  ItemListWrap,
  SideBarWrap,
  Wrap,
} from "./ProfileLove.style";
import SideBar from "../SideBar/SideBar";
import ItemList from "../ItemList/ItemList";

const ProfileLove = () => {
  return (
    <Container>
      <Wrap>
        <SideBarWrap>
          <SideBar />
        </SideBarWrap>
        <ItemListWrap>
          <ItemList />
        </ItemListWrap>
      </Wrap>
    </Container>
  );
};

export default ProfileLove;
