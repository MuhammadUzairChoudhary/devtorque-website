import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "container-page",
        size === "wide" ? "max-w-[var(--container-wide)]" : "max-w-[var(--container)]",
        className
      )}
    >
      {children}
    </div>
  );
}
