import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import ShareBtn from '@components/ShareBtn'

export default function MathLessons() {
  return (
    <Layout>
      <h1 className = "title">Math Lessons</h1>
      <div style={{textAlign:"center"}}>
        <p>
          Explore the visually interactive math lessons created by our Math Gurus.
        </p>
        <p>
          More coming very soon!
        </p>
        <h2>
          <Link href="/lessons/algebra"><a>Algebra Lessons</a></Link>
        </h2>
        <p>
          Algebra is usually started to be taught in 8th grade.
          Teachers and standard curriculums don't always mention algebra by name.
          They might call the algebra lessons "One Step Equations" or "Two Step Equations."
        </p>
        <p>
          <Link href="/lessons/algebra/solving-for-x"><a>Lesson 1: Solving for x</a></Link>
        </p>
      </div>
    </Layout>
  )
}