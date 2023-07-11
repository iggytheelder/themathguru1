import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import Link from 'next/link'
import Script from 'next/script'

import Cover from '@components/Cover'

export const siteTitle = 'The Math Guru';
export const siteUrl = 'themath.guru';
export const siteDescription = siteTitle + " is innovating in the math tutoring space."

export default function Layout({ page, children }) {
  return (
    <>
      <Banner/>
      <div className="container">
        <Head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="keywords" content="math, tutoring, math education, math tutoring"/>
        </Head>
        <Header/>
        {/*<Cover/>*/}
        <main>
          {children}
        </main>
        <Footer page = {page}/>
        <Script
            id="tally-js"
            src="https://tally.so/widgets/embed.js"
            onReady={() => {
                Tally.loadEmbeds();
            }}
        />
      </div>
    </>
  )
}
