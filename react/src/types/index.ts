export type Theme = "dark" | "light";

export interface Link {
  label: string;
  url: string;
  icon?: string;
  highlight?: boolean;
  social?: boolean;
}
