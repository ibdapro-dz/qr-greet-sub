import { Shield, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProfessionalHeader() {
  return (
    <div className="w-full bg-gradient-card border-b border-primary/20 backdrop-blur-sm">
      {/* Top contact bar */}
      <div className="border-b border-border/30 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <span>support@subflow.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>24/7 Support Available</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-xs">
                Help Center
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-primary shadow-glow">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">SubFlow Pro</h1>
                <p className="text-sm text-muted-foreground">Enterprise Subscription Management</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>
        </div>

        {/* Navigation breadcrumb */}
        <div className="mt-6 pt-4 border-t border-border/30">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Client Portal</span>
          </div>
        </div>
      </header>
    </div>
  );
}