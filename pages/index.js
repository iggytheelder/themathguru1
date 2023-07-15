import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import RowWithTwoColumns from '@components/RowWithTwoColumns'
import StyleImage from '@components/StyleImage'
import LandingPageDiv from '@components/LandingPageDiv'

import Image from 'next/image'

import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <Layout>
      <p>
        Hi, this page is being actively developed. Sorry the inconvience,
        I know you were hoping to see a cool landing page with all the bells and wistles.
        I build in public at <Link href="https://twitter.com/iggytheelder">@iggytheelder</Link> on Twitter if you want to following
        all the developments.
      </p>
      <RowWithTwoColumns left = {
        <StyleImage
          src = "/home/pexels-ketut-subiyanto-4474005.jpg"
          width = "600"
          height = "400"
          alt = "child being tutored"
          boxShadow = "5px 5px 0px 5px"
          color = "#FE9774"
          borderRadius = "30px"
          border = "solid black 2px">
        </StyleImage>
      } right = {
        <LandingPageDiv
          message = {
            <>
              Math tutoring is ALWAY BETTER in-person.{' '}
              <span style = {{color: "#FE9774"}}>The Math Guru makes it easy.</span>
            </>
          }
          href = "/seek"
          buttonText = "Find a tutor">
        </LandingPageDiv>
      }></RowWithTwoColumns>
      {/*
      <FeedbackForm />
      <JokeBlock/>
      */}
    </Layout>
  )
}
