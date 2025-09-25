import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-carbon-green to-carbon-green-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Make a Real Impact?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of organizations already using Carbonix to build a sustainable future
          </p>
          
          <Link to="/login" className="hover-scale inline-block">
            <Button className="bg-white text-carbon-green hover:bg-carbon-gray-light px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};