// components/Products.jsx
import Section from "./Section";

const products = [
  {
    id: 1,
    name: "Mobile Phones & Accessories",
    description:
      "Smartphones, feature phones, chargers, handsfree devices, and phone accessories.",
  },
  {
    id: 2,
    name: "Home & Kitchen Appliances",
    description:
      "Refrigerators, ovens, washing machines, dryers, juicers, irons, and more essentials.",
  },
  {
    id: 3,
    name: "Fans & Cooling Solutions",
    description:
      "Ceiling fans, pedestal fans, wall fans, exhaust fans, and cooling devices.",
  },
  {
    id: 4,
    name: "LEDs & Display Devices",
    description:
      "LED TVs, smart TVs, multimedia displays, and home entertainment units.",
  },
  {
    id: 5,
    name: "Power & Solar Solutions",
    description:
      "UPS, batteries, inverters, solar panels, and voltage stabilizers.",
  },
  {
    id: 6,
    name: "Bikes & Smart Gadgets",
    description:
      "Electric bikes, bicycles, smart devices, and modern lifestyle electronics.",
  },
];

const Products = () => (
  <Section
    title="Our Products"
    content="Explore a wide range of electronic equipment designed for homes, businesses, and personal use."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 hover:cursor-pointer justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-left shadow-md text-white hover:scale-[1.03] transition"
        >
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-white/80">{product.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Products;
