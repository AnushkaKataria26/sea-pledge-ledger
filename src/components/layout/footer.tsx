import { Logo } from "@/components/ui/logo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Platform: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Documentation", href: "#docs" },
    { name: "API", href: "#api" }
  ],
  Support: [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Status", href: "#status" },
    { name: "Community", href: "#community" }
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" }, 
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" }
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-carbon-gray via-carbon-gray-dark to-carbon-gray text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10 py-20 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Logo className="mb-8" showText={true} />
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              The world's leading platform for carbon credit management and sustainability tracking with blockchain transparency.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-carbon-green transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-white/70 rounded"></div>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-carbon-green transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-white/70 rounded"></div>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-carbon-green transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-white/70 rounded"></div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-8 relative">
                {category}
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-carbon-green rounded-full"></div>
              </h3>
              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-white/80 hover:text-carbon-green transition-all duration-300 text-lg hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-8">Get the latest updates on carbon credits and sustainability initiatives</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-carbon-green focus:ring-2 focus:ring-carbon-green/20"
              />
              <Button className="bg-carbon-green hover:bg-carbon-green-dark text-white px-8 py-4 rounded-xl font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-center md:text-left">
              © 2024 Carbonix. All rights reserved. Building a sustainable future together.
            </p>
            <div className="flex space-x-8 text-white/60">
              <Link to="/privacy" className="hover:text-carbon-green transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-carbon-green transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-carbon-green transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};