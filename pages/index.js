import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'

import LandingPage from '@components/LandingPage'

import ShareBtn from '@components/ShareBtn'

import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <Layout>
      <p>
        Hi, this page is being actively developed. Sorry the inconvience,
        I know you were hoping to see a cool landing page with all the bells and wistles.
        I build in public at <Link href="https://twitter.com/iggytheelder">@iggytheelder</Link> on Twitter if you want to following
        all the developments.
      </p>
      {/*
      <FeedbackForm />
      <JokeBlock/>
      */}
    </Layout>
  )
}
