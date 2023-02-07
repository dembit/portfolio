import React, { createContext, useContext, useState } from "react";

import {
  NavigationProviderType,
  useNavigationDataProvider,
} from "./NavigationDataProvider";

type PageContextType = {
  dataNavigation: NavigationProviderType;
  direction: null | number;
  setDirection: (data: number) => void;
};

const PagesContext = createContext<PageContextType>({
  dataNavigation: null,
  direction: null,
  setDirection: () => {},
});

type Props = {
  children: JSX.Element;
};

const ContextPagesProvider = ({ children }: Props) => {
  const dataNavigation = useNavigationDataProvider();
  const [direction, setDirection] = useState<null | number>(null);
  return (
    <PagesContext.Provider value={{ dataNavigation, direction, setDirection }}>
      {children}
    </PagesContext.Provider>
  );
};

export default ContextPagesProvider;

export const useContextPages = () => useContext<PageContextType>(PagesContext);
