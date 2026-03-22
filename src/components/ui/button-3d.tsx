"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const sizeStyles = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-5 py-3 text-sm min-h-[48px] sm:px-6",
  lg: "px-6 py-3.5 text-base min-h-[52px] sm:px-8",
} as const;

type Size = keyof typeof sizeStyles;

type BaseProps = {
  children: ReactNode;
  size?: Size;
  /** When true, button fills container (e.g. forms). Base + face stay aligned. */
  fullWidth?: boolean;
  className?: string;
};

function ButtonFace({
  children,
  size,
  fullWidth,
  className,
}: {
  children: ReactNode;
  size: Size;
  fullWidth: boolean;
  className?: string;
}) {
  return (
    <motion.span
      className={cn(
        "relative z-10 flex items-center justify-center rounded-full font-semibold tracking-tight",
        "border border-emerald-300/40",
        "bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-600",
        "text-emerald-950",
        "shadow-[inset_0_2px_0_0_rgba(255,255,255,0.45),inset_0_-2px_0_0_rgba(6,95,70,0.35)]",
        "ring-1 ring-white/15",
        fullWidth ? "w-full" : "w-fit max-w-full",
        sizeStyles[size],
        className,
      )}
      whileHover={{
        y: -3,
        boxShadow:
          "inset 0 2px 0 0 rgba(255,255,255,0.5), inset 0 -2px 0 0 rgba(6,95,70,0.3), 0 10px 24px rgba(16,185,129,0.45)",
        transition: { type: "spring", stiffness: 420, damping: 22 },
      }}
      whileTap={{
        y: 5,
        scale: 0.98,
        boxShadow:
          "inset 0 2px 4px rgba(0,0,0,0.2), inset 0 -1px 0 0 rgba(6,95,70,0.4), 0 2px 8px rgba(16,185,129,0.25)",
        transition: { type: "spring", stiffness: 550, damping: 28 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      {children}
    </motion.span>
  );
}

/** Physical “base” the face sits on — same width as stacking context (must match face). */
function ButtonBase({ size }: { size: Size }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-1 bottom-0 rounded-full",
        "bg-gradient-to-b from-emerald-900 to-emerald-950",
        "shadow-[0_6px_0_0_rgba(4,47,46,0.95),0_10px_20px_rgba(0,0,0,0.35)]",
        size === "lg" ? "top-2" : "top-1.5",
      )}
    />
  );
}

export function Button3DLink({
  href,
  children,
  size = "md",
  fullWidth = false,
  className,
}: BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative cursor-pointer touch-manipulation outline-none [-webkit-tap-highlight-color:transparent]",
        fullWidth ? "flex w-full min-w-0" : "inline-flex w-fit max-w-full min-w-0 shrink-0",
        "focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        className,
      )}
    >
      {/* Stack width = face width (shrink-wrapped) unless fullWidth */}
      <span
        className={cn(
          "relative flex min-w-0",
          fullWidth ? "w-full" : "w-fit max-w-full",
        )}
      >
        <ButtonBase size={size} />
        <ButtonFace fullWidth={fullWidth} size={size}>
          {children}
        </ButtonFace>
      </span>
    </Link>
  );
}

export function Button3D({
  children,
  size = "md",
  fullWidth = false,
  className,
  disabled,
  type = "submit",
  ...rest
}: BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    className?: string;
  }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "relative cursor-pointer touch-manipulation border-0 bg-transparent p-0 outline-none [-webkit-tap-highlight-color:transparent]",
        fullWidth ? "flex w-full min-w-0" : "inline-flex w-fit max-w-full",
        "disabled:pointer-events-none disabled:opacity-55",
        "focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        className,
      )}
      {...rest}
    >
      <span
        className={cn(
          "relative flex min-w-0",
          fullWidth ? "w-full" : "w-fit max-w-full",
        )}
      >
        <ButtonBase size={size} />
        <ButtonFace fullWidth={fullWidth} size={size}>
          {children}
        </ButtonFace>
      </span>
    </button>
  );
}
