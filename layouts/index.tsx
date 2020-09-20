import React from 'react'
import {NextSeo} from 'next-seo'

import Container from 'layouts/container'
import {FrontMatter} from '@types'
/* -------------------------------------------------------------------------- */

type IndexProps = {
  children: React.ReactNode
  frontMatter: FrontMatter
}

export default function Index(props: IndexProps) {
  const {children, frontMatter} = props

  const url = `https://wedding.eckertalex.dev`

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        canonical={url}
        openGraph={{
          url,
          title: `${frontMatter.title}`,
        }}
      />
      <Container>{children}</Container>
    </>
  )
}
