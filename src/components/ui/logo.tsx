import { Leaf } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-8 h-8 bg-carbon-green rounded-lg">
        <Leaf className="h-5 w-5 text-white" />
      </div>
      {showText && (
        <span className="text-2xl font-bold text-carbon-gray">Carbonix</span>
      )}
    </div>
  );
};