// components/Customers.jsx
import Section from "./Section";
import client_1 from "../../assets/clients/engr-mohsin.png"
const Customers = () => {
  const customerList = [
    {
      name: "Engr. Mohsin",
      image: client_1,
      review: "This POS system revolutionized my grocery store's billing. Simple and powerful!",
    },
    {
      name: "Engr. Mohsin",
      image: client_1,
      review: "This POS system revolutionized my grocery store's billing. Simple and powerful!",
    },
    {
      name: "Engr. Mohsin",
      image: client_1,
      review: "This POS system revolutionized my grocery store's billing. Simple and powerful!",
    },
    
  ];

  return (
    <Section
      title="Happy Customers"
      content={
        <>
          <div className="text-lg lg:text-xl text-white/80 mb-6">
            Over 3,000+ satisfied businesses across Pakistan use our smart POS systems.
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {customerList.map((customer, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-white text-center transition-all duration-300 hover:border-gray-300 hover:scale-105 hover:cursor-pointer"
                >
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="h-16 w-16 rounded-full mx-auto mb-4 object-cover border border-white/30"
                  />
                  <h3 className="text-lg font-semibold mb-2">{customer.name}</h3>
                  <p className="text-sm text-white/80 italic">"{customer.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </>
      }
    />
  );
};

export default Customers;
