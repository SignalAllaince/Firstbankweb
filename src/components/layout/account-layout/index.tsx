import Icon from "@/components/icon";
import LogoutModal from "@/components/modal/logout";
import useDisclosure from "@/hooks/use-disclosure";
import {
  ArrowLeftOnRectangleIcon,
  StarIcon,
  UserCircleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { Rubik } from "next/font/google";
import { ReactNode } from "react";
import Footer from "../../footer";
import Navbar from "../../navbar";
import Section from "../../section";
import SidebarLink from "../../sidebar-link";

// const inter = Inter({ subsets: ["cyrillic"] });
const inter = Rubik({ subsets: ["cyrillic"], weight: ["300"] });
const boldInter = Rubik({ subsets: ["latin"], weight: ["400"] });

const links = [
  { text: "My Account", href: "/account", icon: UserCircleIcon, exact: true },
  { text: "Orders", href: "/account/orders", icon: WalletIcon, exact: false },
  {
    text: "Rating & Reviews",
    href: "/account/reviews",
    icon: StarIcon,
    exact: true,
  },
];
function AccountLayout({ children }: { children: ReactNode }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div className={`flex ${inter.className} min-h-screen w-full flex-col`}>
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
              <button
                onClick={onOpen}
                className={`flex w-full ${boldInter.className} items-center gap-4 rounded-[4px] p-4 text-sm text-brand-blue transition duration-200`}
              >
                <Icon IconComp={ArrowLeftOnRectangleIcon} />
                <span>Logout</span>
              </button>
            </div>
          </div>

          <div className="flex-1">{children}</div>
        </Section>
      </div>
      <Footer />
      <LogoutModal onClose={onClose} isOpen={isOpen} />
    </div>
  );
}

export default AccountLayout;
