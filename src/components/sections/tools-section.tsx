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
    <section className="py-24 px-4 bg-carbon-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-carbon-gray mb-6">
            Powerful Tools & Analytics
          </h2>
          <p className="text-xl text-carbon-gray-medium max-w-3xl mx-auto">
            Advanced features to streamline your carbon management workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale text-center h-full">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                  tool.color === 'green' ? 'bg-carbon-green-light' :
                  tool.color === 'blue' ? 'bg-blue-100' :
                  tool.color === 'purple' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  <tool.icon className={`h-8 w-8 ${
                    tool.color === 'green' ? 'text-carbon-green' :
                    tool.color === 'blue' ? 'text-blue-600' :
                    tool.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-carbon-gray mb-4">{tool.title}</h3>
                <p className="text-carbon-gray-medium leading-relaxed">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};