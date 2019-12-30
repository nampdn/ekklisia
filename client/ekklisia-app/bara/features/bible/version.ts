import {
  map,
  pipe,
  takeFirst,
  lensProp,
  template,
  attempt,
  same
} from "@barajs/formula";

import { report } from "../../report";
import { getDoc } from "../../db";

export const copyObject = () => (payload: any) =>
  JSON.parse(JSON.stringify(payload));

export const loadVersions = pipe(
  getDoc("BIB::MET::VERSIONS"),
  takeFirst(),
  copyObject(),
  lensProp("versions"),
  map(
    attempt({
      to: getDoc(template("BIB::VOL::{volume_id}", { volume_id: same() })),
      handle: report("[Bible] Could not load version: {.}")
    })
  )
);
