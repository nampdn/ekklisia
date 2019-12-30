import {
  addProp,
  extractProps,
  gather,
  lensProp,
  ifElse,
  pipe,
  same,
  template,
  Formula
} from '@barajs/formula'

import { mkdirpAsync } from '@vgm/nodeasync'
import { default as simpleGit } from 'simple-git/promise'
import { getLocalRepoPath, getBranch } from '.'
import { getRepoToken } from './token'

const GIT_SSH_COMMAND =
  'ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no'

const prepareClone = pipe(
  gather({
    jwt: lensProp('jwt'),
    path: lensProp('path'),
    owner: lensProp('data.payload.repository.owner.name'),
    repo: lensProp('data.payload.repository.name'),
    branch: pipe(
      lensProp('data'),
      getBranch
    ),
    git: pipe(
      lensProp('path'),
      async path => {
        await mkdirpAsync(path)
        return path
      },
      (path: string) => simpleGit(path).env({ ...process.env, GIT_SSH_COMMAND })
    )
  }),
  addProp(
    'token',
    pipe(
      extractProps(['jwt', 'owner', 'repo']),
      getRepoToken()
    )
  ),
  addProp(
    'remote',
    template('https://x-access-token:{token}@github.com/{owner}/{repo}.git', {
      token: lensProp('token'),
      owner: lensProp('owner'),
      repo: lensProp('repo')
    })
  )
)

const getMetadata = gather({
  path: getLocalRepoPath,
  jwt: lensProp('jwt'),
  data: same()
})

const withGit = (action: Formula) =>
  pipe(
    lensProp('git'),
    action
  )

const clone = pipe(
  prepareClone,
  gather({
    git: lensProp('git'),
    remote: lensProp('remote'),
    path: lensProp('path'),
    branch: lensProp('branch')
  }),
  ifElse(
    pipe(withGit(git => git.checkIsRepo())),
    pipe(async ({ git, remote, path, branch }) => {
      console.log(`Verify:`, remote, path, branch)
      await git.removeRemote('origin')
      await git.addRemote('origin', remote)
      await git.pull('origin', branch)
      console.log(`Pulled:`, remote, path, branch)
    }),
    pipe(async ({ git, remote, path, branch }) => {
      console.log(`Cloning:`, remote, path, branch)
      await git.clone(remote, path)
      await git.checkout(branch)
      console.log(`Cloned!`, remote, path, branch)
    })
  )
)

export const checkoutRepository = pipe(
  getMetadata,
  clone
)
