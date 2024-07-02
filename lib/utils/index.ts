export * from "./hooks";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const titleToValue = (title: string) => {
  let value = title
    .replace(/[^\w\s]/gi, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
  return value;
};

// TODO CHANGE LATER
export const siteUrl = "https://debug.com.br";
