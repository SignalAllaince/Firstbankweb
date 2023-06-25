import { cn } from "@/lib/utils/component.utils";
import { InputWrapperProps } from "@/types/component.types";
import { VariantProps } from "class-variance-authority";
import React, { DetailedHTMLProps } from "react";
import { inputClasses } from ".";
import InputWrapper from "./input-wrapper";

export type Ref = HTMLSelectElement;

export interface SelectProps
  extends DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    VariantProps<typeof inputClasses> {
  isLoading?: boolean;
}
const CustomSelect = React.forwardRef<
  Ref,
  SelectProps & Omit<InputWrapperProps, "type">
>(
  (
    {
      value,
      onChange,
      name,
      onBlur,
      placeholder,
      options,
      className = "",
      isDisabled,
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
        type={"select"}
        isDisabled={isDisabled}
        name={name}
        isShown={show}
        handleClick={handleClick}
        {...others}
      >
        <select
          name={name}
          onChange={onChange}
          value={value}
          id={name}
          ref={ref}
          onBlur={onBlur}
          placeholder={placeholder}
          className={cn(className, inputClasses({ variant, inputSize }))}
          disabled={isDisabled}
        >
          {options &&
            options.map((item) => (
              <option value={item.value} key={item.label}>
                {item.label}
              </option>
            ))}
        </select>
      </InputWrapper>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
