import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ArrowDown } from "lucide-react";
import { useState } from "react";

const CarbonEmissionsChart = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('Complete');

  const data = [
    { name: 'Project A', value: 540, category: 'Refurbishment' },
    { name: 'Project B', value: 278, category: 'New build' },
    { name: 'Project C', value: 875, category: 'Refurbishment' },
    { name: 'Project D', value: 617, category: 'New build' },
    { name: 'Project E', value: 506, category: 'Refurbishment' },
    { name: 'Project F', value: 36, category: 'New build' },
    { name: 'Project G', value: 185, category: 'Refurbishment' },
    { name: 'Project H', value: 191, category: 'New build' },
    { name: 'Project I', value: 122, category: 'Refurbishment' },
    { name: 'Project J', value: 550, category: 'New build' },
    { name: 'Project K', value: 881, category: 'Refurbishment' },
    { name: 'Project L', value: 539, category: 'New build' },
    { name: 'Project M', value: 269, category: 'Refurbishment' },
    { name: 'Project N', value: 29, category: 'New build' },
    { name: 'Project O', value: 82, category: 'Refurbishment' },
    { name: 'Project P', value: 44, category: 'New build' },
    { name: 'Project Q', value: 109, category: 'Refurbishment' },
    { name: 'Project R', value: 106, category: 'New build' },
    { name: 'Project S', value: 607, category: 'Refurbishment' },
    { name: 'Project T', value: 528, category: 'New build' },
  ];

  const filteredData = activeFilter === 'All' ? data : data.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-stone-50 to-rose-50">
      <div className="max-w-7xl mx-auto">
        <Card className="p-8 rounded-3xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            {/* Heading Section */}
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
              <h2 className="text-4xl font-light text-stone-800 mb-4">
                <span className="text-6xl font-light block lg:inline">EMBODIED</span><br />
                <span className="text-rose-600 block lg:inline">CARBON</span><br />
                <span className="text-stone-600 block lg:inline">EMISSIONS</span>
              </h2>
              <p className="text-stone-500 text-lg">Intensity measured by kgCO₂e/m²</p>
            </div>

            {/* Download Button */}
            <div className="flex flex-col gap-4">
              <Button 
                variant="outline" 
                className="rounded-full px-6 py-3 border-stone-300 hover:bg-stone-50 flex items-center gap-2"
              >
                Download the data
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Filters Section */}
          <div className="mb-8 space-y-4">
            <div>
              <span className="text-sm text-stone-600 mb-3 block">Filter by</span>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm text-stone-700 font-medium">Type</span>
                {['Refurbishment', 'New build', 'All'].map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-sm ${
                      activeFilter === filter 
                        ? 'bg-rose-600 hover:bg-rose-700 text-white' 
                        : 'border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm text-stone-700 font-medium">Status</span>
                {['Complete', 'Estimate'].map((status) => (
                  <Button
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter(status)}
                    className={`rounded-full px-4 py-2 text-sm ${
                      statusFilter === status 
                        ? 'bg-rose-600 hover:bg-rose-700 text-white' 
                        : 'border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Legend Section */}
          <div className="mb-6 space-y-2">
            <div className="text-sm text-stone-600 font-medium">Key</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-4 h-0.5 border-t-2 border-dashed border-stone-400"></div>
                <span className="text-sm text-stone-600">500 kgCO₂e/m² - Embodied Carbon Target 2030</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-0.5 bg-stone-400"></div>
                <span className="text-sm text-stone-600">600 kgCO₂e/m² - Embodied Carbon Target 2025</span>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#78716c' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#78716c' }}
                  domain={[0, 1200]}
                />
                <ReferenceLine y={500} stroke="#78716c" strokeDasharray="5 5" />
                <ReferenceLine y={600} stroke="#78716c" />
                <Bar 
                  dataKey="value" 
                  fill="#a78bfa" 
                  radius={[4, 4, 0, 0]}
                  className="hover:opacity-80 transition-opacity"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CarbonEmissionsChart;
