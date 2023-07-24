import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '@components/Layout'

import { getSortedPostsData } from '../lib/posts';
import Date from '@components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Head>
      <meta name="description" content="The Math Guru's Blog"/>
    </Head>
    <Layout>
      <h1 className = "title">Blog</h1>
      <p className = "center">
        Sign up to the <Link href = "/newsletter"><a>newsletter</a></Link> to get notified when we add a blog post.
      </p>
      {/*
      <p style={{textAlign: "center"}}>
        A collection of timeless math writings.
      </p>
      */}
      <section style={{textAlign: "left"}}>
        <ul style={{padding:"0"}}>
          {allPostsData.map(({ id, date, title, subtitle, author, excerpt }) => (
            <li key={id} style={{listStyleType: "none", marginLeft: "0px"}}>
              <h4 style={{marginBottom: "0px", margin:"0px"}}>{title}:{' '}<span className = "subtitle">{subtitle}</span></h4>
              <small>
                {excerpt}..{' '}
                <Link href={`/posts/${id}`}>
                  <a>Continue Reading</a>
                </Link>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
