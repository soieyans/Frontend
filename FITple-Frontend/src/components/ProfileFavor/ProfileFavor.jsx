import React from "react";
import { Container, ItemListWrap, SideBarWrap } from "./ProfileFavor.style";
import SideBar from "../SideBar/SideBar";
import ItemList from "../ItemList/ItemList";
import { Wrap } from "../UserItem/UserItem.style";

const ProfileFavor = () => {
  return (
    <Container>
      <Wrap>
        <SideBarWrap>
          <SideBar />
        </SideBarWrap>
        <ItemListWrap>
          <ItemList $user />
        </ItemListWrap>
      </Wrap>
    </Container>
  );
};

export default ProfileFavor;
