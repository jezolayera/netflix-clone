import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className={`links ${menuOpen ? "mobile-open" : ""}`}>
          <img src="./Net.Img/Netflix.png" alt="logo" />
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Homepage</Link>
          <Link to="/series" className="nav-link" onClick={() => setMenuOpen(false)}>Series</Link>
          <Link to="/movies" className="nav-link" onClick={() => setMenuOpen(false)}>Movies</Link>
          <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/register" className="nav-link" onClick={() => setMenuOpen(false)}>Register</Link>
        </div>

        <div className="right">
          <i className="fas fa-search icon"></i>
          {/* <span>KID</span> */}
          <i className="fas fa-bell icon"></i>
          <img src="./Net.Img/Milli.png" alt="profile" />

          <div className="profile">
            <i className="fas fa-caret-down icon"></i>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>

          <i className="fas fa-bars menu-icon" onClick={() => setMenuOpen(!menuOpen)}></i>
        </div>
      </div>
    </div>
  );
}

