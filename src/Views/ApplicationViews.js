import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../Components/Nav/NavBar.js";
import { Welcome } from "../Components/Welcome/Welcome.js";
import { Comics } from "../Components/Comics/Comics.js";
import { CreateComics } from "../Components/Comics/CreateComics.js";
import { Profile } from "../Components/Profile/Profile.js";

export const ApplicationViews = () => {
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
        {/* <Route path="Login" element={<Login />} /> */}
      </Route>
    </Routes>
  );
};
