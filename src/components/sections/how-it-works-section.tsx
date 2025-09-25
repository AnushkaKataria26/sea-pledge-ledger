import { UserPlus, Activity, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Register",
    description: "Sign up and complete your organization profile",
    icon: UserPlus,
    color: "green"
  },
  {
    number: "2", 
    title: "Track",
    description: "Monitor emissions or register carbon projects",
    icon: Activity,
    color: "blue"
  },
  {
    number: "3",
    title: "Verify",
    description: "Get projects verified by accredited third parties",
    icon: CheckCircle,
    color: "purple"
  },
  {
    number: "4",
    title: "Trade",
    description: "Buy, sell, or retire credits in the marketplace",
    icon: ArrowRight,
    color: "orange"
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-carbon-gray mb-6">
            How It Works
          </h2>
          <p className="text-xl text-carbon-gray-medium max-w-3xl mx-auto">
            Simple steps to start your carbon credit journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  {/* Step Number Circle */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl font-bold ${
                    step.color === 'green' ? 'bg-carbon-green' :
                    step.color === 'blue' ? 'bg-blue-500' :
                    step.color === 'purple' ? 'bg-purple-500' :
                    'bg-orange-500'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    step.color === 'green' ? 'bg-carbon-green-light' :
                    step.color === 'blue' ? 'bg-blue-100' :
                    step.color === 'purple' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <step.icon className={`h-6 w-6 ${
                      step.color === 'green' ? 'text-carbon-green' :
                      step.color === 'blue' ? 'text-blue-600' :
                      step.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-carbon-gray mb-4">{step.title}</h3>
                  <p className="text-carbon-gray-medium leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2 w-8 h-0.5 bg-carbon-green opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};