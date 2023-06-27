import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'

export default function SeekAMathGuru() {
  return (
    <Layout>
      <h1>Seek a Math Guru</h1>
      <p>
        Coming soon you'll be able to find a Math Guru that will tutor you in math.
      </p>
      <p>
      This website is currently under developement.
      If you need math tutoring, please visit <a href="https://www.calebignace.com/tutoring">calebignace.com/tutoring</a>.
      This website will be replacing that page.
      </p>
    </Layout>
  )
}
