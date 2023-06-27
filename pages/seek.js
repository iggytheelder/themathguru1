import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import SeekForm from '@components/SeekForm'

export default function Seek() {
  return (
    <Layout>
      <h1 className = "title">Seek a Math Guru</h1>
      <p>
        Find a Math Guru that will tutor you in math.
      </p>
      <SeekForm></SeekForm>
    </Layout>
  )
}
