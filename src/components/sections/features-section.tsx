import { TrendingUp, Globe, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "For Corporates",
    description: "Track and report emissions efficiently while purchasing verified carbon credits",
    icon: TrendingUp,
    items: [
      "Track and report emissions",
      "Set reduction targets",
      "Purchase verified credits",
      "Real-time analytics"
    ],
    color: "blue"
  },
  {
    title: "For NGOs",
    description: "Register carbon projects and generate transparent impact reports",
    icon: Globe,
    items: [
      "Register carbon projects",
      "Track project progress",
      "Generate impact reports",
      "Access funding opportunities"
    ],
    color: "green"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-carbon-gray mb-6">
            Everything You Need for Carbon Management
          </h2>
          <p className="text-xl text-carbon-gray-medium max-w-3xl mx-auto">
            Our platform provides comprehensive tools for every stakeholder in the carbon credit
            ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale bg-gradient-to-br from-white to-carbon-gray-light/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${feature.color === 'blue' ? 'bg-blue-100' : 'bg-carbon-green-light'}`}>
                    <feature.icon className={`h-8 w-8 ${feature.color === 'blue' ? 'text-blue-600' : 'text-carbon-green'}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-carbon-gray">{feature.title}</h3>
                  </div>
                </div>
                <p className="text-carbon-gray-medium mb-6 text-lg">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-carbon-green flex-shrink-0" />
                      <span className="text-carbon-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};