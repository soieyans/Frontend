import React from "react";
import { SearchIconBox, SearchInputBox } from "./SearchBox.style";
const SearchBox = ({ src, placeholder }) => {
  return (
    <>
      <SearchIconBox>
        <img src={src} />
      </SearchIconBox>
      <SearchInputBox placeholder={placeholder} />
    </>
  );
};

export default SearchBox;
