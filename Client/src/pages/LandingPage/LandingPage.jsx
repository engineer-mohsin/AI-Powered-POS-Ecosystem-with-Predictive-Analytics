import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/landing-page-bg.webp";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const LandingPage = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative select-none"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Radial Vignette Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Glassy Content Card */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-center space-y-6 w-full max-w-[500px] lg:max-w-[700px] px-6 lg:px-10 py-10 lg:py-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          {/* Welcome Text */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="text-white text-2xl lg:text-3xl font-medium tracking-wide">
              Welcome to
            </h1>

            {/* Animated Logo Heading */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="text-white text-4xl lg:text-6xl font-bold mt-2 tracking-wider drop-shadow-lg"
            >
              Zubi Electronics
            </motion.h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-white/80 text-base lg:text-xl leading-relaxed"
          >
            AI-Powered POS Ecosystem with Predictive Analytics
          </motion.p>

          {/* Buttons */}
          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-y-3 sm:gap-y-0 sm:gap-x-4 pt-4"
          >
            {[
              { path: "/sign-in", label: "Sign In" },
              { path: "/dashboard", label: "Dashboard" },
              { path: "/admin", label: "Admin" },
            ].map(({ path, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to={path}
                  className="block w-full bg-white/10 text-white font-medium py-3 px-6 rounded-xl border border-white/20 text-center backdrop-blur-md"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
