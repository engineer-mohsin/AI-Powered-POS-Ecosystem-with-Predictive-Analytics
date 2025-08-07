import bgImage from "../../assets/images/landing-page-bg.webp";
import Hero from "../../components/LandingComponents/Hero";
import Products from "../../components/LandingComponents/Products";
import Brands from "../../components/LandingComponents/Brands";
import Customers from "../../components/LandingComponents/Customers";
import Contact from "../../components/LandingComponents/Contact";
import Location from "../../components/LandingComponents/Location";
import Footer from "../../components/LandingComponents/Footer";

const LandingPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div
        className="min-h-screen w-full relative bg-fixed bg-cover bg-center select-none px-3"
        style={{ backgroundImage: `url(${bgImage})` }}
      >

        {/* Sections */}
        <Hero />
        <div className="space-y-10 relative z-10 pb-12">
          <Products />
          <Brands />
          <Customers />
          <Contact />
          <Location />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
