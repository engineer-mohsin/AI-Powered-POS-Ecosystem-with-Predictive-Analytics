import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="page w-full min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Helmet>
        <title>Contact | Zubi Electronics</title>
      </Helmet>
      <div className="form_container w-full max-w-3xl rounded-xl bg-white text-gray-900 shadow-lg overflow-hidden flex flex-col md:flex-row md:h-[600px] md:max-h-[90vh]">
        {/* Left side - Contact Info */}
        <div className="md:w-1/2 p-8 flex flex-col gap-4 flex-grow md:overflow-y-auto">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Contact Us
          </h2>
          <p className="para text-muted-foreground text-center md:text-left text-sm">
            Have questions or need help? Reach out using the info below or send
            a message.
          </p>

          <div className="text-sm md:text-base space-y-3">
            <div>
              <strong>Phone:</strong>
              <p className="font-light text-[14px]">
                <a
                  href="tel:+923329094396"
                  className="block px-2 "
                  style={{ textDecoration: "none" }}
                >
                  +92 332 909 4396
                </a>
                <a
                  href="tel:+923139804396"
                  className="block px-2"
                  style={{ textDecoration: "none" }}
                >
                  +92 313 980 4396
                </a>
              </p>
            </div>
            <div>
              <strong>Email:</strong>
              <p className="para font-light text-[14px]">
                zubielectronics@gmail.com
              </p>
            </div>
            <div>
              <strong>Address:</strong>
              <p className="para font-light text-[14px]">
                Zubi electronics, Tipu Sultan Rd, Peshawar Cantonment, 25000,
                Pakistan.
              </p>
            </div>
          </div>

          <div
            className="rounded-md overflow-hidden shadow-md mt-3"
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
        <div className="w-px bg-gray-400 hidden md:block self-center h-[90%]"></div>

        {/* Right side - Contact Form */}
        <div className="md:w-1/2 p-8 rounded-tr-xl rounded-br-xl flex flex-col flex-grow md:overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Send a Message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 flex-grow"
          >
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="text-sm font-medium leading-none"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md border border-[var(--primary-darkest)] bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-darkest)] md:text-sm mb-0"
                />
              </div>
            ))}

            <div className="flex-grow min-h-[100px]">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none"
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
                className="flex w-full rounded-md border border-[var(--primary-darkest)] bg-transparent px-3 py-1 text-base shadow-sm transition-colors text-[var(--heading)] placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--primary-darkest)] mb-0 resize-none md:text-sm"
              />
            </div>

            <button
              type="submit"
              className="continue-btn inline-flex items-center justify-center gap-2 rounded-md shadow h-9 px-6 w-full text-sm font-medium transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="text-center text-sm mt-6 text-gray-500">
            <p className="para">Remembered your password?</p>
            <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdmin;
