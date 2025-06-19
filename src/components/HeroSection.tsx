
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-32 w-40 h-40 bg-rose-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-emerald-400/20 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-blue-300/10 rounded-full blur-2xl"></div>
      
      {/* Floating UI elements */}
      <div className="absolute top-32 right-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
        <div className="text-white text-sm">Data accuracy: 99.9%</div>
        <div className="text-blue-200 text-xs">Real-time insights</div>
      </div>
      
      <div className="absolute bottom-32 left-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
        <div className="flex items-center gap-2 text-white text-sm">
          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
          Carbon tracking active
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
        <div className="flex items-center gap-6 text-white text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.8 rating on</span>
            <span className="font-medium">Capterra</span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>350+ reviews on</span>
            <span className="font-medium">G2</span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>550+ reviews on</span>
            <span className="font-medium">TrustPilot</span>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight leading-tight">
          Create reports, forecasts,<br />
          <span className="text-blue-200">dashboards & consolidations</span>
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Now with AI-insights
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-blue-100 hover:bg-white text-blue-900 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Start 14-day free trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg"
            className="text-blue-100 hover:text-white hover:bg-white/10 px-6 py-6 text-lg rounded-xl border border-white/20"
          >
            📅 See what we do
          </Button>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
          {['IBDO', 'Grant Thornton', 'ATARI', 'Ocean Basket', 'Breadline', 'Gravita', 'USA', 'forvis mazars'].map((company, index) => (
            <div key={index} className="text-white/70 text-sm font-medium text-center">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
