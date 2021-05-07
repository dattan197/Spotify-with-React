const SearchResult = ({ show, searchResult }) => {
    function renderSearchResult(results) {
      if (results.length < 1) return <h2>No result found</h2>;
      return results.map((result) => (
        <li key={result?.id} className="result">
          <p>{result?.name}</p>
        </li>
      ));
    }
  
    return (
      <div className={`search-result__wrapper ${show ? "open" : ""}`}>
        <div className="search-result">
          <ul className="result-list">{renderSearchResult(searchResult)}</ul>
        </div>
      </div>
    );
  };
  
  export default SearchResult;