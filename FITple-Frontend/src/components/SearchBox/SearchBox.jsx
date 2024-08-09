import React from "react";
import { Container, SearchIconBox, SearchInputBox } from "./SearchBox.style";
const SearchBox = ({ src, placeholder }) => {
  return (
    <Container>
      <SearchIconBox>
        <img src={src} />
      </SearchIconBox>
      <SearchInputBox placeholder={placeholder} />
    </Container>
  );
};

export default SearchBox;
