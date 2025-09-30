import { Zap } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="w-full py-8 px-6 border-b border-border/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-primary shadow-glow">
            <Zap className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold gradient-text">SubFlow</h1>
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}