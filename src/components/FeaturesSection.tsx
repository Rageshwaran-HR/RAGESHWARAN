
import { Card } from "@/components/ui/card";
import { BarChart3, TrendingDown, Zap, Shield, Globe, Users } from "lucide-react";

const FeaturesSection = () => {
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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Everything you need for <br />
            <span className="text-emerald-600">sustainable success</span>
          </h2>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
            Comprehensive tools and insights to help your organization achieve its sustainability goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 rounded-3xl border-0 bg-gradient-to-br from-stone-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-3">{feature.title}</h3>
                <p className="text-stone-600 font-light leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
