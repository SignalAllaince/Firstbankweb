import { ModalProps } from "@/types/component.types";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Button from "../button";
import Icon from "../icon";

const sizes = {
  lg: "max-w-xl",
  md: "max-w-lg",
};
function Modal({
  isOpen,
  closeModal,
  closeOnOverlayClick = false,
  children,
  title,
  size = "lg",
}: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeOnOverlayClick ? closeModal : () => null}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`relative w-full ${sizes[size]} transform overflow-hidden rounded-none bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                  )}
                  {/* Close button */}
                  <div className="absolute right-1 top-2">
                    <Button
                      onClick={closeModal}
                      variant="outline"
                      className="h-auto !ring-0 focus:!ring-0"
                    >
                      <Icon IconComp={XMarkIcon} className="text-black" />
                    </Button>
                  </div>

                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default Modal;
