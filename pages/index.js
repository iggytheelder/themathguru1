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
      <LandingPage></LandingPage>
      {/*
      <FeedbackForm />
      <JokeBlock/>
      */}
    </Layout>
  )
}
