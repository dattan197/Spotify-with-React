import LogOut from "../LogOut/LogOut";
import "./header.scss";

const Header = ({ toggleSidebar, open }) => {
  return (
    <header id="header" className="container">
      <i className="fab fa-spotify" />
      <div className="search">
        <input
          className="search-bar"
          type="text"
          name=""
          id=""
          placeholder="Search here..."
        />
      </div>
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
