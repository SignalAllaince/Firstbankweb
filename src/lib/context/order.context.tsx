import useGetAllOrders from "@/hooks/order/useGetAllOrders";
import { IOrderContainer } from "@/types/api.types";
import React from "react";

interface OrderContextInterface {
  orders: IOrderContainer | null;
  page: number;
  getOrders: any;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  // eslint-disable-next-line no-unused-vars
  //   updateCheckoutDetails: (details: ICategoryDetails) => void;
}
interface CheckoutPropsInterface {
  children: React.ReactNode;
}

const OrderCtx = React.createContext<OrderContextInterface>(
  {} as OrderContextInterface
);

const OrderContextProvider = ({ children }: CheckoutPropsInterface) => {
  const [page, setPage] = React.useState(1);
  const [orders, setOrders] = React.useState<IOrderContainer | null>(null);
  const getOrders = useGetAllOrders();

  const getProductHandler = React.useCallback(() => {
    getOrders
      .mutateAsync({
        pagination: {
          requestedPage: page,
          pageSize: 10,
        },
      })
      .then((res) => {
        setOrders(res?.data?.data!);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    getProductHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <OrderCtx.Provider value={{ orders, page, getOrders, setPage }}>
      {children}
    </OrderCtx.Provider>
  );
};

export const useOrders = () => {
  const context = React.useContext(OrderCtx);

  if (context === null) {
    throw new Error("useCheckout must be used within a Checkout Provider");
  }

  return context;
};

export default OrderContextProvider;
