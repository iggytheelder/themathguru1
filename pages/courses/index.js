import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import ShareBtn from '@components/ShareBtn'

export default function MathCourses() {
  return (
    <Layout>
      <h1 className = "title">Math Courses</h1>
      {/*
      <p>
        Explore the visually interactive math lessons created by our Math Gurus.
      </p>
      */}
      <p>
        Our courses are by subject, not grade level.
      </p>
      <h2>
        Fractions
      </h2>
      <ol>
        <li>
          Part of a Whole (coming soon)
        </li>
      </ol>
      <h2>
        Algebra
      </h2>
      <ol>
        <li>
          Expressions and Equations (coming soon)
        </li>
        <li>
          <Link href="/courses/algebra/solving-for-a-variable">Solving for a Variable</Link>
        </li>
      </ol>
    </Layout>
  )
}
