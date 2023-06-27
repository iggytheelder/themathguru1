import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import JoinForm from '@components/JoinForm';

export default function BecomeAMathGuru() {
  return (
    <Layout>
      <h1>Become a Math Guru</h1>
      <p>
        We are searching for mathy people like you to become a Math Guru to students near you.
        This is for you if you want to help kids learn math.
      </p>
      <p>
        We will provide you a tutoring page, handle scheduling, payment, and provide other other tools you need to display your expertise and attract studnets.
      </p>
      <p>
        Leave us your info and we will get in touch with you.
      </p>
      <JoinForm></JoinForm>
    </Layout>
  )
}
