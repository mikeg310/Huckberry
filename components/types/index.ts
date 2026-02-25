export type ColorSchemeNew =
  | "white"
  | "lightgrey"
  | "black"
  | "green"
  | "purple"
  | "greenTint"
  | "purpleTint"
  | "greenTintMuted"
  | "greenGradient";

export type ButtonVariant =
  | "newBlack"
  | "newWhite"
  | "newWhiteBlackHover"
  | "smallGreen"
  | "linkArrowBlack"
  | "linkArrowWhite"
  | "linkArrowGreen"
  | "linkNoArrowBlack"
  | "linkNoArrowWhite";

export type ButtonIconStyle =
  | "ai"
  | "play"
  | "person"
  | "event"
  | "gladly-sidekick"
  | null;

export interface ButtonProps {
  _type: "button";
  href: string;
  children: string;
  variant?: ButtonVariant;
  buttonIconStyle?: ButtonIconStyle;
  openInNewTab?: boolean;
}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  as?: HeadingTag;
  children: string;
  highlightText?: string;
  highlightColor?: string;
}

export interface ImageWithAlt {
  _type?: "imageWithAlt";
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ComparisonRow {
  feature: string;
  gladly: boolean | string;
  competitor: boolean | string;
}

export type Alignment = "left" | "center" | "right";
