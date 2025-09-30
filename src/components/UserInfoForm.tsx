import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrCode, User, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
});

export function UserInfoForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateAndProceed = async () => {
    setIsLoading(true);
    try {
      const result = userSchema.safeParse(formData);
      if (!result.success) {
        const fieldErrors: { name?: string; email?: string } = {};
        result.error.errors.forEach(error => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as keyof typeof fieldErrors] = error.message;
          }
        });
        setErrors(fieldErrors);
        setIsLoading(false);
        return;
      }

      // Store user data for subscription page
      localStorage.setItem('userInfo', JSON.stringify(result.data));
      
      toast({
        title: "Information saved!",
        description: "Proceeding to subscription plans...",
      });

      setTimeout(() => {
        navigate('/subscription');
      }, 500);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleQRScan = () => {
    toast({
      title: "QR Scanner",
      description: "QR scanning feature coming soon!",
    });
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-gradient-card border-primary/20 shadow-elegant animate-fade-in-up">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-foreground">Get Started</h3>
              <p className="text-muted-foreground">Enter your information to continue</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  <User className="inline h-4 w-4 mr-2" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`bg-background/50 border-border focus:border-primary ${
                    errors.name ? 'border-destructive' : ''
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  <Mail className="inline h-4 w-4 mr-2" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-background/50 border-border focus:border-primary ${
                    errors.email ? 'border-destructive' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleQRScan}
                variant="premium"
                size="lg"
                className="flex-1"
              >
                <QrCode className="h-4 w-4" />
                Scan QR
              </Button>
              <Button
                onClick={validateAndProceed}
                variant="cta"
                size="lg"
                className="flex-2"
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Next"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}