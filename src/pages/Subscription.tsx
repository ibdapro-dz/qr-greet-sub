import { ProfessionalHeader } from "@/components/ProfessionalHeader";
import { ProfessionalFooter } from "@/components/ProfessionalFooter";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";

export default function Subscription() {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <div className="py-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold gradient-text mb-4">Choose Your Subscription Plan</h1>
            <p className="text-muted-foreground text-lg">
              Select the perfect enterprise plan that fits your RF management needs
            </p>
          </div>
          <SubscriptionPlans />
        </div>
      </main>
      <ProfessionalFooter />
    </div>
  );
}