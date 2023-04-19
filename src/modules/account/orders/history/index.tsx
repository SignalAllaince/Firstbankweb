import Button from "@/components/button";
import Icon from "@/components/icon";
import AccountLayout from "@/components/layout/account-layout";
import OrderLayout from "@/components/layout/orders-layout";
import { Menu, MenuButton, MenuItem, MenuItems } from "@/components/menu";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ReactElement, SVGProps } from "react";
import SingleOrder from "../components/order-row";

const OrdersPage: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between border-b border-brand-light py-3">
        <div className="flex items-center gap-2 font-light">
          <p className="text-xs">Filter</p>
          <Menu>
            <MenuButton
              as={Button}
              variant="secondary"
              size="small"
              className="h-9 px-[8px]"
              rightIcon={<Icon IconComp={ChevronDownIcon} />}
            >
              All
            </MenuButton>
            <MenuItems menuClasses="-right-24 bg-white divide-y divide-gray-100 mt-3">
              <MenuItem>Yesterday</MenuItem>
              <MenuItem>Last week</MenuItem>
              <MenuItem>This Month</MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <Button
          size="small"
          //   @ts-expect-error
          leftIcon={<Icon IconComp={ExcelIcon} />}
          className="h-8"
        >
          Export Result
        </Button>
      </div>
      <div className="space-y-5">
        <SingleOrder />
        <SingleOrder status="pending" />
        <SingleOrder />
        <SingleOrder status="success" />
      </div>
    </div>
  );
};

const ExcelIcon = (): SVGProps<SVGSVGElement> => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_219_8401)">
      <path
        d="M14.1733 8.54528H11.6287V7.27296H14.1733V8.54528ZM14.1733 9.27228H11.6287V10.5446H14.1733V9.27228ZM14.1733 3.27434H11.6287V4.54662H14.1733V3.27434ZM14.1733 5.27365H11.6287V6.54593H14.1733V5.27365ZM14.1733 11.2716H11.6287V12.5439H14.1733V11.2716V11.2716ZM15.9309 13.7798C15.8582 14.1579 15.4038 14.167 15.1003 14.1797H9.44769V15.8155H8.31897L0 14.3614V1.64037L8.36806 0.184494H9.44769V1.63309H14.9058C15.213 1.64581 15.5511 1.62399 15.8182 1.80756C16.0054 2.07656 15.9873 2.41828 16 2.72724L15.9927 12.1895C15.9837 12.7184 16.0418 13.2582 15.9309 13.7798ZM6.66497 10.9281C6.16334 9.91028 5.65263 8.89968 5.15278 7.88184C5.64716 6.89127 6.13428 5.89709 6.61956 4.90287C6.20697 4.92287 5.79438 4.94831 5.38363 4.9774C5.07644 5.7244 4.71838 6.45143 4.47847 7.2239C4.25491 6.49506 3.95866 5.79346 3.68784 5.08281C3.28797 5.10462 2.88809 5.12824 2.48825 5.15187C2.90991 6.08249 3.35887 7.00031 3.76781 7.93637C3.28616 8.84515 2.83541 9.76668 2.36828 10.6809C2.76631 10.6972 3.16438 10.7136 3.56241 10.7191C3.84597 9.99568 4.19856 9.29956 4.44575 8.56162C4.6675 9.35409 5.04372 10.0866 5.35272 10.8445C5.79075 10.8754 6.22694 10.9027 6.66497 10.9281ZM15.1331 2.49631H9.44769V3.27434H10.9017V4.54662H9.44769V5.27365H10.9017V6.54593H9.44769V7.27296H10.9017V8.54528H9.44769V9.27228H10.9017V10.5446H9.44769V11.2716H10.9017V12.5439H9.44769V13.3844H15.1331V2.49631Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_219_8401">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

OrdersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AccountLayout>
      <OrderLayout>{page}</OrderLayout>
    </AccountLayout>
  );
};

OrdersPage.auth = false;

export default OrdersPage;
