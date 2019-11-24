import { join } from 'path'
import {
  gather,
  lensProp,
  loopOf,
  match,
  pipe,
  template,
  concat,
  side,
} from '@barajs/formula'
import { lsDir } from '@barajs/loader'

import { getBranch } from '../git'
import { makeVersion } from './version'
import { makeVolume } from './volume'

const getUpdatedFiles = pipe(
  lensProp('payload.head_commit'),
  concat([lensProp('added'), lensProp('modified')]),
)

const getMetadata = gather({
  owner: lensProp('payload.repository.owner.name'),
  repo: lensProp('payload.repository.name'),
  branch: getBranch,
  updatedFiles: getUpdatedFiles,
})

const buildPath = (contentType: string) =>
  template(`{root}/{owner}/{repo}/{branch}/${contentType}`, {
    root: () =>
      process.env.NODE_ENV === 'production'
        ? '/repos'
        : join(__dirname, '../../repos'),
    owner: lensProp('owner'),
    repo: lensProp('repo'),
    branch: lensProp('branch'),
  })

export const makeBible = pipe(
  getMetadata,
  loopOf(
    ['KT', 'GN'],
    match({
      KT: pipe(
        gather({
          localFiles: lsDir({ exclude: /\.git/, path: buildPath('KT') }),
          updatedFiles: lensProp('updatedFiles'),
        }),
        side(makeVersion, makeVolume),
      ),
    }),
  ),
)

// Prototyping
// import { pushPayload } from '../mock'
// if (process.env.NODE_ENV !== 'production') {
//   makeBible(pushPayload).then()
//   console.log('Hello')
// }
