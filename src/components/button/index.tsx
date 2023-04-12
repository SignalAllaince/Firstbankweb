import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { cn } from "@/lib/utils/component.utils";

const buttonClasses = cva(
  [
    "font-semibold",
    "rounded-md",
    "flex",
    "items-center",
    "cursor-pointer",
    "gap-3",
    "focus:ring",
    "outline-none",
    "active:ring",
    "transition-all",
    "duration-200",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r from-[#4C32F2] via-[#4C32F2] to-[#9F00BE]",
          "text-white",
          "border-transparent",
          "hover:bg-blue-600",
        ],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: ["bg-transparent", "text-[#22005D]", "hover:bg-gray-100"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-[12px]", "py-3", "px-4"],
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        size: "medium",
        class: "capitalize",
        // **or** if you're a React.js user, `className` may feel more consistent:
        // className: "uppercase"
      },
    ],
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
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
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
}: ButtonProps) {
  const classNames = cn(buttonClasses({ variant, size }), className);
  return (
    <button className={classNames}>
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
}

export default Button;
