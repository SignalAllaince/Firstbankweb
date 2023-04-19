import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import Section from "@/components/section";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

const links = [
  { text: "Order History", href: "/account/orders" },
  { text: "Open Orders (2)", href: "/account/orders/open" },
  { text: "Closed Orders", href: "/account/orders/closed" },
];

function OrderLayout({
  children,
  isDetailsPage = false,
}: {
  children: ReactNode;
  isDetailsPage?: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Section className="pb-10">
      <div>
        <div className="border-b border-brand-light pb-3">
          {isDetailsPage ? (
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => router.back()}
                className="h-auto"
              >
                <Icon IconComp={ArrowLeftIcon} color="black" />
              </Button>
              <Heading size="h5">Order details</Heading>
            </div>
          ) : (
            <Heading size="h5">Orders</Heading>
          )}
        </div>
        {!isDetailsPage ? (
          <div className="box-border space-x-4 border-b border-brand-light py-2">
            <>
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
            </>
          </div>
        ) : null}
      </div>

      {children}
    </Section>
  );
}

export default OrderLayout;