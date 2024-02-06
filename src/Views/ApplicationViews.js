import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../Components/Nav/NavBar.js";
import { Welcome } from "../Components/Welcome/Welcome.js";
import { Comics } from "../Components/Comics/Comics.js";
import { CreateComics } from "../Components/Comics/CreateComics.js";
import { Profile } from "../Components/Profile/Profile.js";
import { ComicDetails } from "../Components/Comics/ComicDetails.js";
import { EditComics } from "../Components/Comics/EditComics.js";

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
        <Route path="/Comics">
          <Route index element={<Comics />} />
          <Route path=":id" element={<ComicDetails />} />
        </Route>
        <Route path="CreateComics" element={<CreateComics />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="EditComic" element={<EditComics />} />
      </Route>
    </Routes>
  );
};
