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
  staffId: string;
  password: string;
};
const PersonalLogin: NextPageWithLayout & ProtectedComponentType = () => {
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
          isLoading={validateToken.isLoading}
          variant="primary"
          className="w-full bg-black"
          type="submit"
        >
          Login
        </Button>
      </div>
    </form>
  );
};
PersonalLogin.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout authType="personal">{page}</AuthLayout>;
};

PersonalLogin.auth = false;

export default PersonalLogin;
