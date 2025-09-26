import { Building2, Leaf, TreePine, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react";

const corporateFeatures = [
  {
    title: "Real-time Emissions Tracking",
    description: "Monitor your carbon footprint across all operations with AI-powered analytics and automated reporting systems.",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Compliance & Reporting",
    description: "Automated ESG reporting that meets international standards including GRI, TCFD, and CDP frameworks.",
    icon: Shield,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Carbon Marketplace Access",
    description: "Direct access to verified carbon credits with transparent pricing and instant blockchain verification.",
    icon: Zap,
    gradient: "from-orange-500 to-red-500"
  }
];

const ngoFeatures = [
  {
    title: "Project Verification",
    description: "Advanced MRV systems with satellite monitoring and IoT sensors for accurate carbon sequestration measurement.",
    icon: TreePine,
    gradient: "from-emerald-500 to-green-500"
  },
  {
    title: "Community Impact Tracking",
    description: "Monitor social and environmental benefits beyond carbon, including biodiversity and local community development.",
    icon: Users,
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Global Network Access",
    description: "Connect with international partners, funders, and corporate buyers through our verified platform ecosystem.",
    icon: Globe,
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.02)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100/80 rounded-full text-emerald-700 font-semibold text-lg mb-8">
            <Leaf className="w-5 h-5 mr-2" />
            Designed for Every Stakeholder
          </div>
          <h2 className="font-space text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Powerful Features for
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent block">
              Every Mission
            </span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're a corporation reducing emissions or an NGO protecting ecosystems, 
            our platform adapts to your unique sustainability goals.
          </p>
        </div>

        {/* Corporate Features */}
        <div className="mb-24">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-space text-4xl font-bold text-slate-900 mb-2">For Corporations</h3>
              <p className="text-xl text-slate-600">Streamline your sustainability journey with enterprise-grade tools</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {corporateFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 h-full relative overflow-hidden group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 relative`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-space text-2xl font-bold text-slate-900 mb-4 relative">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg relative">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NGO Features */}
        <div>
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mr-6">
              <TreePine className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-space text-4xl font-bold text-slate-900 mb-2">For NGOs & Communities</h3>
              <p className="text-xl text-slate-600">Amplify your conservation impact with transparent verification</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ngoFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 h-full relative overflow-hidden group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 relative`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-space text-2xl font-bold text-slate-900 mb-4 relative">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-lg relative">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};