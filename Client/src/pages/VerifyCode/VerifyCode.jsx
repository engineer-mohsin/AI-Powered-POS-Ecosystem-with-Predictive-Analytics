import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signinImage from "../../assets/images/verify-code-image.webp";

// Animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const VerifyCode = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");

    if (code.length !== 4) {
      toast.error("Please enter the 4-digit code.");
      return;
    }

    // Simulate success
    toast.success("Code verified successfully!");
    setTimeout(() => {
      navigate("/new-password");
    }, 1000);
  };

  const handleResendCode = () => {
    // Simulate resend action
    toast.info("🔄 Code resent to your email!");
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#f5f5f5] flex justify-center items-center">
      <Helmet>
        <title>Verify Code | Zubi Electronics</title>
      </Helmet>

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
              <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold text-[#6d28d9]">
                  Verify Code
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Enter the 4-digit code sent to your email
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      maxLength={1}
                      ref={(el) => (inputsRef.current[index] = el)}
                      className="w-12 h-14 text-center text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none"
                    />
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <button
                    type="submit"
                    className="bg-[#6d28d9] text-white py-2 w-full rounded-md hover:bg-[#5b21b6] hover:cursor-pointer transition"
                  >
                    Verify
                  </button>
                </motion.div>

                <p className="text-sm text-center text-gray-600">
                  Didn't receive the code?{" "}
                  <span
                    className="text-[#6d28d9] font-medium hover:cursor-pointer hover:underline"
                    onClick={handleResendCode}
                  >
                    Resend
                  </span>
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
            alt="Verify Code"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default VerifyCode;
