import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '@components/Layout'
import NewsletterForm from '@components/NewsletterForm'

import ShareBtn from '@components/ShareBtn'

export default function Newsletter() {
  return (
    <Layout page = "newsletter">
      <h1 className = "title">Newsletter</h1>
      <p>
        We will be lauching on August 25, 2023.
        Sign up to get special lauch offers and ways to get involved with math education.
        After the launch, you'll get notified when we have something really special to share with you.
      </p>
      <p>
        We will never sell your data.
        Opt out anytime.
      </p>
      <NewsletterForm></NewsletterForm>
    </Layout>
  )
}
