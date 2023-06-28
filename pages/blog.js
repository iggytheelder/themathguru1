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
    <Layout>
      <h1 className = "title">Blog</h1>
      <p style={{textAlign: "center"}}>
        A collection of math writings that are designed to be timeless.
      </p>
      <section style={{textAlign: "center"}}>
        <ul style={{padding:"0"}}>
          {allPostsData.map(({ id, date, title, author }) => (
            <li key={id} style={{listStyleType: "none", margin: "0"}}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              {' '}
              <small>
                by {author}
                {' '}
                &#x2022;
                {' '}
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
