
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Full platform access",
    "24/7 support included"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-stone-800 to-stone-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
          Ready to <span className="text-emerald-400">transform</span> your sustainability journey?
        </h2>
        
        <p className="text-xl text-stone-300 font-light mb-8 max-w-2xl mx-auto">
          Join leading organizations using SustainIQ to track, reduce, and thrive in their sustainability efforts.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-stone-300">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Start your free trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white px-8 py-6 text-lg rounded-full"
          >
            Schedule a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
