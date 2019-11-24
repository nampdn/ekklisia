import {
  disposeProps,
  gather,
  joinWith,
  lensProp,
  pipe,
  s2a,
  slice
} from '@barajs/formula'

export const getBranch = pipe(
  lensProp('payload.ref'),
  s2a('/'),
  slice(2, 10),
  joinWith('_')
)

export const getLocalRepoPath = pipe(
  gather({
    root: () => '/repos',
    repo: lensProp('payload.repository.full_name'),
    branch: getBranch
  }),
  disposeProps(['root', 'repo', 'branch']),
  joinWith('/')
)

export * from './clone'
export * from './jwt'
