import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import registration_image from "../../assets/images/registration-image.webp";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-w-screen min-h-screen bg-[#f5f5f5] flex justify-center items-center p-1">
      <div className="flex w-full max-w-4xl h-[500px] border border-gray-200 rounded-lg overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-sm">
            <div className="bg-white border border-gray-200 rounded-lg shadow p-7">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-[#6d28d9]">Register a new account</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Enter your email below to create your account
                </p>
              </div>

              <form className="space-y-5">
                {/* Email Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="m@example.com"
                    required
                    className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none"
                  />
                </div>

                {/* Password Field with Eye Icon */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Register Button */}
                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    className="bg-[#6d28d9] text-white py-2 rounded-md hover:bg-[#5b21b6] hover:cursor-pointer transition"
                  >
                    Register
                  </button>
                </div>

                {/* Login Link */}
                <p className="text-sm text-center text-gray-600 mt-4">
                  Already have an account?{' '}
                  <a href="/login" className="text-[#6d28d9] underline">
                    <b>Login</b>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={registration_image}
            alt="Registration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
