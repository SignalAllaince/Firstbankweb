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
  staffId: string;
  password: string;
};

const PersonalLogin: ProtectedNextPage<LogininType> = ({
  csrfToken,
  query,
}) => {
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
      userId: data.staffId,
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
        description: "Login Successful",
      });
      router.replace(query?.callbackUrl ? (query?.callbackUrl as string) : "/");
    });
  };

  return (
    <>
      <PageHead title="Staff Login" />
      <form className="gap-7" onSubmit={handleSubmit(submitLoginRequest)}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

        <div className="space-y-4">
          <CustomInput
            {...register("staffId", { required: true })}
            errors={errors}
            label="Staff Number"
            autoComplete="off"
            placeholder="4783IEDH2893"
            className="bg-black"
          />
          <CustomInput
            {...register("password", { required: true })}
            errors={errors}
            type="password"
            label="Password"
            autoComplete="off"
            // value="4783IEDH2893"
          />
        </div>
        <div>
          <div className="pt-8"></div>
          <Button
            isLoading={isLoading}
            variant="primary"
            className="w-full bg-black"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

PersonalLogin.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout authType="personal">{page}</AuthLayout>;
};

PersonalLogin.auth = false;

export default PersonalLogin;
