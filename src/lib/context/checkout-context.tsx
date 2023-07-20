import React from "react";

interface CheckoutContextInterface {
  checkoutDetails: any;
  // eslint-disable-next-line no-unused-vars
  updateCheckoutDetails: (details: any) => void;
}
interface CheckoutPropsInterface {
  children: React.ReactNode;
  details: any;
}

const CheckoutCtx = React.createContext<CheckoutContextInterface>(
  {} as CheckoutContextInterface
);

const CheckoutContextProvider = ({
  children,
  details,
}: CheckoutPropsInterface) => {
  const [checkoutDetails, setCheckoutDetails] = React.useState(details);

  const updateCheckoutDetails = React.useCallback((details: any) => {
    setCheckoutDetails(details);
  }, []);
  return (
    <CheckoutCtx.Provider value={{ checkoutDetails, updateCheckoutDetails }}>
      {children}
    </CheckoutCtx.Provider>
  );
};

export const useCheckout = () => {
  const context = React.useContext(CheckoutCtx);

  if (context === null) {
    throw new Error("useCheckout must be used within a Checkout Provider");
  }

  return context;
};

export default CheckoutContextProvider;
