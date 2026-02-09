import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function AddToLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function RemoveFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
