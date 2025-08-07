import Section from "./Section";

const Brands = () => {
  const brandList = [
    // Fridges
    { name: "Waves", logo: "/brands/waves.png" },
    { name: "Dawlance", logo: "/brands/dawlance.png" },
   

    // LEDs
    { name: "EcoStar", logo: "/brands/ecostar.png" },
    { name: "TCL", logo: "/brands/tcl.png" },
    
    // Washing Machines
    { name: "Haier", logo: "/brands/haier.png" },
    { name: "Kenwood", logo: "/brands/kenwood.png" },
    

    // Ovens / Chulha
    { name: "Homage", logo: "/brands/homage.png" },
    { name: "Anex", logo: "/brands/anex.png" },
    

    // Fans
    { name: "Pak Fan", logo: "/brands/pakfan.png" },
    { name: "Royal Fans", logo: "/brands/royalfans.png" },
    { name: "GFC", logo: "/brands/gfc.png" },
    

    // Mobiles
    { name: "Infinix", logo: "/brands/infinix.png" },
    { name: "Tecno", logo: "/brands/tecno.png" },
    { name: "Vivo", logo: "/brands/vivo.png" },

    // Bikes
    { name: "Honda", logo: "/brands/honda.png" },
    { name: "Suzuki", logo: "/brands/suzuki.png" },

    { name: "United", logo: "/brands/united.png" },
    { name: "Super Power", logo: "/brands/superpower.png" },
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
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-white text-center transition-all duration-300 hover:border-gray-300 hover:scale-105 hover:cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 mx-auto mb-4 object-contain"
                  />
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
