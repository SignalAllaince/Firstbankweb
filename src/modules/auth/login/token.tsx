import Button from "@/components/button";
import FadeInOut from "@/components/fade";
import CustomInput from "@/components/input";
import useValidateToken from "@/hooks/auth/useValidateToken";
import useNotification from "@/hooks/use-notification";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type Inputs = {
  token: string;
};
type LogininType = {
  csrfToken: string;
  query: any;
  userId: string;
};

const tokenSchema = yup.object({
  token: yup.string().required("Token is required").length(8).trim(),
});

const TokenComp = ({ csrfToken, query, userId }: LogininType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    resolver: yupResolver(tokenSchema),
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const { toast } = useNotification();
  const validateToken = useValidateToken(userId, watch("token"));

  const submitLoginRequest: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    validateToken
      .mutateAsync({})
      .then(() => {
        signIn("credentials", {
          redirect: false,
          userId: userId,
          token: data.token,
          callbackUrl: "/login",
        }).then((res) => {
          setIsLoading(false);
          if (!res?.ok) {
            return toast({
              appearance: "error",
              description: "Authorization failed",
            });
          }
          toast({
            appearance: "success",
            title: "Login Successful",
            description: "You have successfully logged into your account",
          });
          router.replace(
            query?.callbackUrl ? (query?.callbackUrl as string) : "/"
          );
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <FadeInOut>
      <form className="pb-6" onSubmit={handleSubmit(submitLoginRequest)}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="space-y-10">
          <CustomInput
            {...register("token", { required: true })}
            errors={errors}
            type="password"
            label="token"
            placeholder="Input token"
            min={8}
            max={8}
            autoComplete="off"
            // value="4783IEDH2893"
          />
          <Button
            isLoading={isLoading}
            variant="primary"
            className="w-full"
            type="submit"
          >
            Validate token
          </Button>
        </div>
      </form>
    </FadeInOut>
  );
};

export default TokenComp;
