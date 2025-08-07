// ContactAdmin.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const ContactAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-[#f5f5f5]">
      <Helmet>
        <title>Contact | Zubi Electronics</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl rounded-2xl bg-white text-gray-900 shadow-md overflow-hidden flex flex-col md:flex-row md:h-[600px]"
      >
        {/* Left - Contact Info */}
        <div className="md:w-1/2 p-8 flex flex-col gap-4 md:overflow-y-auto">
          <h2 className="text-2xl font-semibold text-center md:text-left text-gray-800">
            Contact Us
          </h2>
          <p className="text-sm text-gray-600 text-center md:text-left">
            Have questions or need help? Reach out using the info below or send
            us a message.
          </p>

          <div className="space-y-3 text-sm">
            <div>
              <strong>Phone:</strong>
              <p className="text-gray-700">
                <a
                  href="tel:+923329094396"
                  className="block px-2 hover:text-violet-700 transition"
                >
                  +92 332 909 4396
                </a>
                <a
                  href="tel:+923139804396"
                  className="block px-2 hover:text-violet-700 transition"
                >
                  +92 313 980 4396
                </a>
              </p>
            </div>
            <div>
              <strong>Email:</strong>
              <p className="text-gray-700 px-2">zubielectronics@gmail.com</p>
            </div>
            <div>
              <strong>Address:</strong>
              <p className="text-gray-700 px-2">
                Zubi Electronics, Tipu Sultan Rd, Peshawar Cantonment, 25000,
                Pakistan.
              </p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div
            className="rounded-md overflow-hidden shadow-md mt-4"
            style={{ aspectRatio: "16 / 9", minHeight: "190px" }}
          >
            <iframe
              title="Zubi Electronics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8111735067864!2d71.5399838!3d33.99738359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917ab3f41fdc7%3A0xa5152a9b8582e87a!2sZubi%20electronics!5e0!3m2!1sen!2s!4v1747519124081!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300 hidden md:block self-center h-[90%]"></div>

        {/* Right - Contact Form */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between md:overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left text-gray-800">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600 transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600 transition"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600 transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <button
                type="submit"
                className="w-full bg-violet-700 text-white rounded-md py-2 flex justify-center items-center gap-2 hover:bg-violet-800 transition hover:cursor-pointer"
              >
                <FiSend className="text-lg" />
                Send Message
              </button>
            </motion.div>
          </form>

          <div className="text-center text-sm mt-6 text-gray-500">
            <p>Already have an Account?</p>
            <Link to="/sign-in" className="text-violet-700 hover:underline">
              Login here
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactAdmin;
