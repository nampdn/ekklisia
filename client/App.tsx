if (__DEV__) {
  import("./components/globals/ReactotronConfig").then(() =>
    console.log("Reactotron Configured!")
  );
}

import React from "react";
import { AppProvider } from "./components";

import { MainScreen } from "./components/screens";
import { decode, encode } from "base-64";

if (!(global as any).btoa) {
  (global as any).btoa = encode;
}

if (!(global as any).atob) {
  (global as any).atob = decode;
}
(process as any).browser = true;

export default function App() {
  return (
    <AppProvider>
      <MainScreen />
    </AppProvider>
  );
}
