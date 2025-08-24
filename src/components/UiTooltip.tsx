"use client";
import { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export default function UiTooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative flex items-center group cursor-pointer">
      {children}
      <span
        className="
          absolute bottom-full right-0 mb-2
          hidden group-hover:block
          whitespace-nowrap
          rounded-lg bg-gray-800 px-2 py-1 text-sm text-white
          shadow-lg
        "
      >
        {text}
      </span>
    </div>
  );
}
