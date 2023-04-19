import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Icon, { IconType } from "../icon";

function SidebarLink({
  href,
  LinkIcon,
  children,
}: {
  href: string;
  LinkIcon: IconType;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className="flex w-full items-center gap-4 p-4 text-brand-darkest transition duration-200"
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
