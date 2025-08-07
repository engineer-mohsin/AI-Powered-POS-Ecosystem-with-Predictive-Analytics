import { useEffect, useState } from "react";
import bgImage from "../../assets/images/landing-page-bg.webp";
import Hero from "../../components/LandingComponents/Hero";
import Products from "../../components/LandingComponents/Products";
import Brands from "../../components/LandingComponents/Brands";
import Customers from "../../components/LandingComponents/Customers";
import Location from "../../components/LandingComponents/Location";
import Footer from "../../components/LandingComponents/Footer";
import WhatsApp from "../../components/WhatsApp/WhatsApp";

const LandingPage = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100vh
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerHeight = window.innerHeight;

      setShowWhatsApp(scrollY >= triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div
        className="min-h-screen w-full relative bg-fixed bg-cover bg-center select-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Sections */}
        <Hero />
        <div className="space-y-10 relative z-10 pb-12">
          <Products />
          <Brands />
          <Customers />
          <Location />
        </div>
        <Footer />

        {/* ✅ WhatsApp appears after 100vh scroll */}
        {showWhatsApp && <WhatsApp />}
      </div>
    </div>
  );
};

export default LandingPage;
