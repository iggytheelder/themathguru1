import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import InternshipForm from '@components/InternshipForm'

export default function Internships() {
  return (
    <Head>
      <meta name="description" content="Intern with The Math Guru."/>
    </Head>
    <Layout>
      <h1 className = "title">Internships</h1>
      <p>
        Please submit your information to apply for internships with The Math Guru.
      </p>
      <InternshipForm/>
    </Layout>
  )
}
