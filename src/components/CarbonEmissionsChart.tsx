import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ArrowDown } from "lucide-react";
import { useState, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const CarbonEmissionsChart = () => {
  const { themeColor: theme } = useContext(ThemeContext); // Access themeColor as theme from context
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
    <section
      className={`py-20 px-6 ${
        theme === "light" ? "bg-gradient-to-br from-stone-50 to-rose-50" : "bg-gradient-to-br from-stone-800 to-stone-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <Card
          className={`p-8 rounded-3xl shadow-xl border-0 ${
            theme === "light" ? "bg-white/80 backdrop-blur-sm" : "bg-stone-700/80 backdrop-blur-sm"
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
            {/* Filters and Key Section */}
            <div className="flex flex-col gap-6">
              <div>
                <span
                  className={`text-sm mb-3 block ${
                    theme === "light" ? "text-stone-600" : "text-stone-400"
                  }`}
                >
                  Filter by Type
                </span>
                <div className="flex gap-3">
                  {['Refurbishment', 'New build', 'All'].map((filter) => (
                    <Button
                      key={filter}
                      variant={activeFilter === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full px-4 py-2 text-sm ${
                        activeFilter === filter
                          ? theme === "light"
                            ? "bg-rose-600 hover:bg-rose-700 text-white"
                            : "bg-rose-500 hover:bg-rose-600 text-white"
                          : theme === "light"
                          ? "border-stone-300 hover:bg-stone-50"
                          : "border-stone-500 hover:bg-stone-600"
                      }`}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <span
                  className={`text-sm mb-3 block ${
                    theme === "light" ? "text-stone-600" : "text-stone-400"
                  }`}
                >
                  Filter by Status
                </span>
                <div className="flex gap-3">
                  {['Complete', 'Estimate'].map((status) => (
                    <Button
                      key={status}
                      variant={statusFilter === status ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStatusFilter(status)}
                      className={`rounded-full px-4 py-2 text-sm ${
                        statusFilter === status
                          ? theme === "light"
                            ? "bg-rose-600 hover:bg-rose-700 text-white"
                            : "bg-rose-500 hover:bg-rose-600 text-white"
                          : theme === "light"
                          ? "border-stone-300 hover:bg-stone-50"
                          : "border-stone-500 hover:bg-stone-600"
                      }`}
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <span
                  className={`text-sm font-medium ${
                    theme === "light" ? "text-stone-600" : "text-stone-400"
                  }`}
                >
                  Key
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-0.5 border-t-2 border-dashed ${
                        theme === "light" ? "border-stone-400" : "border-stone-500"
                      }`}
                    ></div>
                    <span
                      className={`text-sm ${
                        theme === "light" ? "text-stone-600" : "text-stone-400"
                      }`}
                    >
                      500 kgCO₂e/m² - Embodied Carbon Target 2030
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-0.5 ${
                        theme === "light" ? "bg-stone-400" : "bg-stone-500"
                      }`}
                    ></div>
                    <span
                      className={`text-sm ${
                        theme === "light" ? "text-stone-600" : "text-stone-400"
                      }`}
                    >
                      600 kgCO₂e/m² - Embodied Carbon Target 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading Section */}
            <div className="text-right">
              <h2
                className={`text-6xl font-light mb-2 ${
                  theme === "light" ? "text-stone-800" : "text-stone-200"
                }`}
              >
                EMBODIED
              </h2>
              <h2
                className={`text-6xl font-light mb-2 ${
                  theme === "light" ? "text-rose-600" : "text-rose-400"
                }`}
              >
                CARBON
              </h2>
              <h2
                className={`text-6xl font-light mb-4 ${
                  theme === "light" ? "text-stone-600" : "text-stone-400"
                }`}
              >
                EMISSIONS
              </h2>
              <p
                className={`text-lg ${
                  theme === "light" ? "text-stone-500" : "text-stone-400"
                }`}
              >
                Intensity measured by kgCO₂e/m²
              </p>

              {/* Download Button */}
              <Button
                variant="outline"
                className={`rounded-full px-6 py-3 flex items-center gap-2 mt-4 ${
                  theme === "light"
                    ? "border-stone-300 hover:bg-stone-50"
                    : "border-stone-500 hover:bg-stone-600"
                }`}
              >
                Download the data
                <ArrowDown
                  className={`h-4 w-4 ${
                    theme === "light" ? "text-stone-600" : "text-stone-300"
                  }`}
                />
              </Button>
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
                  tick={{
                    fontSize: 12,
                    fill: theme === "light" ? "#78716c" : "#d1d5db"
                  }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: theme === "light" ? "#78716c" : "#d1d5db"
                  }}
                  domain={[0, 1200]}
                />
                <ReferenceLine
                  y={500}
                  stroke={theme === "light" ? "#78716c" : "#d1d5db"}
                  strokeDasharray="5 5"
                />
                <ReferenceLine
                  y={600}
                  stroke={theme === "light" ? "#78716c" : "#d1d5db"}
                />
                <Bar
                  dataKey="value"
                  fill={theme === "light" ? "#a78bfa" : "#7c3aed"}
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
