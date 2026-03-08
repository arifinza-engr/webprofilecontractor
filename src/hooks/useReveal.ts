"use client";

import { useInView } from "react-intersection-observer";

interface UseRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useReveal(options: UseRevealOptions = {}) {
  const { ref, inView } = useInView({
    threshold:   options.threshold ?? 0.15,
    triggerOnce: options.triggerOnce ?? true,
  });

  return { ref, inView };
}
