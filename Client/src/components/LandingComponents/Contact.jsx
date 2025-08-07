import { useState } from "react";
import Section from "./Section";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission here (e.g., send to API or email service)
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section
      title="Contact Us"
      content={
        <>
          <p>Email: <a href="mailto:support@zubielectronics.com" className="underline">support@zubielectronics.com</a></p>
          <p>Phone: <a href="tel:03123456789" className="underline">(0312) 345-6789</a></p>
        </>
      }
    >
      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-xl mx-auto space-y-6 text-left"
      >
        <div>
          <label className="block text-white mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-white mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-white mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-300 text-center pt-4">
            ✅ Your message has been sent!
          </p>
        )}
      </form>
    </Section>
  );
};

export default Contact;
