import {
  append,
  gather,
  addProp,
  lensProp,
  report,
  map,
  log,
  loopThrough,
  mapProp,
  payloadArg,
  evolveProp,
  pipe,
  prepend,
  replace,
  s2a,
  selectArg,
  template,
  same,
  concurrent,
  attempt,
} from '@barajs/formula'
import { readFile } from '@barajs/fs'
import { upsert, upsertDocs } from '@barajs/pouchdb'

const makeChapterArray = pipe(
  lensProp('chapter_render'),
  s2a(','),
)

export const readMultipleChapters = pipe(
  gather({
    chapter_array: makeChapterArray,
    path: pipe(
      lensProp('path'),
      replace({ find: 'book.yaml', replace: '' }),
    ),
  }),
  mapProp(
    'chapter_array',
    pipe(
      gather({
        chapter: same(),
        path: pipe(
          prepend(selectArg(1, lensProp('path'))), // Prepend with second argument 'path'
          append('.md'),
        ),
      }),
      addProp(
        'doc',
        pipe(
          lensProp('path'),
          readFile(payloadArg(), { encoding: 'utf8' }),
        ),
      ),
    ),
  ),
)

export const makeBibleChapter = pipe(
  loopThrough(
    pipe(
      lensProp('element'),
      gather({
        _id: lensProp('_id'),
        dam_id: lensProp('dam_id'),
        book_code: lensProp('book_code'),
        path: lensProp('path'),
        raw_text_chapters: readMultipleChapters,
      }),
      evolveProp(
        'raw_text_chapters',
        map(
          gather({
            _id: template('BIB::{dam_id}::{book_code}::{chapter}', {
              dam_id: selectArg(1, lensProp('dam_id')),
              book_code: selectArg(1, lensProp('book_code')),
              chapter: lensProp('chapter'),
            }),
            book_code: selectArg(1, lensProp('book_code')),
            raw_text: lensProp('doc'),
            chapter: lensProp('chapter'),
          }),
        ),
      ),
      lensProp('raw_text_chapters'),
      upsertDocs(),
      report(`[Chapter] Updated chapters!`),
    ),
  ),
)
