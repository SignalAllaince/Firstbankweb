import useGetAllCategories from "@/hooks/category/useGetAllCategories";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../button";
// import Button, { ButtonProps } from "../button";
import Section from "../section";

function MiniNavbar() {
  const pathname = usePathname();
  const allCategories = useGetAllCategories();

  // const menuProps = {
  //   activeBg: "#142633",
  //   activeText: "#f0bd2d",
  //   variant: "minimenu" as ButtonProps["variant"],
  // };

  // const miniNavLinks = [
  //   {
  //     title: "Branch",
  //     path: "/category/branch",
  //     items: [
  //       { name: "Corporate Flag", query: "corporate-flag" },
  //       { name: "National Flag", query: "nationa-flag" },
  //       { name: "A2 Snapper Frame", query: "a2-snapper-frame" },
  //       { name: "A3 Snapper Frame", query: "a3-snapper-frame" },
  //       { name: "A4 Snapper Frame", query: "a4-snapper-frame" },
  //       { name: "CEO's Potrait", query: "ceo-potrait" },
  //     ],
  //   },
  //   {
  //     title: "Stationery",
  //     path: "/category/stationery",
  //     items: [
  //       { name: "Commerative Notebook", query: "commerative-notebook" },
  //       { name: "Gray Notebook", query: "gray-notebook" },
  //       { name: "Spiral Notebook", query: "spiral-notebook" },
  //       { name: "Pen", query: "pen" },
  //     ],
  //   },
  //   {
  //     title: "Uniform",
  //     path: "/category/uniform",
  //     items: [{ name: "TShirt", query: "tshirt" }],
  //   },
  //   {
  //     title: "Office Equipment",
  //     path: "/category/office-equipment",
  //     items: null,
  //   },
  //   {
  //     title: "Home Applicance",
  //     path: "/category/home-appliance",
  //     items: null,
  //   },
  //   {
  //     title: "Others",
  //     path: "/category/others",
  //     items: [
  //       { name: "Water Bottles", query: "water-bottles" },
  //       { name: "Umbrellas", query: "umbrellas" },
  //       { name: "Travelling Bags", query: "travelling-bags" },
  //     ],
  //   },
  // ];
  return (
    <div className="w-full bg-brand-blue py-2 text-white">
      <Section className="item-center flex max-w-[1000px] justify-between overflow-auto">
        <div className="flex w-full items-center justify-between space-x-6">
          <Link href="/" className="flex-shrink-0 text-sm text-brand-accent">
            All Category
          </Link>
          {allCategories?.value &&
            allCategories?.value.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className="flex-shrink-0"
                size="small"
                href={`/${category.slug}`}
                style={{
                  color: pathname === `/${category.slug}` ? "#f0bd2d" : "",
                }}
              >
                {category.name}
              </Button>
            ))}

          {/* {miniNavLinks.map((item) =>
            item.items ? (
              <Menu key={item.path}>
                <MenuButton
                  as={Button}
                  variant="outline"
                  size="small"
                  rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
                  style={{
                    color: pathname === item.path ? "#f0bd2d" : "",
                  }}
                >
                  {item.title}
                </MenuButton>
                <MenuItems menuClasses="-right-24 bg-brand-blue mt-3">
                  {item.items.map((link) => (
                    <MenuItem
                      key={link.name}
                      href={`${item.path}?${link.query}`}
                      {...menuProps}
                    >
                      {link.name}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            ) : (
              <Button
                key={item.path}
                variant="outline"
                size="small"
                href={item.path}
                style={{
                  color: pathname === item.path ? "#f0bd2d" : "",
                }}
              >
                {item.title}
              </Button>
            )
          )} */}
        </div>
      </Section>
    </div>
  );
}

export default MiniNavbar;
