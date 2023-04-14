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
  const bgColor = hasError ? "bg-red-100" : "bg-brand-lightest";

  return (
    <div
      className={`relative text-brand-darkest ${
        props.isDisabled ? "opacity-90" : "opacity-100"
      }`}
    >
      {label && (
        <label
          className=" text-left text-sm capitalize"
          htmlFor={name}
          // bg={hasError ? "red.100" : "white.100"}
        >
          {label}
        </label>
      )}
      <div
        className={`flex h-11 items-center overflow-hidden rounded-none ${bgColor}`}
        // pr={props.pr || 0}
        // transition="all 0.25s linear"
        // bg={hasError ? "red.100" : "white"}
        // _hover={{
        //   borderColor: `${
        //     hasError ? "#brand.1800" : props.isDisabled ? "" : "gray.400"
        //   }`,
        // }}
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
          <Button onClick={handleClick}>
            {isShown ? (
              <Icon IconComp={EyeSlashIcon} className="text-gray-500" />
            ) : (
              <Icon IconComp={EyeIcon} className="text-gray-500" />
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
