import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { UserTypeSelector } from "@/components/auth/user-type-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Phone, Building, Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z.object({
  userType: z.enum(["corporate", "ngo"], {
    required_error: "Please select a user type",
  }),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().optional(),
  organization: z.string().min(2, "Organization name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupForm = z.infer<typeof signupSchema>;

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      userType: "corporate",
    },
  });

  const userType = watch("userType");

  const onSubmit = (data: SignupForm) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-carbon-gray-light flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Logo className="mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-carbon-gray mb-2">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-carbon-gray-medium">
            {isSignup ? "Join the carbon credit revolution" : "Sign in to your account"}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {isSignup && (
            <UserTypeSelector
              value={userType}
              onValueChange={(value) => setValue("userType", value as "corporate" | "ngo")}
            />
          )}

          {isSignup && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-carbon-gray">
                  Full Name *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-carbon-gray-medium" />
                  <Input
                    id="fullName"
                    {...register("fullName")}
                    placeholder="Your full name"
                    className="pl-10 h-12 border-border focus:border-carbon-green focus:ring-carbon-green"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-carbon-gray">
                  Phone
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-carbon-gray-medium" />
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="Phone number"
                    className="pl-10 h-12 border-border focus:border-carbon-green focus:ring-carbon-green"
                  />
                </div>
              </div>
            </div>
          )}

          {isSignup && (
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-sm font-medium text-carbon-gray">
                Organization
              </Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-carbon-gray-medium" />
                <Input
                  id="organization"
                  {...register("organization")}
                  placeholder="Your organization name"
                  className="pl-10 h-12 border-border focus:border-carbon-green focus:ring-carbon-green"
                />
              </div>
              {errors.organization && (
                <p className="text-sm text-destructive">{errors.organization.message}</p>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-carbon-gray">
              Email address *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-carbon-gray-medium" />
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="pl-10 h-12 border-border focus:border-carbon-green focus:ring-carbon-green"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-carbon-gray">
                Password *
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-carbon-gray-medium" />
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder={isSignup ? "Create password" : "Enter password"}
                  className="pl-10 h-12 border-border focus:border-carbon-green focus:ring-carbon-green"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            {isSignup && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-carbon-gray">
                  Confirm Password *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-carbon-gray-medium" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="Confirm password"
                    className="pl-10 h-12 border-border focus:border-carbon-green focus:ring-carbon-green"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
                )}
              </div>
            )}
          </div>

          {isSignup && (
            <div className="flex items-start gap-3">
              <Checkbox
                id="agreeToTerms"
                {...register("agreeToTerms")}
                className="mt-1 border-border data-[state=checked]:bg-carbon-green data-[state=checked]:border-carbon-green"
              />
              <Label htmlFor="agreeToTerms" className="text-sm text-carbon-gray-medium leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-carbon-green hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-carbon-green hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-carbon-green hover:bg-carbon-green-dark text-white font-semibold rounded-xl transition-colors"
          >
            {isSignup ? "Create account" : "Sign in"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-carbon-gray-medium">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-carbon-green hover:underline font-medium"
            >
              {isSignup ? "Sign in" : "Create account"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;