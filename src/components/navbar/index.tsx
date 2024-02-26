import useGetCartList from "@/hooks/cart/useGetCartList";
import useDisclosure from "@/hooks/use-disclosure";
import useGetUserInfo from "@/hooks/user/useGetUserInfo";
import {
  ArrowLeftOnRectangleIcon,
  ArrowsRightLeftIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  HeartIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import logoImg from "../../../public/images/logo.svg";
import Button from "../button";
import Icon from "../icon";
import CustomInput from "../input";
import { Menu, MenuButton, MenuItem, MenuItems } from "../menu";
import LogoutModal from "../modal/logout";
import Section from "../section";

function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const getCartList = useGetCartList();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const userInfo = useGetUserInfo();
  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search/${search.trim()}`);
    setTimeout(() => {
      setSearch("");
    }, 5000);
  };
  // console.log(userInfo?.value, "userInfo?.value");
  return (
    <>
      <div className="sticky top-0 z-40 w-full border-b bg-white py-4">
        <Section className="item-center flex justify-between space-x-3">
          <div className="flex w-[100px] flex-shrink-0 items-center">
            <Link href="/">
              <Image src={logoImg} alt="first bank logo" />
            </Link>
          </div>
          <div className="flex items-center space-x-3 md:space-x-10">
            <form
              onSubmit={searchHandler}
              className="flex w-[300px] space-x-1 md:w-[400px]"
            >
              <CustomInput
                borderColor="border-brand-input"
                name="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                type="submit"
                className="border-0 px-[12px] outline-none focus:border-0 focus:ring-0 focus:ring-transparent"
              >
                <Icon IconComp={MagnifyingGlassIcon} className="text-white" />
              </Button>
            </form>
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
                <MenuItems menuClasses="-right-24 bg-white divide-y divide-gray-100 mt-[18px] z-30">
                  <MenuItem
                    href="mailto:mybrandshop@firstbanknigeria.com"
                    // @ts-expect-error
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Icon IconComp={EnvelopeIcon} />}
                  >
                    Email us
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>

            <Button
              variant="secondary"
              size="small"
              className="border-0 px-[4px]"
              rightIcon={<Icon IconComp={HeartIcon} />}
              href="/wishlist"
            >
              WishList
            </Button>
            <Button
              variant="secondary"
              size="small"
              className="relative border-0 px-[4px]"
              href="/cart"
            >
              <Icon IconComp={ShoppingCartIcon} />
              <div className="absolute left-4 top-1 rounded bg-brand-darkest p-1 py-0 text-xs text-white">
                {getCartList?.value && getCartList?.value?.items?.length}
              </div>
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                variant="secondary"
                size="small"
                className="border-0 px-[4px]"
                rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
              >
                <div className="flex items-center gap-2">
                  {userInfo?.value?.profilePicture ? (
                    <div className="h-6 w-6 rounded-full">
                      <Image
                        alt=""
                        width={24}
                        height={24}
                        src={userInfo?.value?.profilePicture}
                      />
                    </div>
                  ) : (
                    <Icon IconComp={UserCircleIcon} />
                  )}
                  {userInfo?.value ? userInfo?.value?.firstName : "******"}
                </div>
              </MenuButton>
              <MenuItems menuClasses="right-0 bg-white divide-y divide-gray-100 mt-[18px] z-30">
                <MenuItem
                  href="/account"
                  leftIcon={<Icon IconComp={UserCircleIcon} />}
                >
                  My Account
                </MenuItem>
                <MenuItem
                  href="/account/orders"
                  leftIcon={<Icon IconComp={WalletIcon} />}
                >
                  Orders
                </MenuItem>

                <MenuItem
                  href="/account/address"
                  leftIcon={<Icon IconComp={HomeModernIcon} />}
                >
                  Address
                </MenuItem>
                <MenuItem
                  href="/login/branch"
                  leftIcon={<Icon IconComp={ArrowsRightLeftIcon} />}
                >
                  Switch to Department
                </MenuItem>
                <MenuItem
                  leftIcon={<Icon IconComp={ArrowLeftOnRectangleIcon} />}
                  onClick={onOpen}
                >
                  Logout
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </Section>
      </div>
      <LogoutModal onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default Navbar;
