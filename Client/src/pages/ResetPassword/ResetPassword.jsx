import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signinImage from "../../assets/images/reset-password-image.webp";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      navigate("/verify-code");
    }, 1000);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#f5f5f5] flex justify-center items-center">
      <Helmet>
        <title>Reset Password | Zubi Electronics</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex w-full max-w-4xl h-[500px] border border-gray-200 rounded-lg overflow-hidden"
      >
        {/* Left - Form Container */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
          <motion.div
            className="w-full max-w-sm"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow p-7">
              {/* Heading */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold text-[#6d28d9]">
                  Reset Password
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Enter your email to reset your password
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#6d28d9] text-white py-2 w-full rounded-md hover:bg-[#5b21b6] hover:cursor-pointer transition"
                >
                  {submitting ? "Submitting..." : "Reset Password"}
                </button>
              </form>

              {/* Footer */}
              <div className="text-center text-sm mt-6">
                <p className="text-gray-600">
                  Remember your password?{" "}
                  <Link
                    to="/sign-in"
                    className="text-[#6d28d9] underline font-medium"
                  >
                    Signin
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right - Image (optional) */}
        <motion.div
          className="w-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src={signinImage}
            alt="Reset Password"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Toasts */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ResetPassword;
