import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

function Drawer({
  isOpen,
  setClose,
  title,
  children,
}: {
  isOpen: boolean;
  setClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    {title && (
                      <div className="overflow-y-auto border-b border-gray-100 px-4 pb-3 pt-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            {title}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 rounded-full p-1 text-gray-400 hover:text-gray-500"
                              onClick={setClose}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export const DrawerBody = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 overflow-y-auto px-4 sm:px-6">{children}</div>
);

export const DrawerFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">{children}</div>
);

Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;

export default Drawer;
