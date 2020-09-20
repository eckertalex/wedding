import React from 'react'

import SectionContainer from 'layouts/section-container'
import Footer from 'layouts/footer'
import WeddingDay from 'components/svgs/wedding-day'
import Schedule from 'components/schedule'
/* -------------------------------------------------------------------------- */

type ContainerProps = {
  children: React.ReactNode
}

export default function Container(props: ContainerProps) {
  const {children} = props

  return (
    <div className="dark:bg-gray-900 min-h-screen flex flex-col justify-between">
      <div>
        <SectionContainer>
          <main>
            <div className="flex flex-col">
              <div className="flex justify-center">
                <WeddingDay />
              </div>
              <h1 className="font-serif text-pink-300 text-center">Cassidy & Alexander</h1>
              <h2 className="font-serif text-green-300 text-center">
                13<sup>th</sup> August 2020
              </h2>
            </div>
            <img src="/static/img/us_with_bushes.jpg" alt="Cassidy & Alex" />
            <Schedule />
            <hr />
            {children}
          </main>
        </SectionContainer>
      </div>
      <div>
        <SectionContainer>
          <hr />
          <Footer />
        </SectionContainer>
      </div>
    </div>
  )
}
