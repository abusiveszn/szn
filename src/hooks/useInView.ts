import { useState, useEffect, useRef, type RefObject } from "react";

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.2 }
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.root, options.rootMargin]);

  return [ref, inView];
}
