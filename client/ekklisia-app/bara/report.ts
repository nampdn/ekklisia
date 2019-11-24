import { report as defaultReport } from "@barajs/formula";
import Reactoron from "../components/globals/ReactotronConfig";

export const report = (message: any) => {
  return defaultReport(message, Reactoron, "log");
};
