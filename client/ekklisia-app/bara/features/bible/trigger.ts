import shortid from "shortid";

import {
  log,
  pipe,
  gather,
  loopIn,
  takeFirst,
  takeNth,
  lensProp
} from "@barajs/formula";
import { dispatch } from "@barajs/redux";

import { newBible } from "./redux";
import { getDoc } from "../../db/getDoc";
import { report } from "../../report";

export const loadBibleChapter = loopIn(
  pipe(
    gather({
      id: takeFirst(),
      dam_id: pipe(
        takeNth(1),
        lensProp("dam_id")
      )
    }),
    getDoc(lensProp("dam_id")),
    report("{.}")
  )
);

export const newBibleView = pipe(
  gather({
    id: shortid.generate,
    dam_id: "BIB::VIEV02B1ET::1Chr::1",
    book_code: "1Chr",
    chapter_order: 1,
    selected_verses: [1],
    loading: false,
    loaded: false
  }),
  dispatch(newBible)
);
