import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Radio, ArrowRight, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const clientSchema = z.object({
  clientId: z.string().trim().min(8, "Client ID must be at least 8 characters").max(20, "Client ID must be less than 20 characters").regex(/^[A-Z0-9]+$/, "Client ID must contain only uppercase letters and numbers"),
  rfId: z.string().trim().min(10, "RF ID must be at least 10 characters").max(16, "RF ID must be less than 16 characters").regex(/^[A-F0-9]+$/, "RF ID must contain only hexadecimal characters (A-F, 0-9)"),
});

export function ClientPortalForm() {
  const [formData, setFormData] = useState({ clientId: "", rfId: "" });
  const [errors, setErrors] = useState<{ clientId?: string; rfId?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    const upperValue = value.toUpperCase();
    setFormData(prev => ({ ...prev, [field]: upperValue }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateAndProceed = async () => {
    setIsLoading(true);
    try {
      const result = clientSchema.safeParse(formData);
      if (!result.success) {
        const fieldErrors: { clientId?: string; rfId?: string } = {};
        result.error.errors.forEach(error => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as keyof typeof fieldErrors] = error.message;
          }
        });
        setErrors(fieldErrors);
        setIsLoading(false);
        return;
      }

      // Store client data for subscription page
      localStorage.setItem('clientInfo', JSON.stringify(result.data));
      
      toast({
        title: "Client Authentication Successful!",
        description: "Accessing your subscription portal...",
      });

      setTimeout(() => {
        navigate('/subscription');
      }, 1000);
    } catch (error) {
      toast({
        title: "Authentication Failed",
        description: "Please verify your credentials and try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleDemoAccess = () => {
    toast({
      title: "Demo Access",
      description: "Connecting to demo environment...",
    });
    setFormData({ clientId: "DEMO12345", rfId: "ABCD1234567890" });
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left side - Info panel */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-4">
            <Badge variant="default" className="bg-gradient-primary">
              Enterprise Portal
            </Badge>
            <h2 className="text-3xl font-bold text-foreground">
              Secure Client Access Portal
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Access your enterprise subscription management dashboard using your unique Client ID and RF identification credentials.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <Shield className="h-5 w-5 text-success" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Bank-Level Security</h4>
                <p className="text-sm text-muted-foreground">256-bit encrypted RF authentication protocol</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Radio className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">RF Technology</h4>
                <p className="text-sm text-muted-foreground">Advanced radio frequency identification system</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <CheckCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Real-time Access</h4>
                <p className="text-sm text-muted-foreground">Instant verification and dashboard access</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
            <p className="text-sm text-muted-foreground">
              <strong>Need help?</strong> Contact our 24/7 support team at 
              <span className="text-primary"> support@subflow.com</span> or call 
              <span className="text-primary"> +1 (555) 123-4567</span>
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <Card className="bg-gradient-card border-primary/20 shadow-elegant animate-scale-in">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-gradient-primary shadow-glow">
                <CreditCard className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Client Portal Access</h3>
            <p className="text-muted-foreground">Enter your credentials to continue</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clientId" className="text-foreground font-medium">
                  <CreditCard className="inline h-4 w-4 mr-2" />
                  Client ID
                </Label>
                <Input
                  id="clientId"
                  type="text"
                  placeholder="e.g., CLIENT123456"
                  value={formData.clientId}
                  onChange={(e) => handleInputChange('clientId', e.target.value)}
                  className={`bg-background/50 border-border focus:border-primary font-mono tracking-wider ${
                    errors.clientId ? 'border-destructive' : ''
                  }`}
                  maxLength={20}
                />
                {errors.clientId && (
                  <p className="text-sm text-destructive">{errors.clientId}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  8-20 characters, uppercase letters and numbers only
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rfId" className="text-foreground font-medium">
                  <Radio className="inline h-4 w-4 mr-2" />
                  RF Identification
                </Label>
                <Input
                  id="rfId"
                  type="text"
                  placeholder="e.g., ABCD1234567890EF"
                  value={formData.rfId}
                  onChange={(e) => handleInputChange('rfId', e.target.value)}
                  className={`bg-background/50 border-border focus:border-primary font-mono tracking-wider ${
                    errors.rfId ? 'border-destructive' : ''
                  }`}
                  maxLength={16}
                />
                {errors.rfId && (
                  <p className="text-sm text-destructive">{errors.rfId}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  10-16 characters, hexadecimal format (A-F, 0-9)
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={validateAndProceed}
                variant="cta"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Authenticating..." : "Access Portal"}
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <Button
                onClick={handleDemoAccess}
                variant="outline"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                Try Demo Access
              </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground pt-4 border-t border-border/30">
              By accessing this portal, you agree to our 
              <span className="text-primary hover:underline cursor-pointer"> Terms of Service</span> and 
              <span className="text-primary hover:underline cursor-pointer"> Privacy Policy</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}