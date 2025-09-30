import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="text-center animate-fade-in-up max-w-2xl px-6">
        <h1 className="mb-6 text-5xl font-bold gradient-text">Welcome to SubFlow</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your premium subscription management platform. Get started by providing your information and choosing the perfect plan.
        </p>
        <Button asChild variant="cta" size="lg">
          <Link to="/user-info">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
