import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/images/logo.svg";
import Section from "../section";

function CheckoutNavbar() {
  return (
    <div className="w-full border-b border-brand-light bg-white py-5">
      <Section className="item-center flex justify-between ">
        <div className="flex w-[110px] items-center">
          <Link href="/">
            <Image src={logoImg} alt="first bank logo" />
          </Link>
        </div>
      </Section>
    </div>
  );
}

export default CheckoutNavbar;
