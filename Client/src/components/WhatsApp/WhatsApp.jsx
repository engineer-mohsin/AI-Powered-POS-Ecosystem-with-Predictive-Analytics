import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "03329094396";
  const whatsappLink = `https://wa.me/92${phoneNumber.slice(1)}`; // removes leading 0 and adds country code +92

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsApp;
