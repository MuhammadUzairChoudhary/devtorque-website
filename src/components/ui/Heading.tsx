import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
  size?: HeadingSize;
  children: React.ReactNode;
  className?: string;
}

const sizes = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4"
};

export function Heading({ as = "h2", size = "h2", children, className }: HeadingProps) {
  const Component = as;

  return <Component className={cn(sizes[size], className)}>{children}</Component>;
}
