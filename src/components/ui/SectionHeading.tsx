
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
