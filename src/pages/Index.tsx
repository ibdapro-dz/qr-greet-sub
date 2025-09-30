import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to user info page on app load
    navigate('/user-info');
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-subtle">
      <div className="text-center animate-fade-in-up">
        <h1 className="mb-4 text-4xl font-bold gradient-text">Loading SubFlow...</h1>
        <p className="text-xl text-muted-foreground">Redirecting you to get started</p>
      </div>
    </div>
  );
};

export default Index;
