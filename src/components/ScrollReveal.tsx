import { type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 600,
}: ScrollRevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const directionStyles = {
    up: { transform: "translateY(30px)" },
    down: { transform: "translateY(-30px)" },
    left: { transform: "translateX(60px)" },
    right: { transform: "translateX(-60px)" },
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : directionStyles[direction].transform,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
