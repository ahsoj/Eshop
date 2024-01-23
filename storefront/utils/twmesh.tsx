import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function twmesh(...className: ClassValue[]) {
  return twMerge(clsx(className));
}
