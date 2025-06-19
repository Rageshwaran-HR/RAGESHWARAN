
import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { useState } from "react";

const BrandKitSwitcher = () => {
  const [selectedBrand, setSelectedBrand] = useState('The Agency');

  const brands = [
    { 
      name: 'ECorp', 
      color: 'bg-emerald-500',
      selected: false 
    },
    { 
      name: 'ICorp', 
      color: 'bg-orange-500',
      selected: false 
    },
    { 
      name: 'The Agency', 
      color: 'bg-rose-500',
      selected: true 
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-stone-50">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 rounded-3xl shadow-xl border-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="mb-6">
            <h3 className="text-2xl font-light mb-6">Brand Kits</h3>
          </div>
          
          <div className="space-y-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                onClick={() => setSelectedBrand(brand.name)}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedBrand === brand.name
                    ? 'border-blue-500 bg-slate-800/50'
                    : 'border-slate-700 hover:border-slate-600 bg-slate-800/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    {selectedBrand === brand.name && (
                      <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded"></div>
                      </div>
                    )}
                    {selectedBrand !== brand.name && (
                      <div className="w-5 h-5 border-2 border-slate-600 rounded"></div>
                    )}
                    <div className={`w-4 h-4 ${brand.color} rounded-full`}></div>
                    <span className="text-lg font-light">{brand.name}</span>
                  </div>
                </div>
                <Settings className="h-5 w-5 text-slate-400" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BrandKitSwitcher;
