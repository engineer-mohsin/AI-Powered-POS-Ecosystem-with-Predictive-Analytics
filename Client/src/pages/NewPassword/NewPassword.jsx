import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newPassImage from "../../assets/images/new-password-image.webp";

// Animation variant for fade-in
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  // 🔒 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 Validation: Empty fields
    if (!password.trim() || !confirmPassword.trim()) {
      toast.error("Please fill in all the fields.");
      return;
    }

    // 🔴 Validation: Min length
    if (password.length < 8 || confirmPassword.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    // ❌ Validation: Mismatch
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // ✅ Simulate password reset success
    setSubmitting(true);
    // Simulate success
    toast.success("Password changed successfully!");
    setTimeout(() => {
      navigate("/sign-in");
    }, 1000);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#f5f5f5] flex justify-center items-center">
      {/* Page Title */}
      <Helmet>
        <title>New Password | Zubi Electronics</title>
      </Helmet>

      {/* Container Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex w-full max-w-4xl h-[500px] border border-gray-200 rounded-lg overflow-hidden"
      >
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
          <motion.div
            className="w-full max-w-sm"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow p-7">
              <h2 className="text-2xl font-semibold text-[#6d28d9] text-center mb-2">
                Set New Password
              </h2>
              <p className="text-sm text-gray-600 text-center mb-6">
                Choose a strong password you haven't used before
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 🔐 New Password Field */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none"
                  />
                </div>

                {/* 🔐 Confirm Password Field */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#6d28d9] text-white py-2 w-full rounded-md hover:bg-[#5b21b6] hover:cursor-pointer transition"
                >
                  {submitting ? "Saving..." : "Save & Sign In"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div
          className="w-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src={newPassImage}
            alt="New Password"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* 🔔 Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default NewPassword;
