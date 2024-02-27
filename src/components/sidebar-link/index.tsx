import { motion } from "framer-motion";
import { Rubik } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Icon, { IconType } from "../icon";

const inter = Rubik({ subsets: ["latin"], weight: ["400"] });

function SidebarLink({
  href,
  LinkIcon,
  children,
  exact = true,
}: {
  href: string;
  LinkIcon: IconType;
  children: ReactNode;
  exact?: boolean;
}) {
  const pathname = usePathname();
  const active = exact ? pathname === href : pathname?.includes(href);
  return (
    <Link
      href={href}
      className={`relative flex w-full ${inter.className} items-center gap-4 rounded-[4px] p-4 text-sm text-brand-blue transition duration-200`}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Icon className="z-10" IconComp={LinkIcon} />
      <span className="z-10">{children}</span>
      {active ? (
        <motion.div
          className="absolute left-0 top-0  h-full w-full bg-[#F5F8FA]"
          layoutId="account"
        />
      ) : null}
    </Link>
  );
}

export default SidebarLink;
