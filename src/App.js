import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Welcome } from "./Components/Welcome/Welcome.js";
import { NavBar } from "./Components/Nav/NavBar.js";
import { CreateComics } from "./Components/Comics/CreateComics.js";
import { Profile } from "./Components/Profile/Profile.js";
import { Login } from "./Components/Login/Login.js";
import { Comics } from "./Components/Comics/Comics.js";
export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Welcome />} />
        <Route path="Comics" element={<Comics />} />
        <Route path="CreateComics" element={<CreateComics />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
