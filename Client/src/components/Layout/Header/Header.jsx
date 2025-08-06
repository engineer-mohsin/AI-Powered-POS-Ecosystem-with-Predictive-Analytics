import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../Theme/Theme";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 right-0 h-16 z-20 shadow-sm transition-all duration-300 ${
        isDark ? "bg-dark-700" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-full px-6">
        <h1 className="font-semibold text-2xl" style={{ color: "var(--heading)" }}>
          Zubi Electronics
        </h1>

        {/* Hide on screens smaller than sm */}
        <div className="hidden sm:flex items-center space-x-4 relative">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full cursor-pointer hover:bg-[--aside] transition-colors duration-200"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-[--aside]" />
            ) : (
              <Moon className="h-5 w-5 text-[--aside]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
