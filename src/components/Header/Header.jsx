import "./header.scss";

const Header = ({ toggleSidebar }) => {
  return (
    <header id="header" className="container">
      <i className="fab fa-spotify" />
      <div className="login">
        <a className="btn" href="#">
          Avatar
        </a>
      </div>
      <div id="nav-icon" onClick={toggleSidebar}>
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
