/**
 * @type import('@types').Config
 */

const config = {
  meta: {
    title: 'Wedding | Cassidy & Alexander',
    copyright: 'Alexander Eckert © 2017 - 2020',
  },
  seo: {
    description: 'Wedding website of Cassidy & Alexander.',
    canonical: 'https://wedding.eckertalex.dev',
    titleTemplate: '%s | eckertalex.dev',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://wedding.eckertalex.dev',
      title: 'Wedding | Cassidy & Alexander',
      description: 'Wedding website of Cassidy & Alexander.',
      images: [
        {
          url: 'https://wedding.eckertalex.dev/static/img/og.png',
          alt: 'Wedding | Cassidy & Alexander',
          width: 1280,
          height: 720,
        },
      ],
    },
    twitter: {
      handle: '@eckertalex_',
      site: '@eckertalex_',
      cardType: 'summary_large_image',
    },
  },
}

module.exports = config
