import AddressCard from "@/components/address-card";
import Button from "@/components/button";
import Heading from "@/components/heading";
import IfElse from "@/components/if-else";
import AccountLayout from "@/components/layout/account-layout";
import UserAddressModal from "@/components/modal/user-address";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import useGetAddressList from "@/hooks/address/useGetAddressList";
import useDisclosure from "@/hooks/use-disclosure";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { AnimatePresence } from "framer-motion";

const AccountProfile: NextPageWithLayout & ProtectedComponentType = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const addressList = useGetAddressList();

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

      <div className="space-y-5 pt-8">
        <div className="flex w-full items-center justify-between">
          <Heading size="h5">Address</Heading>
          <Button
            onClick={onOpen}
            variant="cart"
            size="xs"
            className="border-brand-blue text-brand-blue"
          >
            Add Address
          </Button>
        </div>
        <div className="space-y-4">
          <AnimatePresence>
            <IfElse
              ifOn={!addressList.isLoading && !!addressList?.value}
              ifOnElse={addressList.isLoading && !addressList?.value}
              onElse={
                <div className="flex items-start justify-between border-b">
                  <div className="max-w-[400px] py-4 text-slate-700">
                    <div className="item-start flex gap-3">
                      <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden  rounded-[4px] bg-brand-light">
                        <div className="h-full w-full bg-slate-200 object-cover object-center" />
                      </div>
                      <div className="flex h-[100px] flex-col justify-between">
                        <div className="space-y-2">
                          <div className="h-2 w-40 max-w-[400px] bg-slate-200" />
                          <div className="h-2 w-28 max-w-[400px] bg-slate-200" />
                          <div className="h-2 w-20 max-w-[400px] bg-slate-200" />
                        </div>
                        <div className="h-2 w-14 bg-slate-200 px-2" />
                        <div className="h-5 w-14 bg-slate-200 px-2" />
                      </div>
                    </div>
                  </div>

                  <div className="flex h-full w-[200px] flex-col items-end space-y-4 py-2 text-center">
                    <div className="h-6 w-24 bg-slate-200 px-2" />
                  </div>
                </div>
              }
            >
              <>
                {addressList?.value?.map((address) => (
                  <AddressCard
                    refetch={addressList.refetch}
                    address={address}
                    key={address.addressId}
                  />
                ))}
              </>
            </IfElse>
          </AnimatePresence>
        </div>
      </div>
      <UserAddressModal
        isOpen={isOpen}
        onClose={onClose}
        refetch={addressList.refetch}
      />
    </Section>
  );
};

AccountProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

AccountProfile.auth = true;

export default AccountProfile;
