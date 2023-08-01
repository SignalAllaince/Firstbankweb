import Button from "@/components/button";
import CustomInput from "@/components/input";
import AuthLayout from "@/components/layout/auth-layout";
import PageHead from "@/components/page-head";
import useNotification from "@/hooks/use-notification";
import { ProtectedNextPage } from "@/types/component.types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ParsedUrlQuery } from "querystring";
import React, { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type LogininType = {
  csrfToken: string;
  query: ParsedUrlQuery;
};

type Inputs = {
  branchId: string;
  password: string;
};
const BranchLogin: ProtectedNextPage<LogininType> = ({ csrfToken, query }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const { toast } = useNotification();

  const submitLoginRequest: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      redirect: false,
      userId: data.branchId,
      token: data.password,
      callbackUrl: "/login/branch",
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
      });
      router.replace(query?.callbackUrl ? (query?.callbackUrl as string) : "/");
    });
  };

  return (
    <>
      <PageHead title="Branch Login" />

      <form className="gap-7" onSubmit={handleSubmit(submitLoginRequest)}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="space-y-4">
          <CustomInput
            {...register("branchId")}
            errors={errors}
            label="Branch sol ID"
            autoComplete="off"
            placeholder="4783IEDH2893"
          />
          <CustomInput
            {...register("password")}
            errors={errors}
            type="password"
            label="Password"
            autoComplete="off"
          />
        </div>
        <div>
          <div className="pt-8"></div>
          <Button
            variant="primary"
            className="w-full"
            type="submit"
            isLoading={isLoading}
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

BranchLogin.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout authType="branch">{page}</AuthLayout>;
};

BranchLogin.auth = false;
export default BranchLogin;
