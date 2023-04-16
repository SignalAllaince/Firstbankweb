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

export function MenuItem({ children, ...props }: MenuItemProps) {
  return (
    <HeadlessMenu.Item>
      {({ active }) => (
        <Button
          variant="secondary"
          className={clsx(
            active ? "bg-red-500" : "bg-brand-blues",
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

export function MenuItems({ children }: { children: ReactNode }) {
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
      <HeadlessMenu.Items className="absolute -right-28 mt-3 w-56 divide-y divide-gray-300 rounded-none bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">{children}</div>
      </HeadlessMenu.Items>
    </Transition>
  );
}
