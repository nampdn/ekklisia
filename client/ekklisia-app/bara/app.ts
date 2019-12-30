import { Store } from 'redux'

import { app, act } from '@barajs/core'
import { pipe, attempt, gather } from '@barajs/formula'
import BaraRedux, { dispatch } from '@barajs/redux'
import {
  BaraRxDB,
  whenDatabaseReady,
  sync,
  aliveSub,
  changeSub,
  errorSub,
  deniedSub,
  completeSub,
} from '@barajs/rxdb'

import { versionCollection } from './db'
import { REMOTE_DB } from './configuration'
import { report } from './report'
import { FOCUS_WINDOW } from './features'

export const BaraApp = (store?: Store) =>
  app({
    portion: [
      BaraRedux({ store }),
      BaraRxDB({
        options: {
          name: 'rxdb',
        },
        collections: [versionCollection],
      }),
    ],
    trigger: [
      whenDatabaseReady(
        act(report(`RxDB is ready to go.`)),
        act(
          pipe(
            syncDB,
            dispatch(
              gather({
                type: FOCUS_WINDOW,
                payload: {
                  id: 2,
                },
              }),
            ),
          ),
        ),
      ),
    ],
  })

const syncDB = pipe(
  attempt({
    to: sync('versions', {
      remote: REMOTE_DB,
      live: true,
      retry: true,
    }),
    handle: report('{.}'),
  }),
  aliveSub(report('Alive: {.}')),
  deniedSub(report('Denied: {.}')),
  changeSub(report('Changed: {.}')),
  errorSub(report('Error: {.}')),
  completeSub(report('Complete: {.}')),
)
