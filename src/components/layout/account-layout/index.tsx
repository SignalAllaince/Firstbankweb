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
  { text: "My Account", href: "/account", icon: UserCircleIcon },
  { text: "Order", href: "/account/orders", icon: WalletIcon },
  { text: "Rating & Reviews", href: "/account/reviews", icon: StarIcon },
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

// import Heading from "@/components/heading";
// import Section from "@/components/section";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ReactNode } from "react";

// const links = [
//   { text: "Order History", href: "/account/orders" },
//   { text: "Open Orders (2)", href: "/account/orders/open" },
//   { text: "Closed Orders", href: "/account/orders/closed" },
// ];

// function OrderLayout({ children }: { children: ReactNode }) {
//   const pathname = usePathname();
//   console.log(pathname);
//   return (
//     <Section className="space-y-4 pb-10">
//       <div>
//         <div className="border-b border-brand-light pb-3">
//           <Heading size="h5">Orders</Heading>
//         </div>
//         <div className="box-border space-x-4 border-b border-brand-light py-2">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="relative -bottom-[2px] border-b-2  border-opacity-80 px-6 py-2 text-sm transition duration-200"
//               style={{
//                 borderColor:
//                   pathname === link.href ? "rgb(0 59 101)" : "transparent",
//                 color:
//                   pathname === link.href ? "rgb(20 38 51)" : "rgb(80 100 115)",
//               }}
//             >
//               {link.text}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {children}
//     </Section>
//   );
// }

// export default OrderLayout;
