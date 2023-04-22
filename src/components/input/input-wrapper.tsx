import { InputWrapperProps } from "@/types/component.types";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ErrorMessage } from "@hookform/error-message";
import { get } from "react-hook-form";
import Button from "../button";
import Icon from "../icon";

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  name,
  label,
  isLoading = false,
  type = "text",
  errors,
  isShown,
  handleClick,
  inputIcon,
  ...props
}) => {
  const hasError = get(errors, name);
  const bgColor = hasError ? "bg-red-100" : props.bg ?? "bg-brand-lightest";
  const borderColor = hasError
    ? "border-red-400"
    : props.borderColor ?? "border-transparent";

  return (
    <div
      className={`relative w-full text-brand-darkest ${
        props.isDisabled ? "opacity-90" : "opacity-100"
      }`}
    >
      {label && (
        <label
          className="mb-10 text-left text-sm capitalize text-white sm:text-brand-darkest"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={`flex h-11 items-center overflow-hidden rounded-[4px] border ${
          props.h ?? "h-11"
        } ${bgColor} ${borderColor} ${label ? "mt-2" : ""}`}
        // pr={props.pr || 0}
        // transition="all 0.25s linear"
        // bg={hasError ? "red.100" : "white"}
        // _focusWithin={{
        //   bg: bgColor,
        //   shadow: "none",
        //   borderColor: brColor,
        // }}
      >
        {inputIcon && (
          <Icon IconComp={inputIcon} boxSize={7} className="text-gray-300" />
        )}
        {/* The child input element which can be input, textarea, select etc */}
        {children}
        {/* To indicate loading, usefull when input default value is gotten from the server */}
        {/* {isLoading && type !== "select" && (
          <Spinner
            thickness="2px"
            speed="0.4s"
            emptyColor="gray.200"
            color="main.700"
            size="md"
          />
        )} */}
        {/* Icon used to indicate error state */}
        {!isLoading && type !== "select" && hasError && (
          <div className="pr-1">
            <Icon boxSize={6} IconComp={EyeIcon} className="text-red-400" />
          </div>
        )}
        {/* password type switcher use to toggle password fields */}
        {type === "password" && !isLoading && (
          <Button
            variant="secondary"
            className="border-0 px-[12px] outline-none focus:border-0 focus:ring-0 focus:ring-transparent"
            onClick={handleClick}
          >
            {isShown ? (
              <Icon IconComp={EyeSlashIcon} className="text-brand-darkest" />
            ) : (
              <Icon IconComp={EyeIcon} className="text-brand-darkest" />
            )}
          </Button>
        )}
      </div>
      {hasError && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => {
            return (
              <div className="absolute -bottom-4 right-0">
                <p className="text-xs font-semibold text-red-600">{message}</p>
              </div>
            );
          }}
        />
      )}
    </div>
  );
};

export default InputWrapper;
