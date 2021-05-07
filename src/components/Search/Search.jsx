import SearchResult from "./SearchResult";

const Search = ({ handleChangeSearch, show, searchResult }) => {
  return (
    <div className="search">
      <input className="search-bar" type="text" name="" id="" placeholder="Search here..." onChange={(e) => handleChangeSearch(e)} />
      <SearchResult show={show} searchResult={searchResult} />
    </div>
  );
};

export default Search;
