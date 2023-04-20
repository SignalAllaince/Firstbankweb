import { VariantProps, cva } from "class-variance-authority";
import { Inter } from "next/font/google";
import Link from "next/link";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const buttonClasses = cva(
  [
    inter.className,

    "items-center",
    "cursor-pointer",
    "gap-2",
    "flex",
    "focus:ring-blue-500",
    "focus:outline-none",
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
          "focus:ring-2",
          "hover:bg-brand-primary",
          "disabled:bg-brand-graybg",
          "disabled:text-brand-grayt",
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
          "focus:ring-2",
          "justify-start ",
        ],
        minimenu: ["bg-transparent", "text-white", "justify-start"],
        outline: [
          "border-0 px-[4px] text-white focus:text-white",
          "bg-transparent",
          "focus:ring-2",
          "hover:text-brand-accent",
          "focus:text-brand-accent",
        ],
        cart: ["border-0", "border-b", "bg-transparent", "focus:ring-0"],
      },
      size: {
        small: ["text-[13px]", "h-10", "px-5"],
        xs: ["text-xs", "h-8"],
        menu: ["text-[13px]", "h-12", "px-4"],
        medium: ["text-[15px]", "h-11", "px-8"],
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "secondary", "outline", "warning"],
        size: ["medium", "small"],
        className: "justify-center rounded-[4px]",
        // **or** if you're a React.js user, `className` may feel more consistent:
        // className: "uppercase"
      },
      {
        variant: ["secondary"],
        size: ["xs"],
        className: "border-brand-light rounded-[4px]",
      },
      {
        variant: "cart",
        size: "xs",
        className: "px-0 w-fit",
      },
      {
        variant: ["primary", "secondary", "outline", "minimenu", "menu"],
        size: "xs",
        className: "px-4",
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
