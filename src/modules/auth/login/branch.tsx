import Button from "@/components/button";
import CustomInput from "@/components/input";
import AuthLayout from "@/components/layout/auth-layout";
import useValidateToken from "@/hooks/auth/useValidateToken";
import useLocalStore from "@/hooks/use-localstore";
import { STOREID } from "@/lib/constants";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  branchId: string;
  password: string;
};
const BranchLogin: NextPageWithLayout & ProtectedComponentType = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const validateToken = useValidateToken();
  const store = useLocalStore(STOREID);
  const router = useRouter();

  const submitLoginRequest: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    validateToken
      .mutateAsync({
        userId: "7B0030007800640033006600640035003000",
        token: "johnbosco",
      })
      .then((res) => {
        store?.setItem(res.data?.data);
        router.replace("/");
      });
  };

  return (
    <form className="gap-7" onSubmit={handleSubmit(submitLoginRequest)}>
      <div className="space-y-4">
        <CustomInput
          {...register("branchId", { required: true })}
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
        />
      </div>
      <div>
        <div className="pt-8"></div>
        <Button
          variant="primary"
          className="w-full"
          type="submit"
          isLoading={validateToken.isLoading}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

BranchLogin.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout authType="branch">{page}</AuthLayout>;
};

BranchLogin.auth = false;

export default BranchLogin;
