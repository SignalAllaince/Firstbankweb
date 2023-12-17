import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import IfElse from "@/components/if-else";
import AccountLayout from "@/components/layout/account-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import useGetUserInfo from "@/hooks/user/useGetUserInfo";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";

const AccountProfile: NextPageWithLayout & ProtectedComponentType = () => {
  const userInfo = useGetUserInfo();

  return (
    <Section className="space-y-4 pb-10">
      <PageHead title="Profile" />
      <div className="border-b border-brand-light pb-3">
        <Heading size="h5">Account Overview</Heading>
      </div>
      <IfElse
        ifOn={!userInfo.isLoading && !!userInfo?.value}
        ifOnElse={userInfo.isLoading && !userInfo?.value}
        onElse={
          <FadeInOut className="profile-grid grid gap-x-4 gap-y-8 font-light capitalize">
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="space-y-2" key={i}>
                <div className="h-7 w-full animate-pulse bg-slate-300"></div>
                <div className="h-7 w-1/2 animate-pulse bg-slate-300"></div>
              </div>
            ))}
          </FadeInOut>
        }
        elseThen={
          <div className="py-10 text-center">
            <p>Something Went Wrong</p>
          </div>
        }
      >
        <div className="profile-grid grid gap-x-4 gap-y-8 font-light capitalize">
          <div className="space-y-2">
            <p className="text-xs font-medium">First Name</p>
            <div className="text-sm">{userInfo?.value?.firstName}</div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium">User Name</p>
            <div className="text-sm">{userInfo?.value?.userName}</div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium">Last Name</p>
            <div className="text-sm">{userInfo?.value?.lastName}</div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium">Account Number</p>
            <div className="text-sm"></div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium">Email address</p>
            <div className="text-sm normal-case">{userInfo?.value?.email}</div>
          </div>
        </div>
      </IfElse>
    </Section>
  );
};

AccountProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

AccountProfile.auth = true;

export default AccountProfile;
