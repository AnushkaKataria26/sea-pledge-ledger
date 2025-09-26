import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-carbon-ecosystem.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Blue carbon ecosystems - mangroves and sustainable environment" 
          className="w-full h-full object-cover opacity-12 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-emerald-50/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05)_0%,transparent_40%)]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-400/8 to-emerald-400/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto text-center relative z-10 py-20">
        <div className="animate-fade-in max-w-7xl mx-auto">
          {/* Enhanced heading with better typography */}
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-100/80 backdrop-blur-sm rounded-full text-emerald-700 font-medium text-lg mb-8 border border-emerald-200/50">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
              Blockchain-Powered Carbon Management
            </div>
            <h1 className="font-space text-7xl md:text-8xl lg:text-9xl font-bold text-slate-900 mb-8 leading-none tracking-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent relative">
                Impact
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full transform scale-x-0 animate-[scale-x_2s_ease-out_0.5s_forwards] origin-left"></div>
              </span>
            </h1>
            <h2 className="font-space text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-700 mb-4">
              with Carbon Credits
            </h2>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto mb-16 leading-relaxed font-light">
            The most comprehensive platform for managing carbon credits, tracking emissions, and
            building a sustainable future. Connect corporates and NGOs in one
            <span className="font-semibold text-emerald-700"> transparent ecosystem</span>.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Link to="/login" className="group">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 border-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Start Your Journey</span>
              </Button>
            </Link>
            <Button className="border-2 border-emerald-600 bg-white/80 backdrop-blur-sm text-emerald-700 hover:bg-emerald-50 px-12 py-8 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="mr-3">▶</span>
              Watch Demo
            </Button>
          </div>
          
          {/* Enhanced Stats with better design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "1M+", label: "Tons CO2 Offset", color: "emerald" },
              { number: "500+", label: "Active Projects", color: "blue" },
              { number: "50+", label: "Countries", color: "green" },
              { number: "1000+", label: "Organizations", color: "teal" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-center p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`text-5xl md:text-6xl font-black font-space mb-4 bg-gradient-to-br from-${stat.color}-600 to-${stat.color}-700 bg-clip-text text-transparent relative`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-semibold text-lg tracking-wide relative">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};