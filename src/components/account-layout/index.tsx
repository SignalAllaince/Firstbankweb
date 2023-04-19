import {
  ArrowLeftOnRectangleIcon,
  StarIcon,
  UserCircleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import Section from "../section";
import SidebarLink from "../sidebar-link";

const inter = Inter({ subsets: ["cyrillic"] });

const links = [
  { text: "My Account", href: "/account", icon: UserCircleIcon },
  { text: "Order", href: "/account/orders", icon: WalletIcon },
  { text: "Rating & Reviews", href: "/account/reviews", icon: StarIcon },
  { text: "Logout", href: "/logout", icon: ArrowLeftOnRectangleIcon },
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
              >
                {link.text}
              </SidebarLink>
            ))}
          </div>
          <div className="flex-1">{children}</div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default AccountLayout;
