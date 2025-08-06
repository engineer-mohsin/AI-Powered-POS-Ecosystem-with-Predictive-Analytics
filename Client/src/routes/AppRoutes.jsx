// =================| Import Components |=================

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";

// import Registeration from "../pages/Registeration/Registration";
import SignIn from "../pages/SignIn/SignIn";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Home from "../pages/Home/Home";

// =================| AppRoute Component |=================
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
