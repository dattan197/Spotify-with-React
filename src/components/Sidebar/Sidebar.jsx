import "./sidebar.scss";

const Sidebar = ({ open }) => {
  return (
    <aside id="sidebar" className={`${open ? "active" : "default"}`}>
      <h1>This is sidebar</h1>
    </aside>
  );
};

export default Sidebar;
