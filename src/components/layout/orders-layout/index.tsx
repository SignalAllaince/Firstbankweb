import Heading from "@/components/heading";
import Section from "@/components/section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const links = [
  { text: "Order History", href: "/account/orders" },
  { text: "Open Orders (2)", href: "/account/orders/open" },
  { text: "Closed Orders", href: "/account/orders/closed" },
];

function OrderLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <Section className="space-y-4 pb-10">
      <div>
        <div className="border-b border-brand-light pb-3">
          <Heading size="h5">Orders</Heading>
        </div>
        <div className="box-border space-x-4 border-b border-brand-light py-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "border-brand-blue text-brand-darkest"
                  : "border-transparent text-brand-dark"
              } relative -bottom-[2px] border-b-2  border-opacity-80 px-6 py-2 text-sm transition duration-200`}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      {children}
    </Section>
  );
}

export default OrderLayout;
