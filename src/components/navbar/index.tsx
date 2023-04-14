import {
  ChevronDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logoImg from "../../../public/images/logo.svg";
import Button from "../button";
import Icon from "../icon";
import CustomInput from "../input";
import Section from "../section";

function Navbar() {
  return (
    <div className="w-full bg-white py-4">
      <Section className="item-center flex justify-between ">
        <div className="w-[120px]">
          <Image src={logoImg} alt="first bank logo" />
        </div>
        <div className="flex items-center space-x-7">
          <div className="flex">
            <CustomInput
              name="search"
              placeholder="Search"
              className="w-[400px]"
            />
            <Button className="border-0 px-[12px] outline-none focus:border-0 focus:ring-0 focus:ring-transparent">
              <Icon IconComp={MagnifyingGlassIcon} className="text-white" />
            </Button>
          </div>
          <Button variant="secondary" size="small" className="border-0 px-1">
            Help
            <Icon IconComp={ChevronDownIcon} className="text-inherit" />
          </Button>
          <Button variant="secondary" size="small" className="border-0 px-1">
            WishList
            <Icon IconComp={HeartIcon} className="text-inherit" />
          </Button>
          <Button
            variant="secondary"
            size="small"
            className="relative border-0 px-1"
          >
            <Icon IconComp={ShoppingCartIcon} className="text-inherit" />
            <div className="absolute left-4 top-1 rounded bg-brand-darkest p-1 py-0 text-xs text-white">
              3
            </div>
          </Button>
          <Button variant="secondary" size="small" className="border-0 px-1">
            <Icon IconComp={UserCircleIcon} className="text-inherit" />
          </Button>
        </div>
      </Section>
    </div>
  );
}

export default Navbar;
