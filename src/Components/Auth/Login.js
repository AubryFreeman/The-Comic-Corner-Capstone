import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../Services/UserService.js";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "comic_user",
          JSON.stringify({
            id: user.id,
          })
        );
        navigate("/");
      } else {
        window.alert(
          "Invalid Login. Please check the information provided and try again"
        );
      }
    });
  };

  return (
    <main className="container-login">
      <section>
        <form className="form-login" onSubmit={loginHandler}>
          <h1>The Comic Corner</h1>
          <h2>Login</h2>
          <fieldset>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                placeholder="Enter Email"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="login-btn btn-info" type="submit">
                Login
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <section>{/* <Link to="/register">Register Here!</Link> */}</section>
    </main>
  );
};
