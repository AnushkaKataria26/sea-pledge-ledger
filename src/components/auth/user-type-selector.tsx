import { TrendingUp, Globe } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface UserTypeSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

const userTypes = [
  {
    id: "corporate",
    label: "Corporate",
    description: "Track emissions and purchase credits",
    icon: TrendingUp,
  },
  {
    id: "ngo",
    label: "NGO",
    description: "Register and manage carbon projects",
    icon: Globe,
  },
];

export const UserTypeSelector = ({ value, onValueChange }: UserTypeSelectorProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-base font-medium text-carbon-gray">I am a *</Label>
      <RadioGroup value={value} onValueChange={onValueChange} className="space-y-3">
        {userTypes.map((type) => (
          <div key={type.id} className="relative">
            <RadioGroupItem
              value={type.id}
              id={type.id}
              className="peer sr-only"
            />
            <Label
              htmlFor={type.id}
              className="flex items-start gap-4 p-4 border-2 border-border rounded-xl cursor-pointer transition-all hover:border-carbon-green peer-checked:border-carbon-green peer-checked:bg-carbon-green-light/50"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-carbon-green-light rounded-lg peer-checked:bg-carbon-green">
                <type.icon className="h-5 w-5 text-carbon-green peer-checked:text-white" />
              </div>
              <div className="flex-1">
                <div className="text-lg font-semibold text-carbon-gray">{type.label}</div>
                <div className="text-sm text-carbon-gray-medium">{type.description}</div>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};