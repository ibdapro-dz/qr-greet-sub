import { ProfessionalHeader } from "@/components/ProfessionalHeader";
import { ProfessionalFooter } from "@/components/ProfessionalFooter";
import { ClientPortalForm } from "@/components/ClientPortalForm";

export default function UserInfo() {
  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col">
      <ProfessionalHeader />
      <main className="flex-1">
        <ClientPortalForm />
      </main>
      <ProfessionalFooter />
    </div>
  );
}