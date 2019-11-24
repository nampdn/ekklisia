import { run, app, act, cond } from "@barajs/core";
import Electron, {
  whenWindowCreated,
  whenWindowReadyToShow,
  whenWindowAllClosed,
  showWindow,
  winNameEq,
  loadURL
} from "@barajs/electron";

import { START_URL } from "./constants";

run(
  app({
    portion: [
      Electron({
        singleInstance: true,
        windows: {
          main: {
            width: 1024,
            height: 768,
            show: false
          }
        }
      })
    ],
    trigger: [
      whenWindowCreated(cond(winNameEq("main"), act(loadURL(START_URL)))),
      whenWindowReadyToShow(cond(winNameEq("main"), act(showWindow()))),
      whenWindowAllClosed(
        act(({ app }) => {
          console.log(`All windows has been closed`);
          app.quit();
        })
      )
    ]
  })
);
