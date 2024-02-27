import Link from "next/link";
import logoImg from "../../../public/images/logo.svg";
import BlurImage from "../image";
import Section from "../section";

function CheckoutNavbar() {
  return (
    <div className="w-full border-b border-brand-light bg-white py-5">
      <Section className="item-center flex justify-between ">
        <div className="flex w-[110px] items-center">
          <Link href="/">
            <BlurImage src={logoImg} alt="first bank logo" />
          </Link>
        </div>
      </Section>
    </div>
  );
}

export default CheckoutNavbar;
