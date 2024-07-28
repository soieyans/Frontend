import { SearchContainer, SearchIcon, SearchInput } from "./SearchBar.style"



function SearchBar() {
        
    return (
      <>
        <SearchContainer>
            <SearchInput placeholder="내 옷 검색하기"></SearchInput>
            <SearchIcon src="../assets/search.svg"></SearchIcon>
        </SearchContainer>
      </>
    )
  }
  
  export default SearchBar
  