import { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("country-search-theme") || "light"
  );

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("country-search-theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="nav">
      <div className="container nav-container">
        <h1 className="nav-text">Where in the world?</h1>
        <div className="mode-toggle" onClick={toggleTheme}>
          <i className={theme === "light" ? "fas fa-moon" : "far fa-sun"}></i>{" "}
          {theme === "light" ? "Dark" : "Light"} Mode
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
