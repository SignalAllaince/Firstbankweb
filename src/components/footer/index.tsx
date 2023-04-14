import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Section from "../section";

function Footer() {
  return (
    <div className="sticky bottom-0 w-full bg-brand-darkest py-7 text-xs text-white">
      <Section className="flex max-w-[1200px] items-end justify-between">
        <p>© 2023. First Bank of Nigeria Ltd. An FBNHoldings Company.</p>
        <div className="space-y-6">
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2">
              <DevicePhoneMobileIcon className="h-5 w-5" />
              234-000-0000
            </a>
            <a href="#" className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              help@firstbankltd.com
            </a>
          </div>
          <a href="#" className="flex">
            Privacy Policy & Terms of Use
          </a>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
