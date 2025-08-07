import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Section = ({ title, content, children }) => (
  <section className="min-h-[80vh] w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-6 py-20 relative z-10 bg-white/10 backdrop-blur-md rounded-2xl">
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white text-center w-full px-6 py-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
    >
      <h2 className="text-3xl lg:text-5xl font-bold mb-6">{title}</h2>

      {/* 🔧 Wrap content in a div instead of <p> */}
      <div className="text-lg lg:text-xl text-white/80 mb-10">
        {content}
      </div>

      {children}
    </motion.div>
  </section>
);

export default Section;
