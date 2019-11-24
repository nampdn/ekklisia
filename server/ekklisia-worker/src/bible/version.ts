import {
  addProp,
  disposeProps,
  gather,
  joinWith,
  lensProp,
  log,
  filter,
  pattern,
  loopThrough,
  pipe,
  report,
  s2o,
  map,
  templateProps,
} from '@barajs/formula'
import { upsertDocs, upsert } from '@barajs/pouchdb'
import { readAsYaml, readAsYamlList } from '@barajs/loader'

export const readVersion = pipe(
  lensProp('path'),
  s2o('/', { 5: 'category', 6: 'version', 7: 'book' }),
  disposeProps([0, 1, 2, 3, 4, 'category', 'version']),
  joinWith('/', ['version.yaml']),
  readAsYaml(),
)

export const makeVersion = pipe(
  lensProp('localFiles'),
  readAsYamlList(filter(pattern(/version.yaml$/))),
  gather({
    metadata: map(lensProp('doc.dam_id')),
    versions: loopThrough(
      pipe(
        lensProp('element.doc'),
        addProp('_id', templateProps('BIB::VOL::{dam_id}')),
      ),
    ),
  }),
  gather({
    root: pipe(
      gather({
        _id: 'BIB::MET::VERSIONS',
        versions: lensProp('metadata'),
      }),
      upsert(),
      report('[Version] Updated {id} {_rev} - OK: {ok}'),
    ),
    versions: pipe(
      lensProp('versions'),
      upsertDocs(),
      report('[Version] Updated all version metadata {.}.'),
    ),
  }),
)
//   createVersions()
