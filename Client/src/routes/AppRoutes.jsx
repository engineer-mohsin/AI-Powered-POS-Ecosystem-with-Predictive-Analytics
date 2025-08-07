import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

// Loader for fallback during lazy loading
import Loader from "../components/Loader/Loader";

// Lazy-loaded Pages (make sure all paths and filenames match exactly)
const SignIn = lazy(() => import("../Pages/User/SignIn/SignIn"));
const LandingPage = lazy(() => import("../Pages/LandingPage/LandingPage"));
const ResetPassword = lazy(() => import("../Pages/User/ResetPassword/ResetPassword"));
const VerifyCode = lazy(() => import("../Pages/User/VerifyCode/VerifyCode"));
const NewPassword = lazy(() => import("../Pages/User/NewPassword/NewPassword"));
const ContactOwner = lazy(() => import("../Pages/Client/ContactOwner/ContactOwner"));
const Registration = lazy(() => import("../Pages/Admin/Registration/Registration")); 
const UserDashboard = lazy(() => import("../Pages/User/UserDashboard/UserDashboard"));

const AppRoutes = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/contact-owner" element={<ContactOwner />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRoutes;
