import type { ColorSchemeNew } from "../types";

export const colorSchemeMap: Record<
  ColorSchemeNew,
  { bg: string; text: string; border: string }
> = {
  white: { bg: "bg-white", text: "text-gray-900", border: "border-[#e5e7eb]" },
  lightgrey: { bg: "bg-[#FAFAFA]", text: "text-gray-900", border: "border-[#e5e7eb]" },
  black: { bg: "bg-[#111111]", text: "text-white", border: "border-[#333]" },
  green: { bg: "bg-[#009b00]", text: "text-white", border: "border-transparent" },
  purple: { bg: "bg-[#6B21A8]", text: "text-white", border: "border-transparent" },
  greenTint: { bg: "bg-[#D8F4D8]", text: "text-gray-900", border: "border-transparent" },
  purpleTint: { bg: "bg-[#F3E8FF]", text: "text-gray-900", border: "border-transparent" },
  greenTintMuted: { bg: "bg-[#EBF7EB]", text: "text-gray-900", border: "border-transparent" },
  greenGradient: {
    bg: "bg-gradient-to-br from-[#009b00] to-[#006600]",
    text: "text-white",
    border: "border-transparent",
  },
};

export function getColorScheme(scheme: ColorSchemeNew = "white") {
  return colorSchemeMap[scheme] || colorSchemeMap.white;
}

export function getMutedTextColor(scheme: ColorSchemeNew = "white") {
  const dark = ["black", "green", "purple", "greenGradient"];
  return dark.includes(scheme) ? "text-white/70" : "text-[#6b7280]";
}

export function getAccentColor(scheme: ColorSchemeNew = "white") {
  const dark = ["black", "green", "purple", "greenGradient"];
  return dark.includes(scheme) ? "text-[#D8F4D8]" : "text-[#009b00]";
}

export function cn(
  ...classes: (string | undefined | null | false | Record<string, boolean | undefined>)[]
): string {
  return classes
    .flatMap((c) => {
      if (!c) return [];
      if (typeof c === "string") return [c];
      return Object.entries(c)
        .filter(([, v]) => v)
        .map(([k]) => k);
    })
    .join(" ");
}

export function createObserverCallback(setVisible: (v: boolean) => void) {
  return (entries: IntersectionObserverEntry[]) => {
    if (entries[0]?.isIntersecting) setVisible(true);
  };
}
