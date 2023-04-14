import { get } from "react-hook-form";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { RiErrorWarningFill } from "react-icons/ri";
// import Icon from "../Icon/Icon";
import { InputWrapperProps } from "@/types/component.types";

const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  name,
  label,
  isLoading = false,
  type = "text",
  errors = null,
  isShown,
  handleClick,
  inputIcon,
  ...props
}) => {
  const hasError = get(errors, name);
  const bgColor = hasError ? "red.100" : "white";

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
        className="flex h-11 items-center overflow-hidden rounded-none bg-brand-lightest"
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
        {/* {inputIcon && (
          <Icon
            iconComp={inputIcon}
            boxSize={7}
            ml={2}
            color="gray.300"
            mr={-1}
          />
        )} */}
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
        {/* {!isLoading && type !== "select" && hasError && (
          <div className="pr-1">
            <Icon
              boxSize={6}
              iconComp={RiErrorWarningFill}
              color="red.500"
              fontWeight="bold"
            />
          </div>
        )} */}
        {/* password type switcher use to toggle password fields */}
        {/* {type === "password" && !isLoading && (
          <IconButton
            variant="link"
            aria-label="passowrd toggler"
            textDecoration="none"
            onClick={handleClick}
            mr={1}
          >
            {isShown ? (
              <Icon iconComp={FiEyeOff} color="gray.500" />
            ) : (
              <Icon iconComp={FiEye} color="gray.500" />
            )}
          </IconButton>
        )} */}
      </div>
      {/* {hasError && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => {
            return (
              <Stack pos="absolute" bottom={-4} right={0}>
                <Text color="red.600" fontSize="xs" fontWeight="semi-bold">
                  {message}
                </Text>
              </Stack>
            );
          }}
        />
      )} */}
    </div>
  );
};

export default InputWrapper;
