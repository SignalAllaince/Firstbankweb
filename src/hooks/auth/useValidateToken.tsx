import useCustomMutation from "../use-mutationaction";

const useValidateToken = () => {
  return useCustomMutation({
    method: "post",
    endpoint: "token-validation",
    queryKey: ["token-validation"],
  });
};

export default useValidateToken;
