import Image from "next/image";
import Link from "next/link";
import branchImg from "../../../public/images/icons/branch.svg";
import homeImg from "../../../public/images/icons/home.svg";
import officeImg from "../../../public/images/icons/office.svg";
import penImg from "../../../public/images/icons/pen.svg";
import shirtImg from "../../../public/images/icons/shirt.svg";
import tagImg from "../../../public/images/icons/tag.svg";

const links = [
  { text: "Branch", href: "/branch", img: branchImg, exact: true },
  {
    text: "Stationery",
    href: "/stationery",
    img: penImg,
    exact: false,
  },
  {
    text: "Uniform",
    href: "/uniform",
    img: shirtImg,
    exact: true,
  },
  {
    text: "Office Equipments",
    href: "/office-equipment",
    img: officeImg,
    exact: true,
  },
  {
    text: "Home Appliance",
    href: "/home-appliance",
    img: homeImg,
    exact: true,
  },
  { text: "Others", href: "/others", img: tagImg, exact: true },
];
function BannerNav() {
  return (
    <div className="h-full w-[270px] flex-shrink-0 bg-white">
      {links.map((link) => (
        <Link
          key={link.text}
          href={`/category${link.href}`}
          className="flex w-full items-center gap-4 bg-transparent p-5 text-sm capitalize text-brand-darkest transition-colors duration-200 hover:bg-brand-light"
        >
          {/* <Icon IconComp={LinkIcon} /> */}
          <Image src={link.img} className="h-5 w-5" alt={link.text} />
          <span>{link.text}</span>
        </Link>
      ))}
    </div>
  );
}

export default BannerNav;
