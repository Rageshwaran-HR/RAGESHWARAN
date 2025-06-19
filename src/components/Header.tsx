import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext"; // Import the ThemeContext

const Header = () => {
  const { themeColor: theme, setThemeColor } = useContext(ThemeContext); // Access themeColor and setThemeColor from context

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${
        theme === "light"
          ? "bg-white/80 border-stone-200"
          : "bg-stone-800/80 border-stone-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-lg ${
                theme === "light"
                  ? "bg-gradient-to-br from-emerald-500 to-rose-500"
                  : "bg-gradient-to-br from-purple-500 to-indigo-500"
              }`}
            ></div>
            <span
              className={`text-2xl font-light ${
                theme === "light" ? "text-stone-800" : "text-stone-200"
              }`}
            >
              SustainIQ
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Hero", "Metrics", "Features", "Carbon Emissions"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`transition-colors font-light ${
                  theme === "light"
                    ? "text-stone-600 hover:text-stone-800"
                    : "text-stone-300 hover:text-stone-100"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className={`rounded-full px-6 ${
                theme === "light"
                  ? "border-stone-300 hover:bg-stone-50"
                  : "border-stone-500 hover:bg-stone-700"
              }`}
            >
              Sign In
            </Button>
            <button
              onClick={() => setThemeColor(theme === "light" ? "dark" : "light")}
              className={`rounded-full px-4 py-2 border transition ${
                theme === "light"
                  ? "border-stone-300 hover:bg-stone-50"
                  : "border-stone-500 hover:bg-stone-700"
              }`}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
