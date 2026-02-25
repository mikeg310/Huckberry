"use client";
import { useEffect, useRef, useState, type RefObject } from "react";

interface InViewOptions {
  once?: boolean;
  amount?: number;
  threshold?: number;
  margin?: string;
}

export function useInView(
  refOrOptions?: RefObject<Element | null> | InViewOptions,
  options?: InViewOptions
): any {
  const internalRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const isRefPattern =
    refOrOptions != null &&
    typeof refOrOptions === "object" &&
    "current" in refOrOptions;

  const targetRef = isRefPattern
    ? (refOrOptions as RefObject<Element | null>)
    : internalRef;

  const opts: InViewOptions = isRefPattern
    ? options ?? {}
    : (refOrOptions as InViewOptions) ?? {};

  const threshold = opts.amount ?? opts.threshold ?? 0.15;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (opts.once !== false) observer.disconnect();
        } else if (!opts.once) {
          setVisible(false);
        }
      },
      {
        threshold,
        rootMargin: opts.margin,
      }
    );
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [threshold, opts.margin]);

  if (isRefPattern) return visible;

  return { ref: internalRef, inView: visible };
}

export function useAnimatedCounter(
  target: number,
  enabled: boolean,
  duration = 1500,
  delay = 0
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const timeout = setTimeout(() => {
      const steps = 40;
      const increment = target / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [enabled, target, duration, delay]);

  return count;
}
