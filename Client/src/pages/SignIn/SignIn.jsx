import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import signinImage from "../../assets/images/signin-image.jpg"; // Adjust this if your path differs

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In form submitted", { cnic, password });
    // TODO: Handle login logic here
  };



  return (
    <div className="min-w-screen min-h-screen bg-[#f5f5f5] flex justify-center items-center">
      <Helmet>
        <title>Sign In | Zubi Electronics</title>
      </Helmet>

      <div className="flex w-full max-w-4xl h-[500px] border border-gray-200 rounded-lg overflow-hidden">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-sm">
            <div className="bg-white border border-gray-200 rounded-lg shadow p-7">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-semibold text-[#6d28d9]">Welcome back</h2>
                <p className="text-sm text-gray-600 mt-1">Sign In to your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* CNIC Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="cnic" className="text-sm font-medium text-gray-700">
                    CNIC
                  </label>
                  <input
                    type="text"
                    id="cnic"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="XXXXX-XXXXXXX-X"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none"
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none pr-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                  </div>

                  <div className="text-right mt-1">
                    <Link to="/reset-password" className="text-sm text-[#6d28d9] hover:cursor-pointer">
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    className="bg-[#6d28d9] text-white py-2 rounded-md hover:bg-[#5b21b6] hover:cursor-pointer transition"
                    onClick={handleSubmit}
                  >
                    Continue
                  </button>
                </div>

                <p className="text-sm text-center text-gray-600 mt-4">
                  Don’t have an account?{" "}
                  <Link to="/" className="text-[#6d28d9] underline font-medium hover:cursor-pointer">
                    Contact Admin
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={signinImage}
            alt="Sign In"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
