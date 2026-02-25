"use client";
import React from "react";
import { cn } from "./utils";
import type { ButtonVariant, ButtonIconStyle } from "../types";

interface GladlyButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  iconStyle?: ButtonIconStyle;
  openInNewTab?: boolean;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

function AiIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M18 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function SidekickIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  );
}

function getIcon(style: ButtonIconStyle) {
  switch (style) {
    case "ai": return <AiIcon />;
    case "play": return <PlayIcon />;
    case "person": return <PersonIcon />;
    case "event": return <ArrowIcon />;
    case "gladly-sidekick": return <SidekickIcon />;
    default: return null;
  }
}

const variantStyles: Record<ButtonVariant, string> = {
  newBlack:
    "inline-flex items-center gap-2 bg-black hover:bg-[#009b00] text-white font-medium px-6 py-3 rounded-md text-sm transition-colors",
  newWhite:
    "inline-flex items-center gap-2 bg-white hover:bg-[#009b00] hover:text-white text-gray-900 font-medium px-6 py-3 rounded-md text-sm transition-colors border border-[#e5e7eb]",
  newWhiteBlackHover:
    "inline-flex items-center gap-2 bg-white hover:bg-black hover:text-white text-gray-900 font-medium px-6 py-3 rounded-md text-sm transition-colors border border-[#e5e7eb]",
  smallGreen:
    "inline-flex items-center gap-2 bg-[#009b00] hover:bg-[#007a00] text-white font-medium px-4 py-2 rounded-md text-xs transition-colors",
  linkArrowBlack:
    "inline-flex items-center gap-1.5 text-gray-900 font-medium text-sm hover:text-[#009b00] transition-colors",
  linkArrowWhite:
    "inline-flex items-center gap-1.5 text-white font-medium text-sm hover:text-[#D8F4D8] transition-colors",
  linkArrowGreen:
    "inline-flex items-center gap-1.5 text-[#009b00] font-medium text-sm hover:underline transition-colors",
  linkNoArrowBlack:
    "text-gray-900 font-medium text-sm underline underline-offset-4 decoration-gray-400 hover:decoration-[#009b00] transition-colors",
  linkNoArrowWhite:
    "text-white font-medium text-sm underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors",
};

const isLinkWithArrow = (v: ButtonVariant) =>
  v === "linkArrowBlack" || v === "linkArrowWhite" || v === "linkArrowGreen";

export default function GladlyButton({
  href = "#",
  children,
  variant = "newBlack",
  iconStyle = null,
  openInNewTab = false,
  className,
  onClick,
  ...rest
}: GladlyButtonProps) {
  const icon = getIcon(iconStyle);
  const showArrow = isLinkWithArrow(variant);

  return (
    <a
      href={href}
      className={cn(variantStyles[variant], className)}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {showArrow && <ArrowIcon />}
    </a>
  );
}

export { GladlyButton };
