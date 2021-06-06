import React, { createContext, useCallback } from "react";
import { SelectedItem, SelectItem } from "../types";

interface Context {
  selectItem: SelectItem;
}

export const SiteContext = createContext<Context | null>(null);

interface IProps {
  children: React.ReactNode;
  setSelectedItem: (item: SelectedItem) => void;
}

const SiteProvider = ({ children, setSelectedItem }: IProps): JSX.Element => {
  const selectItem = useCallback((elementId: string, index: number) => {
    setSelectedItem({ elementId, index });
  }, []);

  const value = {
    selectItem,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;
