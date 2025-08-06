import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

// Import Loader
import Loader from "../components/Loader/Loader";

// Lazy load all pages (this enables proper loading detection)
const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage"));
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const ResetPassword = lazy(() =>
  import("../pages/ResetPassword/ResetPassword")
);
const VerifyCode = lazy(() => import("../pages/VerifyCode/VerifyCode"));
const NewPassword = lazy(() => import("../pages/NewPassword/NewPassword"));
const Registeration = lazy(() => import("../pages/Registeration/Registration"));

const AppRoutes = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Suspense shows Loader until the lazy-loaded component is ready */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/register" element={<Registeration />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default AppRoutes;
