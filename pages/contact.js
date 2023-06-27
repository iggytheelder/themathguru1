import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import ContactForm from '@components/ContactForm'


export default function Contact() {
  return (
    <Layout>
      <h1 className = "title">Contact</h1>
      <p>
        Communicate with us through call, text, or email.
      </p>
      <p>
        Leave us with your information and a short message. We will get back to you as soon as possible.
      </p>
      <p>
        If you're contacting us to inquire about joining as a tutor, go to <Link href="/join"><a>Join</a></Link>.
      </p>
      <ContactForm/>
    </Layout>
  )
}
