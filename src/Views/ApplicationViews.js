import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../Components/Nav/NavBar.js";
import { Welcome } from "../Components/Welcome/Welcome.js";
import { Comics } from "../Components/Comics/Comics.js";
import { CreateComics } from "../Components/Comics/CreateComics.js";
import { Profile } from "../Components/Profile/Profile.js";
import { ComicDetails } from "../Components/Comics/ComicDetails.js";
import { EditComics } from "../Components/Comics/EditComics.js";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localComicUser = localStorage.getItem("comic_user");
    const comicUserObject = JSON.parse(localComicUser);

    setCurrentUser(comicUserObject);
  }, []);
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
          <Route
            path=":id"
            element={<ComicDetails currentUser={currentUser} />}
          />
        </Route>
        <Route
          path="CreateComics"
          element={<CreateComics currentUser={currentUser} />}
        />
        <Route path="Profile" element={<Profile />} />
        <Route
          path="EditComic/:id"
          element={<EditComics currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
