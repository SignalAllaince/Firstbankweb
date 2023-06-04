import Button from "@/components/button";
import Heading from "@/components/heading";
import AccountLayout from "@/components/layout/account-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import useValidateToken from "@/hooks/auth/useValidateToken";
import { decryptResponse } from "@/lib/utils/common.utils";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import * as CryptoJS from "crypto-js";
import { format } from "crypto-js";
import { ReactElement, useEffect } from "react";

const AccountProfile: NextPageWithLayout & ProtectedComponentType = () => {
  const validateToken = useValidateToken();
  // §
  // "ECBA94BE7E0981F2FC1CD1DF086BB9DF61446BD9BA9FB0D5E7D268CAAFB161750F5652B2E3DAEA94E750FEC04E4514602D8DB839C8DA06DF6732768E90231FB67811BAFDD719D36DFB639968A527D3FA6FB5B4AA343D92F112F11BC857DF9CEFF33B4B1ABF72AE1CF33076814215BCD91BDE31AFC2EEE43E80E99CF1EAB43AF6101658BF5A166DB06893887489F99B892F2824FF2AD9678B32A3787245FB67C180A5BA264FEF6D1ACD690B4DFBD7395A89683D18C0EBCD4C081C40AAF6FD2048";

  useEffect(() => {
    const handleFileUpload = async () => {
      const origCipher =
        "CE9425ADBD0B12872D19A54EAD3FC4F89A6F3F8EA2ED89CAC64030A407F535DF6CF7F7F36F8F7CA8CB8C0487C086509974141A1809A600761F3E08D1E6E6B533B0FD0BA90462D04DD96AF501DFB8AF0D91687331CBC8360973EF0CD6C0C91BE2A78DF2A4D8656C33CAD3B2F5FAF45F6B2205B8F3652D965FA105992BB62A63D5E53957C6B1624FE0D1C9E551F3DAAC8F7B0E624A3143137A017A81CC37514B4F1B6B7F5BD01DA34DF236E1F062622FD12AE8AF5BB550D328A8B223BE82BDCDB6E61A28201509D41849AABA5BD61D58FF43A750A7A532991813E601B7081036AA4D1B23A2DF5195D0FFC4A6E6A9C7E402C7193018984A3691DB17A3D3BC0B459EAA0D4C739608039059C1A0653F0FD7CDF66B4F8E968209D39C9D5F680BA2C8FC5D8642AA385CD8FBF57D6C84ED648910BB4E712AB8152D07C5157F2CA3FAD213E8FA96C1B9DA88EA601F7C557B5B8D51EC1A364854369F76885E1B57E6E2E205645856E4A1D91977CB48787AFC213EE243A9572E4CC6A938B2C02D307F5C07C50ADFF9357341CAC0DDEEEA429B61DA0A26D2E3A98E4468597AA8E1520424E1AB34C02AA9748A1CCF8C68ED1046CD0D5DDFA9F53B2B58400BB18684437FE8894AFF8F2306631735184CADF8708DE16C060AC39D92E5DA4DCB19FD29EDB9C6186C1D4E64251106CE73FF8BC04FB9497EE0393FC6E7114EA337B542F6DEECB0C077B7E104E50249138C4A43A79756AAA4051D5E1E168EAE0DE36E7F139EC944AF4805A3A03D7314A76CE7E8C955F483AB40EA6BC5B083AB25F0BD6230C387AB424106B352C08200D0522EB9008F27DF18BAE2F2E6AE5B944D910E0532A42E3E45E2ABF9A08E55D095BE3F4A2D88A9317B5168868515CB5AA9898BDDC2004D201D2874038A29FD18EB2A78856460B61713F07CCE7EB48EAE49A1CA979561CCF3BE0ECEE6230F2C24FB4CB37679DD846104EE7E1EC5F24FDADD2BF072AF22B2D2B811753599CDB4BA4BC1180CDA8EF594CE65461E5F3F06BC1A4DEF0FDAC6EBCEC304D7A9EC9998937AC2C91ADCB85BC8318FA06842537DC5C73E01B09218109AED2DEC49B45250DC70AEBB536A42CA6EAA7D6471706D9A2F108C5774405729E72E9DB2E350DC98EC787FD115DBD033F2B60454ED634414A2C3516EE6F389ACA0C411591D63909711E0137D6492D6A4701B7D6DBE31F58F3F9B186FB11D0C574FE4232816B3A930790F43D73799959E20A4C00462669FEA0C0757706CA5EB5F67957E94EA905D33E3B7B5F559BCF74E6873EBDE3E68B2C489E74EC44B5C601F94B5BC92DC04F925A933CC5FE92B586ACD27B61F046747118482D652E97FB2F14C46FDABE8F0F416D59E2467A2EBE254D38B9350F90060AE61B8B6625DBD96E09F2D7DD63E33C731266AE7CE24CEF40C22975270BE4F3CFB703D024DF37316287058F5BC4231B4FC1852F0C8A1174288C92774EF28B2D2A9D46B6FFFB66BA910EE11A6217E41A5BFC10D26E05076F1F16899889F4A0E1663FFD44E3D2801AFA279139B4B7389922DE1E79C8BEE644A452FF2C81002582819EF4C73589412714A9284B5089C33A61259D53FE9A1DAFE7685FA7E6311B820C87F5E99F0CB39AF2EC0B9D84DF9F8AE3E88BAB52C40263841A2A15D3229F58D61CF6B048FC42BD19AD30EF7CC343338FF525A7120E4712671C87CDDFA37C989B515596F8BA62AB983CA4C83E0FA37609CEA0F6B592DEF26A63F296AB9A448DB78BEEF92D652CDF335D189353184B827B83BC1FEE6DF3578C37EC7647747262EB9193BFFB78460399B5446598674C495FF6F4E0C0A0F9BBAB5A5075A9E26837808C319BDED290BDDF2BEC52F43917B469D51B995893FC101E913CCEBA36E81B5C6CD6CF88869F917911FB685FBD568C0EF8F516B07F087B205EBBD96E14121FCE40E54D6D1E251D18834A9944814CEB8695CF83CF36AB2D4FFC442EF812E049A3B5CCCE66D2F4717E4A6DAFB56512046F930044232F709033C7C541568E07AA6DB942E787011A0A53A113BCD";

      const cipher = CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Hex.parse(origCipher)
      );

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
        format: format.OpenSSL,
      });
      // const plainText = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

      // const plainText = JSON.parse(
      //   JSON.stringify(decrypted.toString(CryptoJS.enc.Utf8))
      // );

      const plainText = decrypted.toString(CryptoJS.enc.Utf8).toString();

      // const parsedRes = JSON.parse(plainText);
      // console.log(plainText, "decrypted");
      // console.log(JSON.parse(plainText), "decrypted");

      // console.log(parsedRes);
    };
    handleFileUpload();
  }, []);

  const validateTokenHandler = () => {
    validateToken
      .mutateAsync({
        userId: "7B0030007800640033006600640035003000",
        token: "johnbosco",
      })
      .then(() => {
        console.log(validateToken.value);
        const answer = decryptResponse(validateToken?.value?.content as string);
        console.log(answer, "answer");
        // const name = { ...answer };
        // console.log(JSON.stringify(answer), "json answer");
        // console.log(name, "json answer");
      });
  };
  return (
    <Section className="space-y-4 pb-10">
      <PageHead title="Profile" />
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
          <Button
            className="flex-shrink-0"
            onClick={validateTokenHandler}
            isLoading={validateToken.isLoading}
          >
            Validate Token
          </Button>
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
