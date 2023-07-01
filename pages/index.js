import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'

import ShareBtn from '@components/ShareBtn'

import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <Layout>
      <h1 className = "title">The Math Guru</h1>
      <p>
        Welcome to The Math Guru! We are a math tutoring service.
      </p>
      <p>
        <Link href="/seek"><a>Seek</a></Link> and you will find a Math Guru.
        We will connect you with a qualitfied math expert to assist your student in their math class.
        We encourage you to schedule some time to talk with your tutor before booking a session.
      </p>
      <p>
        It is our belief that most people's difficulty with math is in their heads.
        We want to help students overcome their self-limiting beliefs.
        Read our <Link href = "/posts/unlocking-the-mathematical-mind"><a>white paper</a></Link>.
      </p>
      {/*
      <p>
        If you're not taking a math class, share our services with your friends who are taking math classes.
      </p>
      <p>
        Lastly you can leave us a 5-star <a href="https://g.page/r/Cbrj-d6W-eSiEBI/review">Google review</a>,
        like and follow <a href="https://www.facebook.com/themathgurututoring">The Math Guru Facebook page</a>,
        or subscribe to our Newsletter at the bottom of this page.
      </p>
      */}
      <p>
        Founded in Tempe, AZ in 2021. We now serve student everywhere.
        The Math Guru started as out on the founder's <a href = "https://www.calebignace.com/tutoring" target="blank_">personal web page</a>, which you can still view.
        In June 2023, the webpage migrated to this domain name.
      </p>
      {/*
      <FeedbackForm />
      <JokeBlock/>
      */}
    </Layout>
  )
}
