import React from "react";
import UserBodyInfo from "../UserInfoBody/UserInfoBody";
import { Container } from "./ProfileMyBody.style";

const ProfileMyBody = () => {
  return (
    <Container>
      <UserBodyInfo $profile />
    </Container>
  );
};

export default ProfileMyBody;
