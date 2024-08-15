import React from "react";
import { Container, SearchIconBox, SearchInputBox } from "./SearchBox.style";
const SearchBox = ({ src, placeholder, ...props }) => {
  return (
    <Container>
      <SearchIconBox>
        <img src={src} />
      </SearchIconBox>
      <SearchInputBox placeholder={placeholder} {...props} />
    </Container>
  );
};

export default SearchBox;
