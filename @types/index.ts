import {NextSeoProps} from 'next-seo'
/* -------------------------------------------------------------------------- */

type Meta = {
  title: string
  copyright: string
}

export type Config = {
  meta: Meta
  seo: NextSeoProps
}

/* -------------------------------------------------------------------------- */

type ReadingTime = {
  text: string
  minutes: number
  time: number
  words: number
}

export type FrontMatter = {
  layout: string
  title: string
  date: string
  summary: string
  slug: string
  readingTime: ReadingTime
  __resourcePath: string
}
