"use client";
import React from "react";
import { cn, getColorScheme } from "./utils";
import type { ColorSchemeNew } from "../types";

interface ColorSchemeWrapperProps {
  colorScheme?: ColorSchemeNew;
  colorSchemeNew?: ColorSchemeNew;
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: "sm" | "md" | "lg" | "xl" | "none";
}

const paddingMap = {
  none: "",
  sm: "py-10 md:py-14",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-24 md:py-32",
};

export default function ColorSchemeWrapper({
  colorScheme,
  colorSchemeNew,
  children,
  className,
  id,
  padding = "lg",
}: ColorSchemeWrapperProps) {
  const scheme = getColorScheme(colorSchemeNew ?? colorScheme ?? "white");

  return (
    <section
      id={id}
      className={cn(scheme.bg, scheme.text, paddingMap[padding], className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export { ColorSchemeWrapper, getColorScheme };
