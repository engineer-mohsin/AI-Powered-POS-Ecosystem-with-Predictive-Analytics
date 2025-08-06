import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("Forgot password request for:", email);
    setTimeout(() => setSubmitting(false), 1000);
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <Helmet>
        <title>Reset Password | Zubi Electronics</title>
      </Helmet>

      <div className="w-full max-w-sm">
        <div className="bg-white border border-gray-200 rounded-lg shadow p-8">
          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-[#6d28d9]">
              Forgot Password
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Enter your email to reset your password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6d28d9] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-[#6d28d9] text-white py-2 w-full rounded-md hover:bg-[#5b21b6] transition"
            >
              {submitting ? "Submitting..." : "Reset Password"}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm mt-6">
            <p className="text-gray-600">
              Remember your password?{" "}
              <Link to="/sign-in" className="text-[#6d28d9] underline font-medium">
                Signin here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
