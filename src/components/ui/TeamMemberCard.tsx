
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  className?: string;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  image,
  className,
}: TeamMemberCardProps) {
  return (
    <Card className={cn("overflow-hidden card-hover", className)}>
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="px-6 pt-6 pb-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-automind-purple font-medium">{role}</p>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}
