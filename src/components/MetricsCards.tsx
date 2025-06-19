
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const MetricsCards = () => {
  const portfolioData = [
    {
      title: "Managed portfolio carbon footprint",
      value: "45,048",
      unit: "tCO₂e",
      change: "16%",
      trend: "up",
      fromYear: "from 2019",
      yearlyData: [
        { year: "2022", value: "45,048" },
        { year: "2021", value: "14,111" },
        { year: "2020", value: "32,813" },
        { year: "2019", value: "38,673" }
      ],
      actionText: "See full breakdown of carbon footprint"
    },
    {
      title: "Managed portfolio energy intensity",
      value: "123",
      unit: "kWh/m²",
      change: "22%",
      trend: "down",
      fromYear: "from 2019",
      yearlyData: [
        { year: "2022", value: "123" },
        { year: "2021", value: "128" },
        { year: "2020", value: "135" },
        { year: "2019", value: "157" }
      ],
      actionText: "Download the data"
    },
    {
      title: "Managed portfolio energy consumption",
      value: "47,790,662",
      unit: "kWh",
      change: "27%",
      trend: "down",
      fromYear: "from 2019",
      yearlyData: [
        { year: "2022", value: "47,790,662" },
        { year: "2021", value: "49,324,077" },
        { year: "2020", value: "48,784,205" },
        { year: "2019", value: "65,198,706" }
      ],
      actionText: "Download the data"
    }
  ];

  const getBarWidth = (value: string, maxValue: string) => {
    const numValue = parseInt(value.replace(/,/g, ''));
    const numMaxValue = parseInt(maxValue.replace(/,/g, ''));
    return Math.max((numValue / numMaxValue) * 100, 15);
  };

  return (
    <section className="py-16 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.map((metric, index) => (
            <Card key={index} className="bg-white rounded-2xl border-0 shadow-sm p-8">
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-stone-600 text-base font-normal mb-6 leading-relaxed">
                  {metric.title}
                </h3>
                
                {/* Main value and unit */}
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-light text-stone-900 leading-none">
                    {metric.value}
                  </span>
                  <span className="text-stone-500 text-sm mb-1">
                    {metric.unit}
                  </span>
                </div>
                
                {/* Trend indicator */}
                <div className="flex items-center gap-3">
                  <span className="text-stone-400 text-sm">
                    {metric.fromYear}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className={`text-sm ${
                      metric.trend === 'up' ? 'text-rose-500' : 'text-emerald-500'
                    }`}>
                      {metric.trend === 'up' ? '↗' : '↘'}
                    </span>
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-rose-500' : 'text-emerald-500'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>

              {/* Yearly data bars */}
              <div className="space-y-4 mb-8">
                {metric.yearlyData.map((item, yearIndex) => (
                  <div key={yearIndex} className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-stone-500 text-sm w-10">
                        {item.year}
                      </span>
                      <div className="flex-1 max-w-40">
                        <div className="bg-stone-200 rounded-full h-2 relative">
                          <div 
                            className="bg-rose-400 h-2 rounded-full transition-all duration-700 ease-out"
                            style={{ 
                              width: `${getBarWidth(item.value, metric.yearlyData[0].value)}%`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-stone-700 text-sm font-medium ml-4">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action button */}
              <Button 
                variant="ghost" 
                className="w-full justify-between p-4 h-auto rounded-full border border-stone-200 hover:bg-stone-50 transition-colors group"
              >
                <span className="text-stone-600 text-sm">
                  {metric.actionText}
                </span>
                <div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center group-hover:border-stone-400 transition-colors">
                  {metric.actionText.includes('Download') ? (
                    <Download className="h-4 w-4 text-stone-500 group-hover:text-stone-700 transition-colors" />
                  ) : (
                    <ArrowRight className="h-4 w-4 text-stone-500 group-hover:text-stone-700 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsCards;
