import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, ReactNode } from "react";
import Button, { ButtonProps } from "../button";

export const MenuButton = HeadlessMenu.Button;

// export const MenuButton = ({ children }: {children: ReactNode}) => {
//     return <HeadlessMenu.Button>{children}</HeadlessMenu.Button>;
//   };

export function Menu({ children }: { children: ReactNode }) {
  return (
    <HeadlessMenu as="div" className="relative">
      {children}
    </HeadlessMenu>
  );
}

export interface MenuItemProps extends Omit<ButtonProps, "ref"> {}

export function MenuItem({
  children,
  variant = "menu",
  activeClasses = "bg-brand-light",
  ...props
}: MenuItemProps) {
  return (
    <HeadlessMenu.Item>
      {({ active }) => (
        <Button
          variant={variant}
          size="menu"
          className={clsx(
            active && variant === "menu" ? activeClasses : "",
            "w-full border-0"
          )}
          {...props}
        >
          {children}
        </Button>
      )}
    </HeadlessMenu.Item>
  );
}

export function MenuItems({
  children,
  menuClasses,
}: {
  children: ReactNode;
  menuClasses: string;
}) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HeadlessMenu.Items
        className={`${menuClasses} absolute w-56 rounded-none shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {children}
      </HeadlessMenu.Items>
    </Transition>
  );
}
