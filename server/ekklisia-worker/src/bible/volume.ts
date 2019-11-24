import {
  map,
  pipe,
  pattern,
  filter,
  lensProp,
  gather,
  templateProps,
  side,
} from '@barajs/formula'
import { readAsYamlList } from '@barajs/loader'

import { YamlVolume } from '../model'
import { gatherBookData, makeBibleBook } from './book'
import { makeBibleChapter } from './chapter'

export const remapVersion = (code: string): string => {
  const map: { [k: string]: string } = {
    BDM: 'V02',
    BPT: 'VPT',
    BPX: 'VPX',
    DNB: 'VNB',
    GKPV: 'VGK',
    LHPLVS: 'V05',
    TT: 'VTT',
    TTHD: 'V10',
    NC: 'VNC',
    HD: 'VHD',
  }
  return map[code] || code
}

export const isOT = (book_code: string): Boolean => {
  const pattern = 'Gen|Exod|Lev|Num|Deut|Josh|Judg|Ruth|1Sam|2Sam|1Kgs|2Kgs|1Chr|2Chr|Ezra|Neh|Esth|Job|Ps|Prov|Eccl|Song|Isa|Jer|Lam|Ezek|Dan|Hos|Joel|Amos|Obad|Jonah|Mic|Nah|Hab|Zeph|Hag|Zech|Mal|Tob|Jdt|Wis|Sir|Bar|1Macc|2Macc'.split(
    '|',
  )
  return pattern.indexOf(book_code) > -1
}

export const parseDamId = (raw: YamlVolume) => {
  return `${raw.version.lang_code}${remapVersion(raw.version.version_code)}${
    isOT(raw.doc.book_code) ? 'O' : 'N'
  }1ET`
}

export const processVolume = pipe(
  gatherBookData,
  gather({
    _id: templateProps('BIB::{version.dam_id}::{doc.book_code}'),
    dam_id: lensProp('version.dam_id'),
    book_code: lensProp('doc.book_code'),
    book_name: lensProp('doc.book_name'),
    chapter_count: lensProp('doc.chapter_count'),
    book_order: lensProp('doc.book_order'),
    chapter_render: lensProp('doc.chapter_render'),
    path: lensProp('path'),
  }),
)

export const makeVolume = pipe(
  lensProp('localFiles'),
  readAsYamlList(filter(pattern('book.yaml'))), // TODO filter out only changed documents.
  map(processVolume),
  side(makeBibleBook, makeBibleChapter),
)
