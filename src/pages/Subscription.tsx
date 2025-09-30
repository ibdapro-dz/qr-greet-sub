import { Header } from "@/components/Header";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";

export default function Subscription() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header 
        title="Choose Your Subscription"
        subtitle="Select the perfect plan that fits your needs and unlock premium features"
      />
      <SubscriptionPlans />
    </div>
  );
}