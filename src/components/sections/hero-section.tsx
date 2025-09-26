import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-carbon-ecosystem.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-carbon-gray-light via-white to-carbon-green-light/20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Blue carbon ecosystems - mangroves and sustainable environment" 
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-carbon-green-light/30"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-carbon-gray mb-8 leading-tight">
            Transform Your Impact with{" "}
            <span className="text-carbon-green bg-gradient-to-r from-carbon-green to-carbon-green-dark bg-clip-text text-transparent">
              Carbon Credits
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-carbon-gray-medium max-w-4xl mx-auto mb-12 leading-relaxed">
            The most comprehensive platform for managing carbon credits, tracking emissions, and
            building a sustainable future. Connect corporates and NGOs in one
            transparent ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/login" className="hover-scale">
              <Button className="bg-carbon-green hover:bg-carbon-green-dark text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                Start Your Journey
              </Button>
            </Link>
            <Button variant="outline" className="border-2 border-carbon-green text-carbon-green hover:bg-carbon-green hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all hover-scale">
              Watch Demo
            </Button>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover-scale">
              <div className="text-4xl md:text-5xl font-bold text-carbon-green mb-3">1M+</div>
              <div className="text-carbon-gray font-medium">Tons CO2 Offset</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover-scale">
              <div className="text-4xl md:text-5xl font-bold text-carbon-green mb-3">500+</div>
              <div className="text-carbon-gray font-medium">Active Projects</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover-scale">
              <div className="text-4xl md:text-5xl font-bold text-carbon-green mb-3">50+</div>
              <div className="text-carbon-gray font-medium">Countries</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover-scale">
              <div className="text-4xl md:text-5xl font-bold text-carbon-green mb-3">1000+</div>
              <div className="text-carbon-gray font-medium">Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};