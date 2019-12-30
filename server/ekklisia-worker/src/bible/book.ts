import {
  pipe,
  joinWith,
  gather,
  lensProp,
  addProp,
  s2o,
  report,
  disposeProps,
  payloadArg,
} from '@barajs/formula'
import { readFile } from '@barajs/fs'
import { upsertDocs } from '@barajs/pouchdb'

import { readVersion } from './version'

export const getBookOrder = (book_code: string) => {
  const map =
    'Gen|Exod|Lev|Num|Deut|Josh|Judg|Ruth|1Sam|2Sam|1Kgs|2Kgs|1Chr|2Chr|Ezra|Neh|Esth|Job|Ps|Prov|Eccl|Song|Isa|Jer|Lam|Ezek|Dan|Hos|Joel|Amos|Obad|Jonah|Mic|Nah|Hab|Zeph|Hag|Zech|Mal|Matt|Mark|Luke|John|Acts|Rom|1Cor|2Cor|Gal|Eph|Phil|Col|1Thess|2Thess|1Tim|2Tim|Titus|Phlm|Heb|Jas|1Pet|2Pet|1John|2John|3John|Jude|Rev'
  return map.split('|').indexOf(book_code) + 1 || -1
}

export const readBook = pipe(
  lensProp('path', ''),
  s2o('/', { 5: 'category', 6: 'version', 7: 'book' }),
  disposeProps([0, 1, 2, 3, 4, 'category', 'version', 'book']),
  joinWith('/', ['book.md']),
  readFile(payloadArg(), { encoding: 'utf8' }),
  lensProp('doc'),
)

export const placeChapter = (chapter_count: number) => {
  const result = []
  for (let i = 1; i <= chapter_count; i += 1) {
    result.push(i)
  }
  return result.join(',')
}

export const parseBookPath = pipe(
  lensProp('path', ''),
  s2o('/', { 5: 'category', 6: 'version', 7: 'book' }),
  disposeProps(['category', 'version', 'book']),
)

const readDoc = pipe(
  lensProp('doc'),
  addProp('book_order', ({ book_code }: any) => getBookOrder(book_code)),
  addProp('chapter_render', ({ chapter_count }: any) =>
    placeChapter(chapter_count),
  ),
)

export const gatherBookData = gather({
  metadata: parseBookPath,
  version: readVersion,
  doc: readDoc,
  // raw_text: readBook,
  path: lensProp('path'),
})

export const makeBibleBook = pipe(
  pipe(
    upsertDocs(),
    report(`[Volume] Updated all books`),
  ),
)
