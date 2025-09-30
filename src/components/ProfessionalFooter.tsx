import { Shield, Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function ProfessionalFooter() {
  return (
    <footer className="w-full bg-gradient-card border-t border-primary/20 mt-auto">
      {/* Newsletter section */}
      <div className="border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated with SubFlow Pro
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on new features, industry insights, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter your email address" 
                className="bg-background/50 border-border"
              />
              <Button variant="gradient">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-primary shadow-glow">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-lg font-bold gradient-text">SubFlow Pro</h4>
                <p className="text-xs text-muted-foreground">Enterprise Solutions</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              The world's most trusted subscription management platform. Empowering businesses 
              with advanced RF technology and seamless client portal integration.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Solutions</h5>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">RF Management</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Client Portal</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Subscription Analytics</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Enterprise API</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Mobile App</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Company</h5>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Press Kit</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Partners</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Security</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Contact & Support</h5>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>123 Enterprise Blvd</p>
                  <p>San Francisco, CA 94107</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>support@subflow.com</span>
              </div>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Help Center
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <span>© 2024 SubFlow Pro. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                <Link to="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Secured by</span>
              <div className="flex items-center gap-1 text-primary font-medium">
                <Shield className="h-3 w-3" />
                <span>256-bit SSL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}