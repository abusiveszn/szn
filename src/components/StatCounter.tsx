import { useRef, useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  delay?: number;
}

export default function StatCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 1500,
  label,
  delay = 0,
}: StatCounterProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now() + delay;

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, end, duration, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-5xl md:text-[48px] font-bold text-white leading-none tracking-[-2px]">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-3 text-xs font-medium uppercase tracking-[0.5px] text-slate-400">
        {label}
      </div>
    </div>
  );
}
