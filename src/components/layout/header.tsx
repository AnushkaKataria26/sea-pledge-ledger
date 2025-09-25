import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#features" className="text-sm font-medium text-carbon-gray hover:text-carbon-green transition-colors">
            Features
          </Link>
          <Link to="#how-it-works" className="text-sm font-medium text-carbon-gray hover:text-carbon-green transition-colors">
            How It Works
          </Link>
          <Link to="#contact" className="text-sm font-medium text-carbon-gray hover:text-carbon-green transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-carbon-gray hover:text-carbon-green">
              Login
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-carbon-green hover:bg-carbon-green-dark text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};