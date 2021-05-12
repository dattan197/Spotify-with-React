import SearchResult from "./SearchResult";

const Search = ({ handleChangeSearch, show, setShow, searchResult, handleSelectMusic }) => {
  return (
    <div className="search">
      <input className="search-bar" type="text" name="" id="" placeholder="Search here..." onChange={(e) => handleChangeSearch(e)} />
      <SearchResult show={show} setShow={setShow} searchResult={searchResult} handleSelectMusic={handleSelectMusic} />
    </div>
  );
};

export default Search;