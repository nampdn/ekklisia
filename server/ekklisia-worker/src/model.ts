import { Book } from '@vietbible/model'

export interface YamlPayload {
  doc: YamlVersion | YamlVolume
  path: string
}

export interface YamlVersion {
  lang_code: string
  version_code: string
  version_code_alt: string
  version_name: string
  volume_name: string
  media: string
  dam_id: string
}

export interface RawBibleBook {
  book_code_alt: string
  book_code: string
  book_name: string
  book_name_description: string
  chapter_count: number
  book_order: number
  chapter_render: string
  raw_text: string
}

export interface RawCommentaryBook {
  author: string
  book_code: string
  book_name: string
  bible_book_name: string
  book_order: number
}

export interface YamlVolume {
  metadata: Metadata
  version: YamlVersion
  doc: RawBibleBook
  path: string
}

export interface YamlBibleBook {
  metadata: Metadata
  version: YamlVersion
  doc: RawBibleBook
  raw_text: string
  path: string
}

export interface YamlBibleChapter {
  book: Book
  raw_text_chapters: string[]
}

export interface YamlCommentaryChapter {
  book: Book
  raw_text_chapters: Array<{
    doc: string
    parsed_range: {
      range_data: {
        chapter: string
        verses: {
          start: string
          end: string
        }
      }
      range_code: string
    }
  }>
}

export interface YamlCommentary {
  metadata: Metadata
  version: YamlVersion
  doc: RawCommentaryBook
  path: string
}

export interface YamlCommentaryBook {
  metadata: Metadata
  version: YamlVersion
  doc: RawCommentaryBook
  raw_text: string
  path: string
}

export interface Metadata {
  category: string
  version: string
  book: string
}
