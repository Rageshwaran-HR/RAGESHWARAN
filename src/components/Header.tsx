import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-rose-500 rounded-lg"></div>
            <span className="text-2xl font-light text-stone-800">SustainIQ</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-stone-600 hover:text-stone-800 transition-colors font-light">Hero</a>
            <a href="#metrics" className="text-stone-600 hover:text-stone-800 transition-colors font-light">Metrics</a>
            <a href="#features" className="text-stone-600 hover:text-stone-800 transition-colors font-light">Features</a>
            <a href="#carbon-emissions" className="text-stone-600 hover:text-stone-800 transition-colors font-light">Carbon Emissions</a>
          </nav>
          
          <Button 
            variant="outline" 
            className="rounded-full px-6 border-stone-300 hover:bg-stone-50"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
