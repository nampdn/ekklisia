import { useEffect } from "react";
import { run, BaraApplication } from "@barajs/core";

export const useBara = (app: BaraApplication) => {
  useEffect(() => {
    run(app);
  }, []);
};
