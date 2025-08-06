import { Link } from "react-router-dom";
import bgImage from "../../assets/images/landing-bg.jpg"; // Replace with your image path

const Home = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Welcome to Zubi Electronics
          </h1>
          <p className="text-white text-lg md:text-xl">
            AI-Powered POS Ecosystem with Predictive Analytics
          </p>
          <Link
            to="/sign-in"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
