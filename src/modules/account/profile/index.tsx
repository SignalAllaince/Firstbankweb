import Button from "@/components/button";
import Heading from "@/components/heading";
import Textarea from "@/components/input/text-area";
import AccountLayout from "@/components/layout/account-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import useGetAddressList from "@/hooks/address/useGetAddressList";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  address: string;
  alternateAddress: string;
};

const AccountProfile: NextPageWithLayout & ProtectedComponentType = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const addressList = useGetAddressList();
  const updateAddressHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log(addressList?.value, "addressList?.value");

  return (
    <Section className="space-y-4 pb-10">
      <PageHead title="Profile" />
      <div className="border-b border-brand-light pb-3">
        <Heading size="h5">Account Overview</Heading>
      </div>
      <div className="profile-grid grid gap-x-4 gap-y-8 font-light capitalize">
        <div className="space-y-2">
          <p className="text-xs font-medium">First Name</p>
          <div className="text-sm">Emeka</div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium">Middle Name</p>
          <div className="text-sm">Christain</div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium">Last Name</p>
          <div className="text-sm">Nzekwe</div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium">Account Number</p>
          <div className="text-sm">0123456789</div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium">Email address</p>
          <div className="text-sm normal-case">emekanzekwe@gmail.com</div>
        </div>
      </div>

      <div className="space-y-2 pt-8">
        <Heading size="h5">Addresses</Heading>
        <form
          onSubmit={handleSubmit(updateAddressHandler)}
          className="space-y-4"
        >
          <Textarea
            {...register("address", { required: true })}
            errors={errors}
            bg="bg-brand-lightest"
            label="Delivery Address"
            placeholder="Plot 72, Unknown Estate, along Unknown Road, Unknown Town, Lagos State, Nigeria."
          />
          <Textarea
            {...register("alternateAddress", { required: true })}
            errors={errors}
            bg="bg-brand-lightest"
            label="Alternate Address"
            placeholder="Plot 72, Unknown Estate, along Unknown Road, Unknown Town, Lagos State, Nigeria."
          />
          <Button className=" text-sm uppercase" type="submit">
            Save Changes
          </Button>
        </form>
      </div>
    </Section>
  );
};

AccountProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

AccountProfile.auth = true;

export default AccountProfile;
