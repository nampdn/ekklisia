import { run } from "@barajs/core";

import React, { useState, useRef, useContext, useEffect } from "react";
import { Store } from "redux";

import { BaraApp } from "./app";

export const BaraContext = React.createContext(null);
BaraContext.displayName = "BaraContext";

export interface BaraProviderProps {
  children: React.ReactChildren;
  store: Store;
}

export const BaraProvider = ({ children, store }: any) => {
  const bara = useRef(null);

  useEffect(() => {
    bara.current = run(BaraApp(store));
  });

  return <BaraContext.Provider value={bara}>{children}</BaraContext.Provider>;
};

export const useBaraContext = () => {
  return useContext(BaraContext);
};

export const useRxDB = () => {
  const context = useBaraContext();
  const [state, setState] = useState(null);
};
