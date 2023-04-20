import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Icon, { IconType } from "../icon";

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
      className="flex w-full items-center gap-4 rounded-[4px] p-4 text-sm text-brand-darkest transition duration-200"
      style={{
        backgroundColor: active ? "#F5F8FA" : "transparent",
      }}
    >
      <Icon IconComp={LinkIcon} />
      <span>{children}</span>
    </Link>
  );
}

export default SidebarLink;
