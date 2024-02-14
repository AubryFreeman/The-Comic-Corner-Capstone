import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";
import { useEffect } from "react";

export const NavBar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseEnter = (event) => {
      const colors = ["#ffc107", "#0095ff", "#fd3030"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      event.target.style.setProperty("--hover-color", randomColor);
    };

    const handleMouseLeave = (event) => {
      event.target.style.removeProperty("--hover-color");
    };

    const navbarLinks = document.querySelectorAll(".navbar-link");

    navbarLinks.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navbarLinks.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/Comics">
          Comic Corner
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/CreateComics">
          Create
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/Profile">
          Profile
        </Link>
      </li>
      {localStorage.getItem("comic_user") ? (
        <li className="navbar-item">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("comic_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
