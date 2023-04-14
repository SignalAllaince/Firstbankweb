import AuthLayout from "@/components/auth-layout";
import Button from "@/components/button";
import CustomInput from "@/components/input";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { FormEvent, ReactElement } from "react";

const BranchLogin: NextPageWithLayout & ProtectedComponentType = () => {
  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="gap-7" onSubmit={loginHandler}>
      <div className="space-y-4">
        <CustomInput
          name="jdjd"
          label="Branch sol ID"
          autoComplete="off"
          placeholder="4783IEDH2893"
          className="bg-black"
        />
        <CustomInput
          name="password"
          type="password"
          label="Password"
          autoComplete="off"
          className="autofill:bg-black"
          // value="4783IEDH2893"
        />
      </div>
      <div>
        <div className="pt-8"></div>
        <Button variant="primary" className="w-full bg-black" type="submit">
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
