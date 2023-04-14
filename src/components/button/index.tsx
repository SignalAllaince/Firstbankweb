import { VariantProps, cva } from "class-variance-authority";
import { Inter } from "next/font/google";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { cn } from "@/lib/utils/component.utils";
const inter = Inter({ subsets: ["latin"], weight: ["500"] });

const buttonClasses = cva(
  [
    inter.className,
    "font-semibold",
    "rounded-none",
    "flex",
    "items-center",
    "justify-center",
    "cursor-pointer",
    "gap-3",
    "focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none",
    "outline-none",
    "leading-6",
    "transition-all",
    "duration-200",
    "disabled:cursor-not-allowed",
    "disabled:opacity-80",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-white",
          "bg-brand-primary",
          "border-transparent",
          "hover:bg-brand-blue",
          "disabled:bg-brand-grey-bg",
          "disabled:text-brand-grey-text",
        ],
        secondary: [
          "bg-transparent",
          "border",
          "border-brand-blue",
          "text-brand-blue",
          "focus:border-brand-lightblue",
          "focus:text-brand-lightblue",
          "focus:ring-0",
          "disabled:border-[#E4E4EE]",
          "disabled:text-[#E4E4EE]",
        ],
      },
      size: {
        small: ["text-[13px]", "h-10", "px-5"],
        medium: ["text-[15px]", "h-12", "px-8"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof buttonClasses> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// button();
// => "font-semibold border rounded bg-blue-500 text-white border-transparent hover:bg-blue-600 text-base py-2 px-4 uppercase"

// button({ variant: "secondary", size: "small" });
// => "font-semibold border r

function Button({
  children,
  leftIcon,
  rightIcon,
  variant,
  size,
  className = "",
  ...others
}: ButtonProps) {
  const classNames = cn(buttonClasses({ variant, size }), className);
  return (
    <button className={classNames} {...others}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
}

export default Button;
