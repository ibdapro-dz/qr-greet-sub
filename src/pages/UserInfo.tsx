import { Header } from "@/components/Header";
import { UserInfoForm } from "@/components/UserInfoForm";

export default function UserInfo() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header 
        title="Welcome to SubFlow"
        subtitle="Get started by providing your information below"
      />
      <UserInfoForm />
    </div>
  );
}