
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export default function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <Card className={cn("card-hover border-2 border-transparent hover:border-automind-purple/20", className)}>
      <CardHeader className="px-6 pt-6">
        <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-automind-purple/10 text-automind-purple">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
