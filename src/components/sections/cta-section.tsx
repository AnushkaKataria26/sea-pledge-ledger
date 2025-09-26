import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-carbon-green via-carbon-green-dark to-carbon-green overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_40%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in max-w-5xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Make a{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Real Impact?
            </span>
          </h2>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            Join thousands of organizations already using Carbonix to build a sustainable future and track their carbon footprint with blockchain transparency
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/login" className="hover-scale inline-block">
              <Button className="bg-white text-carbon-green hover:bg-white/90 px-16 py-8 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-white/20 transition-all border-2 border-white/20 hover:border-white/40">
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-12 py-8 text-xl font-semibold rounded-2xl transition-all hover-scale">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-white/70 text-lg mb-8">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-white/80 font-semibold text-lg">500+ Projects</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/80 font-semibold text-lg">1M+ Tons CO2</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/80 font-semibold text-lg">50+ Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};