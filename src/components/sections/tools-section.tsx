import { Calculator, BarChart3, Shield, ShoppingCart } from "lucide-react";

const tools = [
  {
    title: "Carbon Calculator",
    description: "Calculate emissions across all scopes with industry-specific factors",
    icon: Calculator,
    color: "green"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time insights and trends for informed decision making",
    icon: BarChart3,
    color: "blue"
  },
  {
    title: "Marketplace",
    description: "Trade verified carbon credits with transparent pricing",
    icon: ShoppingCart,
    color: "purple"
  },
  {
    title: "Blockchain Security",
    description: "Immutable records and transparent verification process",
    icon: Shield,
    color: "orange"
  }
];

export const ToolsSection = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-emerald-400 font-semibold text-lg mb-8 border border-white/10">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            Enterprise-Grade Platform
          </div>
          <h2 className="font-space text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Powerful Tools &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Advanced features to streamline your carbon management workflow with blockchain transparency and AI-powered insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center h-full relative overflow-hidden">
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className={`w-20 h-20 mx-auto mb-8 rounded-3xl flex items-center justify-center relative ${
                  tool.color === 'green' ? 'bg-gradient-to-br from-emerald-500 to-green-600' :
                  tool.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                  tool.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-pink-600' :
                  'bg-gradient-to-br from-orange-500 to-red-600'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-space text-2xl font-bold text-white mb-6 relative">{tool.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg relative">{tool.description}</p>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                  tool.color === 'green' ? 'bg-gradient-to-r from-emerald-500 to-green-600' :
                  tool.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-600' :
                  tool.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-pink-600' :
                  'bg-gradient-to-r from-orange-500 to-red-600'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};