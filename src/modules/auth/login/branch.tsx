import Button from "@/components/button";
import CustomInput from "@/components/input";
import PageHead from "@/components/page-head";
import useUserAuth from "@/hooks/auth/useUserAuth";
import { ProtectedNextPage } from "@/types/component.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ParsedUrlQuery } from "querystring";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import TokenComp from "./token";

type LogininType = {
  csrfToken: string;
  query: ParsedUrlQuery;
};

type Inputs = {
  branchId: string;
  password: string;
};

const staffSchema = yup.object({
  branchId: yup.string().required("Branch ID is required").min(5).trim(),
  password: yup.string().required("Password is required").min(5).trim(),
});

const PersonalLogin: ProtectedNextPage<LogininType> = ({
  csrfToken,
  query,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(staffSchema),
  });
  const userAuth = useUserAuth(watch("branchId"), watch("password"));

  const submitLoginRequest: SubmitHandler<Inputs> = (data) => {
    userAuth
      .mutateAsync(data)
      .then(() => {})
      .catch(console.log);
  };

  if (userAuth?.value && userAuth.isSuccess) {
    return (
      <TokenComp
        csrfToken={csrfToken}
        query={query}
        userId={userAuth?.value as unknown as string}
      />
    );
  }
  return (
    <>
      <PageHead title="Staff Login" />
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
            isLoading={userAuth.isLoading}
            variant="primary"
            className="w-full"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

PersonalLogin.auth = false;

export default PersonalLogin;
