import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
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
      <li className="navbar-item">
        <Link className="navbar-link" to="/Login">
          Logout
        </Link>
      </li>
    </ul>
  );
};
