import Button from "@/components/button";
import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import IfElse from "@/components/if-else";
import UserAddressModal from "@/components/modal/user-address";
import Section from "@/components/section";
import useGetAddressList from "@/hooks/address/useGetAddressList";
import useCheckoutAll from "@/hooks/checkout/useCheckoutAll";
import useDisclosure from "@/hooks/use-disclosure";
import useNotification from "@/hooks/use-notification";
import { CartListResponse } from "@/types/api.types";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import cartImg from "../../../../public/images/cart.svg";
import CartProductRow from "./components/cart-row";

const CartPageSection = ({
  cartDetails,
  isRefetching,
  refetchCartDetails,
}: {
  cartDetails: CartListResponse;
  isRefetching: boolean;
  refetchCartDetails: () => void;
}) => {
  const checkoutAll = useCheckoutAll();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { toast } = useNotification();
  const addressList = useGetAddressList();

  const isDisabled = addressList?.value
    ? addressList?.value?.length === 0
    : false;

  const checkoutCreateOrder = () => {
    checkoutAll
      .mutateAsync({})
      .then((res) => {
        toast({
          appearance: "success",
          title: "Order Created Successfully",
          description: `Order id #${res?.data?.data?.oid}`,
        });
        router.push(`/cart/checkout?id=${res?.data?.data?.oid}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="h-full  pb-10">
        <AnimatePresence>
          <IfElse
            ifOn={cartDetails.items.length !== 0}
            ifOnElse={cartDetails.items.length === 0}
            onElse={
              <FadeInOut>
                <Section className="my-4 flex w-full flex-col items-center justify-center space-y-12 bg-white py-10">
                  <div className="max-w-xl">
                    <Image src={cartImg} alt={"djsdsd"} />
                  </div>
                  <div className="flex flex-col items-center">
                    <Heading size="h3">Your cart is empty!</Heading>
                    <p>Browse our categories and discover our best deals!</p>
                  </div>
                  <Button className="uppercase" href="/">
                    start shopping
                  </Button>
                </Section>
              </FadeInOut>
            }
          >
            <FadeInOut className="w-full bg-white">
              <div className="relative w-full border-b border-gray-200">
                <div className="absolute bottom-0 right-0 z-30 w-full">
                  <BarLoader
                    color="#003B65"
                    loading={isRefetching}
                    height={2}
                    speedMultiplier={0.8}
                    width="100%"
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
                <Section className="space-y-4 py-8">
                  <div className="flex items-center">
                    <div className="flex items-center gap-1 text-sm">
                      <Link href="/">Home</Link>
                      <Icon IconComp={ChevronRightIcon} boxSize={4} />
                      <p>Cart</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Heading className="font-bold" size="h4">
                      Cart
                    </Heading>
                    <Button
                      href="/"
                      variant="cart"
                      size="xs"
                      className="border-brand-blue text-brand-blue"
                      rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
                    >
                      Continue shopping
                    </Button>
                  </div>
                  {/* <Button onClick={onOpen}>Open Modals</Button> */}
                </Section>
              </div>
              <Section className="gap-x-4 pt-5 lg:grid lg:grid-cols-12">
                <div className="mb-8 space-y-6 overflow-hidden rounded bg-white pb-2 lg:col-span-8">
                  <div className="flex flex-col overflow-x-auto lg:overflow-x-hidden">
                    <div className="sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-x-auto lg:overflow-x-hidden">
                          <table className="min-w-[640px] text-left text-sm font-light sm:min-w-full">
                            <thead className="border-b font-medium">
                              <tr>
                                <th className="py-4 text-left font-medium text-brand-darkest">
                                  Item Details
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <AnimatePresence>
                                {cartDetails.items.map((item) => (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{
                                      opacity: { duration: 0.2 },
                                      layout: {
                                        duration: 1,
                                      },
                                    }}
                                    style={{ originX: 1 }}
                                    key={item.id}
                                  >
                                    <CartProductRow
                                      imageSrc={item.productImage}
                                      price={item.productPriceString}
                                      productQuantity={item.quantity}
                                      onCartRefetch={refetchCartDetails}
                                      isLoading={isRefetching}
                                      name={item.productName}
                                      productId={item.id}
                                    />
                                  </motion.div>
                                ))}
                              </AnimatePresence>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="text-md space-y-4 bg-brand-lightest px-4 py-5 font-medium text-brand-darkest">
                    <div className="flex items-center justify-between">
                      <h2>Cart Summary</h2>
                      <h2>{cartDetails?.items?.length} Items</h2>
                    </div>
                    <div className="border-t border-brand-light"></div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="uppercase">subTotal</h2>
                        <p className="mt-0.5 flex items-center space-x-1 text-[10px] font-light">
                          <Icon IconComp={ExclamationCircleIcon} boxSize={4} />
                          <span>This does not include delivery fee</span>
                        </p>
                      </div>
                      <h2 className="text-lg">{cartDetails.subTotalString}</h2>
                    </div>

                    {isDisabled && (
                      <>
                        <div className="border-t border-brand-light"></div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h2 className="text-sm uppercase">
                              No Address Found
                            </h2>
                            <p className="mt-0.5 flex items-center space-x-1 text-[10px] font-light">
                              <Icon
                                IconComp={ExclamationCircleIcon}
                                boxSize={4}
                              />
                              <span>
                                Please create an address before checkout
                              </span>
                            </p>
                          </div>
                          <Button
                            onClick={onOpen}
                            variant="cart"
                            size="xs"
                            className="border-brand-blue text-sm text-brand-blue"
                          >
                            Create Address
                          </Button>
                        </div>
                      </>
                    )}

                    <div className="border-t border-brand-light"></div>
                    <Button
                      className="w-full uppercase"
                      onClick={checkoutCreateOrder}
                      isLoading={checkoutAll.isLoading}
                      disabled={isRefetching || isDisabled}
                    >
                      {isRefetching ? "Updating cart" : "Checkout"}
                    </Button>
                  </div>
                </div>
              </Section>
            </FadeInOut>
          </IfElse>
        </AnimatePresence>
      </div>
      <UserAddressModal
        isOpen={isOpen}
        onClose={onClose}
        refetch={addressList.refetch}
      />
    </>
  );
};

export default CartPageSection;
