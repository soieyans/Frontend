import React from "react";
import { Container } from "./ItemList.style";
import UserItem from "../UserItem/UserItem";

const ItemList = ({ ...props }) => {
  return (
    <Container>
      <UserItem {...props} />
      <UserItem {...props} />
      <UserItem {...props} />
      <UserItem {...props} />
      <UserItem {...props} />
      <UserItem {...props} />
      <UserItem {...props} />
      <UserItem {...props} />
    </Container>
  );
};

export default ItemList;
