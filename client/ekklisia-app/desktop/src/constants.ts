import { join } from "path";
import { __DEV__ } from "./electron-is-dev";

export const START_URL = __DEV__
  ? "http://localhost:19006"
  : `file://${join(__dirname, "web-build/index.html")}`;
