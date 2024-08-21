import React from "react";
import { Container, ItemListWrap, SideBarWrap } from "./ProfileLove.style";
import SideBar from "../SideBar/SideBar";
import ItemList from "../ItemList/ItemList";
import { Wrap } from "../UserItem/UserItem.style";

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
