import { Card } from "@/components/ui/card";
import { BarChart3, TrendingDown, Zap, Shield, Globe, Users } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const FeaturesSection = () => {
  const { themeColor: theme } = useContext(ThemeContext); // Access themeColor as theme from context

  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights into your carbon footprint with live data visualization and automated reporting."
    },
    {
      icon: TrendingDown,
      title: "Carbon Reduction",
      description: "AI-powered recommendations to reduce emissions by up to 40% with actionable sustainability strategies."
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "Optimize energy consumption across your portfolio with smart monitoring and predictive analytics."
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Stay ahead of regulations with automated compliance reporting and ESG framework alignment."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Certified to international standards including GHG Protocol, CDP, and TCFD frameworks."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Streamline sustainability efforts across teams with role-based access and workflow management."
    }
  ];

  return (
    <section
      className={`py-20 px-6 ${
        theme === "light" ? "bg-white" : "bg-stone-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-light mb-6 ${
              theme === "light" ? "text-stone-800" : "text-stone-200"
            }`}
          >
            Everything you need for <br />
            <span
              className={`${
                theme === "light" ? "text-emerald-600" : "text-emerald-400"
              }`}
            >
              sustainable success
            </span>
          </h2>
          <p
            className={`text-xl font-light max-w-2xl mx-auto ${
              theme === "light" ? "text-stone-600" : "text-stone-400"
            }`}
          >
            Comprehensive tools and insights to help your organization achieve
            its sustainability goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                theme === "light"
                  ? "bg-gradient-to-br from-stone-50 to-white"
                  : "bg-gradient-to-br from-stone-700 to-stone-800"
              }`}
            >
              <div className="mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                    theme === "light"
                      ? "bg-gradient-to-br from-emerald-500 to-emerald-600"
                      : "bg-gradient-to-br from-emerald-400 to-emerald-500"
                  }`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${
                      theme === "light" ? "text-white" : "text-stone-200"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-medium mb-3 ${
                    theme === "light" ? "text-stone-800" : "text-stone-200"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`font-light leading-relaxed ${
                    theme === "light" ? "text-stone-600" : "text-stone-400"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
