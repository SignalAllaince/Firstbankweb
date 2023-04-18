import {
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  StarIcon,
  UserCircleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/images/logo.svg";
import Button from "../button";
import Icon from "../icon";
import CustomInput from "../input";
import { Menu, MenuButton, MenuItem, MenuItems } from "../menu";
import Section from "../section";

function Navbar() {
  return (
    <div className="w-full bg-white py-4">
      <Section className="item-center flex justify-between ">
        <div className="flex w-[100px] items-center">
          <Link href="/">
            <Image src={logoImg} alt="first bank logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex w-[400px]">
            <CustomInput name="search" placeholder="Search" />
            <Button className="border-0 px-[12px] outline-none focus:border-0 focus:ring-0 focus:ring-transparent">
              <Icon IconComp={MagnifyingGlassIcon} className="text-white" />
            </Button>
          </div>
          <div>
            <Menu>
              <MenuButton
                as={Button}
                variant="secondary"
                size="small"
                className="border-0 px-[4px]"
                rightIcon={<Icon IconComp={ChevronDownIcon} />}
              >
                Help
              </MenuButton>
              <MenuItems menuClasses="-right-24 bg-white divide-y divide-gray-100 mt-[18px]">
                <MenuItem>Help Center</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Contact Us</MenuItem>
              </MenuItems>
            </Menu>
          </div>

          <Button
            variant="secondary"
            size="small"
            className="border-0 px-[4px]"
            rightIcon={<Icon IconComp={HeartIcon} />}
          >
            WishList
          </Button>
          <Button
            variant="secondary"
            size="small"
            className="relative border-0 px-[4px]"
          >
            <Icon IconComp={ShoppingCartIcon} />
            <div className="absolute left-4 top-1 rounded bg-brand-darkest p-1 py-0 text-xs text-white">
              3
            </div>
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              variant="secondary"
              size="small"
              className="border-0 px-[4px]"
              leftIcon={<Icon IconComp={UserCircleIcon} />}
              rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
            >
              Emeka
            </MenuButton>
            <MenuItems menuClasses="right-0 bg-white divide-y divide-gray-100 mt-[18px]">
              <MenuItem
                href="/login"
                leftIcon={<Icon IconComp={UserCircleIcon} />}
              >
                My Account
              </MenuItem>
              <MenuItem leftIcon={<Icon IconComp={WalletIcon} />}>
                Orders
              </MenuItem>
              <MenuItem leftIcon={<Icon IconComp={StarIcon} />}>
                Ratings & Reviews
              </MenuItem>
              <MenuItem leftIcon={<Icon IconComp={ArrowLeftOnRectangleIcon} />}>
                Login
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </Section>
    </div>
  );
}

export default Navbar;
