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
  PhoneIcon,
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
                    href="mailto:help@firstbankltd.com"
                    // @ts-expect-error
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Icon IconComp={EnvelopeIcon} />}
                  >
                    Email us
                  </MenuItem>
                  <MenuItem
                    href="tel:+234800000000"
                    // @ts-expect-error
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Icon IconComp={PhoneIcon} />}
                  >
                    Call 0800000000
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
                        src="data:image/png;base64,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"
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
