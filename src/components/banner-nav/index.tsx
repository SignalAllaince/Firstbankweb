import useGetAllCategories from "@/hooks/category/useGetAllCategories";
import Image from "next/image";
import Link from "next/link";
import branchImg from "../../../public/images/icons/branch.svg";
import homeImg from "../../../public/images/icons/home.svg";
import officeImg from "../../../public/images/icons/office.svg";
import penImg from "../../../public/images/icons/pen.svg";
import shirtImg from "../../../public/images/icons/shirt.svg";
import tagImg from "../../../public/images/icons/tag.svg";
import IfElse from "../if-else";

const imgs = [
  branchImg,
  homeImg,
  officeImg,
  penImg,
  shirtImg,
  tagImg,
  officeImg,
  homeImg,
];

// const links = [
//   { text: "Branch", href: "/branch", img: branchImg, exact: true },
//   {
//     text: "Stationery",
//     href: "/stationery",
//     img: penImg,
//     exact: false,
//   },
//   {
//     text: "Uniform",
//     href: "/uniform",
//     img: shirtImg,
//     exact: true,
//   },
//   {
//     text: "Office Equipments",
//     href: "/office-equipment",
//     img: officeImg,
//     exact: true,
//   },
//   {
//     text: "Home Appliance",
//     href: "/home-appliance",
//     img: homeImg,
//     exact: true,
//   },
//   { text: "Others", href: "/others", img: tagImg, exact: true },
// ];

function BannerNav() {
  const allCategories = useGetAllCategories();

  return (
    <>
      <IfElse
        ifOn={!allCategories.isLoading && !!allCategories?.value}
        ifOnElse={allCategories.isLoading && !allCategories?.value}
        onElse={
          <div className="flex h-[440px] w-[270px] flex-shrink-0 animate-pulse flex-col justify-between bg-white p-1">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div key={item} className="h-14 bg-slate-200" />
            ))}
          </div>
        }
      >
        <div className="h-full w-[270px] flex-shrink-0 bg-white">
          {allCategories?.value &&
            allCategories?.value?.map((link, i) => (
              <Link
                key={link.id}
                href={`/${link.slug}`}
                className="flex w-full items-center gap-4 bg-transparent px-5 py-4 text-sm capitalize text-brand-darkest transition-colors duration-200 hover:bg-brand-light"
              >
                {/* <Icon IconComp={LinkIcon} /> */}
                <Image src={imgs[i]} className="h-5 w-5" alt={link.name} />
                <span>{link.name}</span>
              </Link>
            ))}
        </div>
      </IfElse>
    </>
  );
}

export default BannerNav;
