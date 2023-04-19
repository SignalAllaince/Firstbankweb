import {
  ArrowLeftOnRectangleIcon,
  StarIcon,
  UserCircleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Footer from "../../footer";
import Navbar from "../../navbar";
import Section from "../../section";
import SidebarLink from "../../sidebar-link";

const inter = Inter({ subsets: ["cyrillic"] });

const links = [
  { text: "My Account", href: "/account", icon: UserCircleIcon, exact: true },
  { text: "Order", href: "/account/orders", icon: WalletIcon, exact: false },
  {
    text: "Rating & Reviews",
    href: "/account/reviews",
    icon: StarIcon,
    exact: true,
  },
];
function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className} flex min-h-screen w-full flex-col`}>
      <Navbar />
      <div className="flex-1 border-t border-brand-light bg-white pt-6">
        <Section className="flex items-start gap-6">
          <div className="w-[260px] flex-shrink-0">
            {links.map((link) => (
              <SidebarLink
                key={link.text}
                LinkIcon={link.icon}
                href={link.href}
                exact={link.exact}
              >
                {link.text}
              </SidebarLink>
            ))}
            <div className="border-t border-brand-light">
              <SidebarLink LinkIcon={ArrowLeftOnRectangleIcon} href="">
                Logout
              </SidebarLink>
            </div>
          </div>

          <div className="flex-1">{children}</div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default AccountLayout;
