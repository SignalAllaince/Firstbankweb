import Heading from "@/components/heading";
import AccountLayout from "@/components/layout/account-layout";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import * as CryptoJS from "crypto-js";
import { ReactElement, useEffect } from "react";

const AccountProfile: NextPageWithLayout & ProtectedComponentType = () => {
  // §
  const origCipher =
    "ECBA94BE7E0981F2FC1CD1DF086BB9DF61446BD9BA9FB0D5E7D268CAAFB161750F5652B2E3DAEA94E750FEC04E4514602D8DB839C8DA06DF6732768E90231FB67811BAFDD719D36DFB639968A527D3FA6FB5B4AA343D92F112F11BC857DF9CEFF33B4B1ABF72AE1CF33076814215BCD91BDE31AFC2EEE43E80E99CF1EAB43AF6101658BF5A166DB06893887489F99B892F2824FF2AD9678B32A3787245FB67C180A5BA264FEF6D1ACD690B4DFBD7395A89683D18C0EBCD4C081C40AAF6FD2048";

  const cipher = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Hex.parse(origCipher)
  );

  useEffect(() => {
    const handleFileUpload = async () => {
      const key = CryptoJS.lib.WordArray.create(
        new Uint8Array([
          47, 21, 93, 79, 222, 129, 39, 96, 105, 244, 50, 31, 80, 5, 101, 48,
        ]) as unknown as number[]
      );

      const iv = CryptoJS.lib.WordArray.create(
        new Uint8Array([
          119, 12, 100, 5, 56, 0, 208, 140, 23, 170, 7, 209, 87, 167, 178, 255,
        ]) as unknown as number[]
      );

      const decrypted = CryptoJS.AES.decrypt(cipher, key, {
        iv: iv,
      });
      // const plainText = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

      // const plainText = JSON.parse(
      //   JSON.stringify(decrypted.toString(CryptoJS.enc.Utf8))
      // );

      const plainText = decrypted.toString(CryptoJS.enc.Utf8);

      console.log(plainText, "decrypted");
    };
    handleFileUpload();
  }, []);

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
    </Section>
  );
};

AccountProfile.getLayout = function getLayout(page: ReactElement) {
  return <AccountLayout>{page}</AccountLayout>;
};

AccountProfile.auth = false;

export default AccountProfile;
