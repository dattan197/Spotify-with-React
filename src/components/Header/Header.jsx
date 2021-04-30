import "./header.scss";

const Header = ({ toggleSidebar, open }) => {
  return (
    <header id="header" className="container">
      <i className="fab fa-spotify" />
      <div className="search">
        <input className="search-bar" type="text" name="" id="" placeholder="Search here..." />
      </div>
      <div id="nav-icon" onClick={toggleSidebar} className={open ? "open" : ""}>
        <span />
        <span />
        <span />
      </div>
      <nav id="nav-bar">
        <ul className="nav-list">
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;