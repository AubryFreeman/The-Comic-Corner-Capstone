import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Auth/Login.js";
import { Authorized } from "./Views/AuthViews.js";
import { ApplicationViews } from "./Views/ApplicationViews.js";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};

export default App;
