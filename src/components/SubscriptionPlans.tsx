import { useState } from "react";
import { Star, Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  rating: number;
  features: PlanFeature[];
  icon: React.ReactNode;
  popular?: boolean;
  badge?: string;
}

const plans: SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for getting started",
    price: 9.99,
    period: "month",
    rating: 4,
    icon: <Zap className="h-6 w-6" />,
    features: [
      { name: "Up to 5 projects", included: true },
      { name: "Basic support", included: true },
      { name: "1GB storage", included: true },
      { name: "Email notifications", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Priority support", included: false },
    ],
  },
  {
    id: "standard",
    name: "Standard",
    description: "Most popular choice for professionals",
    price: 19.99,
    period: "month",
    rating: 5,
    icon: <Crown className="h-6 w-6" />,
    popular: true,
    badge: "Most Popular",
    features: [
      { name: "Up to 25 projects", included: true },
      { name: "Priority support", included: true },
      { name: "10GB storage", included: true },
      { name: "Email & SMS notifications", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Ultimate solution for teams",
    price: 39.99,
    period: "month",
    rating: 5,
    icon: <Rocket className="h-6 w-6" />,
    badge: "Best Value",
    features: [
      { name: "Unlimited projects", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "100GB storage", included: true },
      { name: "All notification types", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Custom integrations", included: true },
    ],
  },
];

export function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-warning text-warning" : "text-muted-foreground"
        }`}
      />
    ));
  };

  const handleSubscribe = async (planId: string) => {
    setSelectedPlan(planId);
    setIsProcessing(true);

    const plan = plans.find(p => p.id === planId);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Subscription Successful!",
        description: `Welcome to ${plan?.name} plan! You'll receive a confirmation email shortly.`,
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      setSelectedPlan(null);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold gradient-text mb-4">Choose Your Plan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the perfect subscription plan that fits your needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative bg-gradient-card border transition-all duration-500 hover:scale-105 hover:shadow-elegant ${
                plan.popular
                  ? "border-primary/50 shadow-elegant animate-scale-in"
                  : "border-border/50 shadow-card"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="default" className="bg-gradient-primary shadow-glow">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${plan.popular ? 'bg-gradient-primary shadow-glow' : 'bg-muted'}`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold gradient-text">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    {renderStars(plan.rating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({plan.rating}/5)
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <Check
                        className={`h-4 w-4 flex-shrink-0 ${
                          feature.included
                            ? "text-success"
                            : "text-muted-foreground opacity-50"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground opacity-50"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleSubscribe(plan.id)}
                  variant={plan.popular ? "cta" : "premium"}
                  size="lg"
                  className="w-full"
                  disabled={isProcessing && selectedPlan === plan.id}
                >
                  {isProcessing && selectedPlan === plan.id
                    ? "Processing..."
                    : "Subscribe Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-gradient-card border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you find the perfect plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
              <Button variant="ghost" size="lg">
                View Terms & Conditions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}