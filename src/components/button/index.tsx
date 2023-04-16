import { VariantProps, cva } from "class-variance-authority";
import { Inter } from "next/font/google";
import Link from "next/link";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  // weight: ["400", "500"],
  display: "swap",
});

const buttonClasses = cva(
  [
    inter.className,
    "rounded-none",
    "items-center",
    "cursor-pointer",
    "gap-2",
    "flex",
    "focus:ring-2 focus:ring-blue-500 focus:outline-none",
    "outline-none",
    "leading-6",
    "transition-all",
    "duration-300",
    "disabled:cursor-not-allowed",
    "disabled:opacity-80",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-white",
          "bg-brand-blue",
          "border-transparent",
          "hover:bg-brand-primary",
          "focus:bg-brand-primary",
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
        warning: ["bg-brand-accent", "text-brand-darkest", "focus:ring-0"],
        menu: [
          "bg-transparent",
          "text-brand-blue",
          "border-0",
          "justify-start ",
        ],
        minimenu: ["bg-transparent", "text-white", "justify-start"],
        outline: [
          "border-0 px-[4px] text-white focus:text-white",
          "bg-transparent",
          "disabled:border-[#E4E4EE]",
          "disabled:text-[#E4E4EE]",
          "hover:text-brand-accent",
          "focus:text-brand-accent",
        ],
      },
      size: {
        small: ["text-[13px]", "h-10", "px-5"],
        menu: ["text-[13px]", "h-12", "px-4"],
        medium: ["text-[15px]", "h-11", "px-8"],
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "secondary", "outline", "warning"],
        size: ["medium", "small"],
        class: " justify-center",
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
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  activeBg?: string;
  activeText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      leftIcon,
      rightIcon,
      variant,
      size,
      href,
      className = "",
      ...others
    },
    ref
  ) => {
    const classNames = buttonClasses({ variant, size, className });

    if (href) {
      return (
        // @ts-expect-error
        <Link href={href} ref={ref} className={classNames} {...others}>
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </Link>
      );
    }
    return (
      <button type="button" ref={ref} className={classNames} {...others}>
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
