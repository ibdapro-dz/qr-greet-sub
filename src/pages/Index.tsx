import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProfessionalHeader } from "@/components/ProfessionalHeader";
import { ProfessionalFooter } from "@/components/ProfessionalFooter";
import { ArrowRight, Shield, Zap, BarChart3, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      <ProfessionalHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
                Enterprise RF Management
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Advanced subscription management platform with cutting-edge RF technology. 
                Secure, scalable, and designed for enterprise-level operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="cta" size="lg" className="text-lg px-8 py-4">
                  <Link to="/user-info">
                    Access Client Portal
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose SubFlow Pro?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Industry-leading features designed for modern enterprises
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-xl bg-gradient-primary shadow-glow w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground">Bank-level encryption and RF authentication</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: "150ms" }}>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-xl bg-gradient-secondary shadow-glow w-fit mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Real-time Processing</h3>
                  <p className="text-sm text-muted-foreground">Instant RF verification and response</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: "300ms" }}>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-xl bg-primary/20 shadow-glow w-fit mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Advanced Analytics</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive reporting and insights</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: "450ms" }}>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-xl bg-accent/20 shadow-glow w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Multi-tenant Support</h3>
                  <p className="text-sm text-muted-foreground">Scalable client management system</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <ProfessionalFooter />
    </div>
  );
};

export default Index;
