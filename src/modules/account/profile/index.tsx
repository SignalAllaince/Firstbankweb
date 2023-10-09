import Heading from "@/components/heading";
import AccountLayout from "@/components/layout/account-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";

const AccountProfile: NextPageWithLayout & ProtectedComponentType = () => {
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
    </Section>
  );
};

AccountProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

AccountProfile.auth = true;

export default AccountProfile;
