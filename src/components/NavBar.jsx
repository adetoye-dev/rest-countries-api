import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="container nav-container">
        <h1 className="nav-text">Where in the world?</h1>
        <div className="mode-toggle">
          <i className="fa-solid fa-moon"></i> Dark Mode
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
