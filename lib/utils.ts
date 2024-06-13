import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseBase64Image(base64: string): string {
  if (!base64) return "";
  return `data:image/png;base64,${base64}`;
};