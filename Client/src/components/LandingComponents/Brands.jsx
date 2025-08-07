import Section from "./Section";
import wavesLogo from "../../assets/brands/waves-logo.png";
import dawlanceLogo from "../../assets/brands/dawlance-logo.png";
import ecostarLogo from "../../assets/brands/eco-star-logo.png";
import tclLogo from "../../assets/brands/tcl-logo.png";
import haierLogo from "../../assets/brands/haier-logo.png";
import kenwoodLogo from "../../assets/brands/kenwood-logo.png";
import homageLogo from "../../assets/brands/homage-logo.png";
import anexLogo from "../../assets/brands/anex-logo.png";
import pakfanLogo from "../../assets/brands/pak-fans-logo.png";
import royalfansLogo from "../../assets/brands/royal-fans-logo.png";
import gfcLogo from "../../assets/brands/gfc-fans-logo.png";
import infinixLogo from "../../assets/brands/infinix-logo.png";
import tecnoLogo from "../../assets/brands/tecno-mobile-logo.png";
import vivoLogo from "../../assets/brands/vivo-logo.png";
import hondaLogo from "../../assets/brands/honda-logo.png";
import suzukiLogo from "../../assets/brands/suzuki-logo.png";
import unitedLogo from "../../assets/brands/united-logo.png";
import superpowerLogo from "../../assets/brands/superpower-logo.png";

const Brands = () => {
  const brandList = [
    // Fridges
    { name: "Waves", logo: wavesLogo },
    { name: "Dawlance", logo: dawlanceLogo },

    // LEDs
    { name: "EcoStar", logo: ecostarLogo },
    { name: "TCL", logo: tclLogo },

    // Washing Machines
    { name: "Haier", logo: haierLogo },
    { name: "Kenwood", logo: kenwoodLogo },

    // Ovens / Chulha
    { name: "Homage", logo: homageLogo },
    { name: "Anex", logo: anexLogo },

    // Fans
    { name: "Pak Fan", logo: pakfanLogo },
    { name: "Royal Fans", logo: royalfansLogo },
    { name: "GFC", logo: gfcLogo },

    // Mobiles
    { name: "Infinix", logo: infinixLogo },
    { name: "Tecno", logo: tecnoLogo },
    { name: "Vivo", logo: vivoLogo },

    // Bikes
    { name: "Honda", logo: hondaLogo },
    { name: "Suzuki", logo: suzukiLogo },
    { name: "United", logo: unitedLogo },
    { name: "Super Power", logo: superpowerLogo },
  ];

  return (
    <Section
      title="Trusted Brands"
      content={
        <>
          <div className="text-lg lg:text-xl text-white/80 mb-6">
            We collaborate with top local & global brands across various
            categories—fridges, LEDs, washing machines, ovens, fans, mobiles,
            and bikes.
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-6">
              {brandList.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-white text-center transition-all duration-300 hover:border-gray-300 hover:scale-105 hover:cursor-pointer"
                >
                  <div className="w-full h-20 flex items-center justify-center mb-3">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-base font-medium">{brand.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </>
      }
    />
  );
};

export default Brands;
