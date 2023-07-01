import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import ShareBtn from '@components/ShareBtn'

export default function Lessons() {
  return (
    <Layout>
      <h1 className = "title">Math Lessons</h1>
      <p>
        Explore the visually interactive math lessons created by our Math Gurus.
      </p>
    </Layout>
  )
}
