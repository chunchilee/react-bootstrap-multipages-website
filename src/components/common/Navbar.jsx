import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    // ? why id=full_nav
    <header id="full_nav">
      <div className={`header fixed-top ${navbar && "header-scrolled"}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src={logoImg} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="main-nav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    // to='#'
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/website">
                        Website
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/branding">
                        Branding
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/advertising">
                        Advertising
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/social-media">
                        Social Media
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
