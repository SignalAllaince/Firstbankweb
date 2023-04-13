import { InputWrapperProps } from "@/types/component.types";
import { VariantProps, cva } from "class-variance-authority";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import InputWrapper from "./input-wrapper";
export type Ref = HTMLInputElement;

const inputClasses = cva(
  [
    "rounded-md",
    "focus:ring-[2px]",
    "transition",
    "font-light",
    "duration-200",
    "ease-in-out",
    "outline-none",
    "w-full",
    "border",
    "ring-blue-500",
    "border-gray-300",
    "hover:border-gray-400",
    "placeholder:text-slate-600",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-transparent", "text-slate-600"],
        secondary: ["bg-gray-100", "text-slate-900"],
      },
      inputSize: {
        xs: ["h-6", "text-xs", "px-2", "py-0"],
        sm: ["h-8", "text-sm", "px-2", "py-2"],
        md: ["h-10", "text-md", "px-2", "py-2"],
        lg: ["h-12", "text-lg", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      variant: "primary",
      inputSize: "md",
    },
  }
);

// below here we just extended our input base interface and VariantProps interface which we imported from CVA
export interface InputProps
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputClasses> {}

export const Input = ({
  className,
  variant,
  inputSize,
  ...props
}: InputProps) => {
  return (
    <input
      className={inputClasses({ variant, inputSize, className })}
      {...props}
    />
  );
};

const CustomInput = React.forwardRef<Ref, InputProps & InputWrapperProps>(
  (
    {
      value,
      onChange,
      name,
      type,
      onBlur,
      placeholder,
      isDisabled,
      className,
      variant,
      inputSize,
      ...others
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <InputWrapper
        type={type}
        isDisabled={isDisabled}
        name={name}
        isShown={show}
        handleClick={handleClick}
        {...others}
      >
        <input
          name={name}
          type={type !== "password" ? type : show ? "text" : "password"}
          onChange={onChange}
          value={value}
          id={name}
          ref={ref}
          onBlur={onBlur}
          placeholder={placeholder}
          className={inputClasses({ variant, inputSize, className })}
          min={others.min}
          max={others.max}
        />
      </InputWrapper>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
