import React, { ReactNode, createContext, useContext } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
