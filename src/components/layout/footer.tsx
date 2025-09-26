import { Logo } from "@/components/ui/logo";
import { Link } from "react-router-dom";

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
    <footer className="bg-carbon-gray text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" showText={true} />
            <p className="text-white/70 leading-relaxed mb-6">
              The world's leading platform for carbon credit management and sustainability tracking.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-white/70 hover:text-carbon-green transition-colors story-link"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Carbonix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};