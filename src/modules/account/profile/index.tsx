import Heading from "@/components/heading";
import CustomInput from "@/components/input";
import AccountLayout from "@/components/layout/account-layout";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import * as CryptoJS from "crypto-js";
import { ChangeEvent, ReactElement } from "react";

const AccountProfile: NextPageWithLayout & ProtectedComponentType = () => {
  // §
  const origCipher =
    "22BEE2AC4C4BB0DB13D399DCF3DE983A6420E23AE2ACEDAC66C75FEF661DED1ED80A5BFE86CE4C2A3608518404BD2D699902D105A399AA542DE5A527C8FC7C94D4EF9A59319EA01921E34837342A3DAC1D4A68326BB9E678F4856DCC9727880C9B1348C229B8542B808C70CD36C0CC42991CB14D8B1B42E4E21F70F76B6C34F4B6D5C6A7E144AEC37EDCCB8EC925BC2308049B9D537CE670AD455B142B9160DD46CC4614360B3D1FF1AAEFE8926374A2E733ABA83894EF43BAACC6900C1DDD5F";
  // "50E52A3401B70B58DBDDDA0D124ACF3480D01C5243566E87AEB059F4F00A48DFDB152D078AE2A48C2AD1FB3D5778D73C17C101A2E12A3A4E7AF37D9DCAA43E9B47836715B178B7ACAB60CC4FB0080E6C1B6F5C7EE4CF2FF32EF44A041848CF856BC63B69A9431F646BF3C8161457B62B0015F0E953740FC37B33AF4662D14C3F875C3EA3B6E0FE757F8F84C253F7E927FF98693ACE74CB3B6CAC90528F8789A0F3FE63C1B0BD874A6CF305AF1EA6F7F8295253CCB2DEED3541DE085D54BBAA24";
  // "22BEE2AC4C4BB0DB13D399DCF3DE983A6420E23AE2ACEDAC66C75FEF661DED1ED80A5BFE86CE4C2A3608518404BD2D699902D105A399AA542DE5A527C8FC7C94D4EF9A59319EA01921E34837342A3DAC1D4A68326BB9E678F4856DCC9727880C9B1348C229B8542B808C70CD36C0CC42991CB14D8B1B42E4E21F70F76B6C34F4B6D5C6A7E144AEC37EDCCB8EC925BC2308049B9D537CE670AD455B142B9160DD46CC4614360B3D1FF1AAEFE8926374A2E733ABA83894EF43BAACC6900C1DDD5F";

  const cipher = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Hex.parse(origCipher)
  );

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const key = CryptoJS.lib.WordArray.create(
      new Uint8Array([
        54, 167, 80, 46, 194, 112, 85, 163, 58, 198, 45, 107, 3, 237, 53, 175,
      ]) as unknown as number[]
    );

    const iv = CryptoJS.lib.WordArray.create(
      new Uint8Array([
        217, 219, 204, 178, 103, 192, 70, 81, 141, 80, 111, 188, 198, 202, 16,
        227,
      ]) as unknown as number[]
    );

    const decrypted = CryptoJS.AES.decrypt(cipher, key, {
      iv: iv,
    });

    // const plainText = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    const plainText = decrypted.toString(CryptoJS.enc.Utf8);

    console.log(plainText, "decrypted");
  };

  return (
    <Section className="space-y-4 pb-10">
      <div className="border-b border-brand-light pb-3">
        <Heading size="h5">Account Overview</Heading>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8 font-light capitalize">
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

      {/* Demo */}
      <input type="file" accept=".txt" onChange={handleFileUpload} />
      <CustomInput name="translation" />
    </Section>
  );
};

AccountProfile.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

AccountProfile.auth = false;

export default AccountProfile;
