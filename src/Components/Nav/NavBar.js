import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
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
