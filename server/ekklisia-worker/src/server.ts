import {
  act,
  app,
  run,
  BaraPortionPayload,
  BaraTriggerPayload,
} from '@barajs/core'
import { gather, pipe, side, log } from '@barajs/formula'
import { whenPush, whenWebhookListening, Github } from '@barajs/github'
import { PouchDBServer, whenPouchReady, allDocs } from '@barajs/pouchdb'

import { makeBible } from './bible'
import { addJwtToPayload, checkoutRepository } from './git'

run(
  app({
    portion: [GithubPortion(), PouchDBPortion()],
    trigger: [
      welcome(),
      showPouchInfo(),
      whenPush(
        act(
          pipe(
            gather({
              // checkoutStep: pipe(
              //   addJwtToPayload,
              //   checkoutRepository
              // ),
              processStep: side(makeBible),
            }),
          ),
        ),
      ),
    ],
  }),
)

function showPouchInfo(): BaraTriggerPayload {
  return whenPouchReady(
    act((info: any) => console.log(`PouchDB Is Ready`, info)),
    act(
      pipe(),
      // allDocs(),
      // log()
    ),
  )
}

function welcome(): BaraTriggerPayload {
  return whenWebhookListening(
    act(({ port }) => {
      console.log(`Webhook listening on http://localhost:${port}`)
    }),
  )
}

function GithubPortion(): BaraPortionPayload<any, any, any> {
  return Github({
    enableWebhook: true,
    port: process.env.PORT || 7070,
    secret: `${process.env.GITHUB_WEBHOOK_SECRET}`,
    appId: (process.env.GITHUB_APP_ID as unknown) as number,
    privateKey: `${process.env.GITHUB_APP_PRIVATE_KEY}`,
  })
}

function PouchDBPortion(): BaraPortionPayload<any, any, any> {
  return PouchDBServer({
    remote: 'http://couchdb:5984/vbc',
  })
}
