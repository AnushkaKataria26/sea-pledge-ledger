import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-carbon-ecosystem.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Blue carbon ecosystems - mangroves and sustainable environment" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-gray-light/80 to-carbon-gray-light/60"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-carbon-gray mb-6">
            Transform Your Impact with{" "}
            <span className="text-carbon-green">Carbon Credits</span>
          </h1>
          <p className="text-xl text-carbon-gray-medium max-w-4xl mx-auto mb-10 leading-relaxed">
            The most comprehensive platform for managing carbon credits, tracking emissions, and
            building a sustainable future. Connect corporates, NGOs, and verifiers in one
            transparent ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-carbon-green hover:bg-carbon-green-dark text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                Start Your Journey
              </Button>
            </Link>
            <Button variant="outline" className="border-carbon-green text-carbon-green hover:bg-carbon-green hover:text-white px-8 py-6 text-lg font-semibold rounded-xl">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-carbon-green mb-2">1M+</div>
              <div className="text-carbon-gray-medium">Tons CO2 Offset</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-carbon-green mb-2">500+</div>
              <div className="text-carbon-gray-medium">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-carbon-green mb-2">50+</div>
              <div className="text-carbon-gray-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-carbon-green mb-2">1000+</div>
              <div className="text-carbon-gray-medium">Organizations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
