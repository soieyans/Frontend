import React from "react";
import {
  Container,
  ItemListWrap,
  SideBarWrap,
  Wrap,
} from "./ProfileFavor.style";
import SideBar from "../SideBar/SideBar";
import ItemList from "../ItemList/ItemList";

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
