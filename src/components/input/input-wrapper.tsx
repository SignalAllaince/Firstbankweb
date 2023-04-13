import { IconButton, Spinner, Stack, Text } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { get } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RiErrorWarningFill } from "react-icons/ri";
import { InputWrapperProps } from "types/inputs";
import Icon from "../Icon/Icon";

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
  const brColor = hasError ? "#brand.1800" : "main.700";

  return (
    <Stack pos="relative" opacity={props.isDisabled ? 0.9 : 1}>
      {label && (
        <Text
          color="brand.800"
          _dark={{ color: "brand.100" }}
          textTransform="capitalize"
          textAlign="left"
          fontWeight="normal"
          as="label"
          fontSize="16px"
          htmlFor={name}
          mb={-1}
          transition="all 0.25s linear"
          bg={hasError ? "red.100" : "white.100"}
          w="max-content"
          px={2}
          pos="absolute"
          rounded="4"
          left={4}
          top={-1}
        >
          {label}
        </Text>
      )}
      <Stack
        direction="row"
        alignItems="center"
        overflow="hidden"
        pl={0}
        pr={props.pr || 0}
        spacing={0}
        rounded="10px"
        border="1px solid"
        transition="all 0.25s linear"
        bg={hasError ? "red.100" : "white"}
        borderColor={hasError ? "brand.1800" : "brand.1000"}
        color="gray.700"
        _placeholderShown={{
          bg: "transparent",
        }}
        _hover={{
          borderColor: `${
            hasError ? "#brand.1800" : props.isDisabled ? "" : "gray.400"
          }`,
        }}
        _focusWithin={{
          bg: bgColor,
          shadow: "none",
          borderColor: brColor,
        }}
        _dark={{
          bg: `${hasError ? "red.100" : "transparent"}`,
          borderColor: `${hasError ? "#brand.1800" : "grey.500"}`,
          color: `${hasError ? "red.700" : "brand.100"}`,
        }}
        h={props.h || props.height || "auto"}
      >
        {inputIcon && (
          <Icon
            iconComp={inputIcon}
            boxSize={7}
            ml={2}
            color="gray.300"
            mr={-1}
          />
        )}
        {/* The child input element which can be input, textarea, select etc */}
        {children}
        {/* To indicate loading, usefull when input default value is gotten from the server */}
        {isLoading && type !== "select" && (
          <Spinner
            thickness="2px"
            speed="0.4s"
            emptyColor="gray.200"
            color="main.700"
            size="md"
          />
        )}
        {/* Icon used to indicate error state */}
        {!isLoading && type !== "select" && hasError && (
          <Stack pr={1}>
            <Icon
              boxSize={6}
              iconComp={RiErrorWarningFill}
              color="red.500"
              fontWeight="bold"
            />
          </Stack>
        )}
        {/* password type switcher use to toggle password fields */}
        {type === "password" && !isLoading && (
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
        )}
      </Stack>
      {hasError && (
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
      )}
    </Stack>
  );
};

export default InputWrapper;
