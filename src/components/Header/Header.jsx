import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogOut from "../LogOut/LogOut";
import Search from "../Search/Search";
import "./header.scss";

const Header = ({ spotifyApi, toggleSidebar, open, handleSelectMusic }) => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);

  const searchResult = useSelector((state) => state.SearchReducer.searchResult);
  //console.log(searchResult);
  function handleChangeSearch(e) {
    const { value } = e.target;
    setSearchValue(value);
  }

  useEffect(() => {
    if (!searchValue) {
      setShow(false);
      return;
    }
    setShow(true);
    spotifyApi
      .searchTracks(searchValue)
      .then((res) => {
        dispatch({
          type: "GET_SEARCH_RESULT",
          searchResult: res?.tracks?.items,
        });
      })
      .catch((err) => console.log(err));
  }, [searchValue]);

  return (
    <header id="header" className="container">
      <i className="fab fa-spotify" />
      <Search handleChangeSearch={handleChangeSearch} show={show} setShow={setShow} searchResult={searchResult} handleSelectMusic={handleSelectMusic} />
      <div id="nav-icon" onClick={toggleSidebar} className={open ? "open" : ""}>
        <span />
        <span />
        <span />
      </div>
      <nav id="nav-bar">
        <ul className="nav-list">
          <LogOut />
        </ul>
      </nav>
    </header>
  );
};

export default Header;