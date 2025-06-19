import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const BrandKitSwitcher = () => {
  const { themeColor: theme } = useContext(ThemeContext); // Access themeColor as theme from context
  const [selectedBrand, setSelectedBrand] = useState("SustainIQ");

  const brands = [
    {
      name: "SustainIQ",
      color: "bg-emerald-500",
      description: "Empowering organizations with tools to achieve sustainability goals.",
    },
    {
      name: "EcoCorp",
      color: "bg-orange-500",
      description: "Innovative solutions for reducing environmental impact.",
    },
    {
      name: "GreenTech",
      color: "bg-rose-500",
      description: "Leading the way in renewable energy and green technology.",
    },
  ];

  return (
    <section
      className={`py-20 px-6 ${
        theme === "light"
          ? "bg-gradient-to-br from-emerald-50 to-stone-50"
          : "bg-gradient-to-br from-stone-800 to-stone-900"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <Card
          className={`p-8 rounded-3xl shadow-xl border-0 ${
            theme === "light"
              ? "bg-white text-stone-800"
              : "bg-gradient-to-br from-slate-900 to-slate-800 text-white"
          }`}
        >
          <div className="mb-6">
            <h3
              className={`text-2xl font-light mb-6 ${
                theme === "light" ? "text-stone-800" : "text-white"
              }`}
            >
              Select Your Brand Kit
            </h3>
            <p
              className={`text-lg ${
                theme === "light" ? "text-stone-600" : "text-slate-400"
              }`}
            >
              Customize your experience by selecting a brand kit tailored to your organization.
            </p>
          </div>

          <div className="space-y-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                onClick={() => setSelectedBrand(brand.name)}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedBrand === brand.name
                    ? theme === "light"
                      ? "border-blue-500 bg-blue-50"
                      : "border-blue-500 bg-slate-800/50"
                    : theme === "light"
                    ? "border-stone-300 hover:border-stone-400 bg-stone-100"
                    : "border-slate-700 hover:border-slate-600 bg-slate-800/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {selectedBrand === brand.name && (
                      <div
                        className={`w-5 h-5 ${
                          theme === "light" ? "bg-blue-500" : "bg-blue-500"
                        } rounded flex items-center justify-center`}
                      >
                        <div
                          className={`w-2 h-2 ${
                            theme === "light" ? "bg-white" : "bg-white"
                          } rounded`}
                        ></div>
                      </div>
                    )}
                    {selectedBrand !== brand.name && (
                      <div
                        className={`w-5 h-5 border-2 ${
                          theme === "light"
                            ? "border-stone-300"
                            : "border-slate-600"
                        } rounded`}
                      ></div>
                    )}
                    <div className={`w-4 h-4 ${brand.color} rounded-full`}></div>
                    <span
                      className={`text-lg font-light ${
                        theme === "light" ? "text-stone-800" : "text-white"
                      }`}
                    >
                      {brand.name}
                    </span>
                  </div>
                </div>
                <Settings
                  className={`h-5 w-5 ${
                    theme === "light" ? "text-stone-400" : "text-slate-400"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h4
              className={`text-xl font-medium ${
                theme === "light" ? "text-stone-800" : "text-white"
              }`}
            >
              Selected Brand: {selectedBrand}
            </h4>
            <p
              className={`text-lg ${
                theme === "light" ? "text-stone-600" : "text-slate-400"
              }`}
            >
              {brands.find((brand) => brand.name === selectedBrand)?.description}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BrandKitSwitcher;
