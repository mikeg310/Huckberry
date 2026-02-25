"use client";
import React from "react";
import { cn } from "./utils";
import type { HeadingTag } from "../types";

interface GladlyHeadingProps {
  as?: HeadingTag;
  size?: HeadingTag;
  level?: HeadingTag | number;
  text?: string;
  children?: React.ReactNode;
  highlightText?: string;
  highlightColor?: string;
  className?: string;
}

export default function GladlyHeading({
  as,
  size,
  level,
  text,
  children,
  highlightText,
  highlightColor = "#009b00",
  className,
}: GladlyHeadingProps) {
  let Tag: HeadingTag = "h2";
  if (as) {
    Tag = as;
  } else if (size) {
    Tag = size;
  } else if (level != null) {
    Tag = typeof level === "number" ? (`h${level}` as HeadingTag) : level;
  }

  const content = (children ?? text ?? "") as string;

  const baseClass = cn("font-bold tracking-tight", className);

  const sizeMap: Record<HeadingTag, string> = {
    h1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]",
    h2: "text-3xl md:text-4xl lg:text-5xl leading-tight",
    h3: "text-2xl md:text-3xl lg:text-4xl leading-tight",
    h4: "text-xl md:text-2xl leading-tight",
    h5: "text-lg md:text-xl leading-snug",
    h6: "text-base md:text-lg leading-snug",
  };

  if (highlightText && typeof content === "string") {
    const parts = content.split(highlightText);
    return (
      <Tag
        className={cn(baseClass, sizeMap[Tag])}
        style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)" }}
      >
        {parts[0]}
        <span style={{ color: highlightColor }}>{highlightText}</span>
        {parts[1] || ""}
      </Tag>
    );
  }

  return (
    <Tag
      className={cn(baseClass, sizeMap[Tag])}
      style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)" }}
    >
      {content}
    </Tag>
  );
}

export { GladlyHeading };
