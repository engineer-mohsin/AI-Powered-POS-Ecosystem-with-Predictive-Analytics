import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signinImage from "../../../assets/images/signin-image.webp";

// Animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleCnicChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 13);
    let formatted = value;
    if (value.length > 5) formatted = value.slice(0, 5) + "-" + value.slice(5);
    if (value.length > 12)
      formatted = formatted.slice(0, 13) + "-" + formatted.slice(13);
    setCnic(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cnic || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    toast.success("Sign In successful!");

    setTimeout(() => {
      navigate("/user-dashboard");
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Sign In | Zubi Electronics</title>
      </Helmet>

      {/* 🔔 Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="min-w-screen min-h-screen bg-[#f5f5f5] flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex w-full max-w-4xl h-[500px] border border-gray-200 rounded-lg overflow-hidden"
        >
          {/* Left - Form */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
            <motion.div
              className="w-full max-w-sm"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow p-7">
                <div className="mb-6 text-center">
                  <motion.h2
                    className="text-2xl font-semibold text-[#6d28d9]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Welcome back
                  </motion.h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Sign In to your account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* CNIC */}
                  <motion.div className="flex flex-col gap-1" variants={fadeIn}>
                    <label
                      htmlFor="cnic"
                      className="text-sm font-medium text-gray-700"
                    >
                      CNIC
                    </label>
                    <input
                      type="text"
                      id="cnic"
                      value={cnic}
                      onChange={handleCnicChange}
                      placeholder="XXXXX-XXXXXXX-X"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none"
                    />
                  </motion.div>

                  {/* Password */}
                  <motion.div className="flex flex-col gap-1" variants={fadeIn}>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none pr-10"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? (
                          <FaEyeSlash size={20} />
                        ) : (
                          <FaEye size={20} />
                        )}
                      </button>
                    </div>

                    <div className="text-right mt-1">
                      <Link
                        to="/reset-password"
                        className="text-sm text-[#6d28d9] hover:cursor-pointer"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </motion.div>

                  {/* Submit */}
                  <motion.div
                    className="flex flex-col gap-3"
                    
                  >
                    <button
                      type="submit"
                      className="bg-[#6d28d9] text-white py-2 rounded-md hover:bg-[#5b21b6] hover:cursor-pointer transition"
                    >
                      Continue
                    </button>
                  </motion.div>

                  <p className="text-sm text-center text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <Link
                      to="/contact-owner"
                      className="text-[#6d28d9] underline font-medium hover:cursor-pointer"
                    >
                      Contact Admin
                    </Link>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            className="w-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src={signinImage}
              alt="Sign In"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SignIn;
