import { ENDPOINTS } from "@/lib/constants";
import { secureRequest } from "@/lib/utils/api.utils";
import { FirstBankResponseType, ResponseErrorType } from "@/types/api.types";
// import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";

const getMutationAction = (mutationData: any) => {
  const { endpoint, method, headers, isCreathorsApi = true } = mutationData;

  const url = isCreathorsApi ? ENDPOINTS.API_BASE_URL + endpoint : endpoint;

  return {
    mutationFn: (body: Record<string, unknown>) =>
      secureRequest({
        url,
        method,
        body,
        headers,
      }),
    ...mutationData,
  };
};

function useCustomMutation<
  P = Record<string, unknown>,
  T = Record<string, unknown>
>(mutationData: any) {
  const {
    mutationFn,
    endpoint,
    showSuccessToast = true,
    showFailureToast = true,
    ...others
  } = getMutationAction({
    ...mutationData,
  });

  //   const toast = useToast({
  //     position: "top-right",
  //     variant: "left-accent",
  //     duration: 5000,
  //     isClosable: true,
  //     containerStyle: {
  //       maxWidth: "350px",
  //       fontSize: "0.9rem",
  //       textTransform: "capitalize",
  //     },
  //   });

  const mutatationResult = useMutation<
    FirstBankResponseType<P>,
    ResponseErrorType,
    T
  >(mutationFn, {
    mutationKey: endpoint,

    onError: (_err) => {
      if (showFailureToast) {
        // toast({
        //   title: `Request Failed`,
        //   description: `${err.response?.data?.message}`,
        //   status: "error",
        // });
      }
      mutatationResult.reset();
    },
    onSettled: (res, err) => {
      if (err) mutatationResult.reset();
      if (!err && showSuccessToast) {
        // toast({
        //   title: `Request Successful`,
        //   description: `${res.data.message}`,
        //   status: "success",
        // });
      }
      return;
    },
    retry: false,
    refetchOnWindowFocus: false,
    ...others,
  });

  return { ...mutatationResult, value: mutatationResult?.data?.data };
}

export default useCustomMutation;
