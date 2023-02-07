import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PAGES, PageType } from "../../variable";

export type NavigationProviderType = {
  prev: PageType;
  next: PageType;
} | null;

export const useNavigationDataProvider = () => {
  const [navigationData, setNavigationData] =
    useState<NavigationProviderType>(null);

  const location = useLocation();

  useEffect(() => {
    const index = PAGES.findIndex((page) => location.pathname === page.path);
    if (index !== -1) {
      const prev = index === 0 ? PAGES.length - 1 : index - 1;
      const next = index === PAGES.length - 1 ? 0 : index + 1;
      setNavigationData({ prev: PAGES[prev], next: PAGES[next] });
    }
  }, [location]);
  return navigationData;
};
