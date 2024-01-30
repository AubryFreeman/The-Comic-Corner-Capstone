import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Welcome } from "../Components/Welcome/Welcome.js";
import { Comics } from "../Components/Comics/Comics.js";
import { CreateComics } from "../Components/Comics/CreateComics.js";
import { Profile } from "../Components/Profile/Profile.js";
import { NavBar } from "../Components/Nav/NavBar.js";

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
        <Route index element={<Welcome />} />
        <Route path="Comic Corner">
          <Route index element={<Comics />} />
        </Route>
        <Route path="Create Comic">
          <Route index element={<CreateComics />} />
        </Route>
        <Route path="Profile">
          <Route index element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};
