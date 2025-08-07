// components/Location.jsx
import Section from "./Section";

const Location = () => (
  <Section
    title="Our Location"
    content={
      <>
        <p className="pb-5">Visit us at Fawara Chowk, Main Saddar, Peshawar, Pakistan</p>

        {/* Responsive Map with max-height 60vh */}
        <div className="w-full mt-4 rounded-md overflow-hidden shadow-md max-h-[60vh] h-[60vh] relative">
          <iframe
            title="Zubi Electronics Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8111735067864!2d71.5399838!3d33.99738359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917ab3f41fdc7%3A0xa5152a9b8582e87a!2sZubi%20electronics!5e0!3m2!1sen!2s!4v1747519124081!5m2!1sen!2s"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </>
    }
  />
);

export default Location;
