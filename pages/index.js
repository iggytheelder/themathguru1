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
    {/*
      <p>
        Hi, this page is being actively developed. Sorry the inconvience,
        I know you were hoping to see a cool landing page with all the bells and wistles.
        I build in public at <Link href="https://twitter.com/iggytheelder">@iggytheelder</Link> on Twitter if you want to following
        all the developments.
      </p>
      */}
      <LandingPageDiv
        message = {
          <>
            <div style={{textAlign:"center", fontSize:"80px"}}>
              <span style = {{color: "#C96898"}}>T</span>
              <span style = {{color: "#FE9774"}}>H</span>
              <span style = {{color: "#FEEEEE"}}>E</span>
              {' '}
              <span style = {{color: "#FFD3AE"}}>M</span>
              <span style = {{color: "#FFB6AD"}}>A</span>
              <span style = {{color: "#C88BD1"}}>T</span>
              <span style = {{color: "#C96898"}}>H</span>
              {' '}
              <span style = {{color: "#FE9774"}}>G</span>
              <span style = {{color: "#FEEEEE"}}>U</span>
              <span style = {{color: "#FFD3AE"}}>R</span>
              <span style = {{color: "#FFB6AD"}}>U</span>
            </div>
          </>
        }
        marginBottom = "40px">
      </LandingPageDiv>

      <RowWithTwoColumns left = {
        <StyleImage
          src = "/home/pexels-ketut-subiyanto-4474005.jpg"
          width = "600"
          height = "400"
          alt = "child being tutored by women"
          boxShadow = "5px 5px 0px 5px"
          color = "#FE9774"
          borderRadius = "30px"
          border = "solid black 2px">
        </StyleImage>
      } right = {
        <LandingPageDiv
          message = {
            <>
              The Math Guru makes it <span style = {{color: "#FE9774"}}>easy to find local
              in-person math tutors</span> near you.
            </>
          }
          href = "/seek"
          buttonText = "Find a tutor"
          buttonBackground = "#FE9774">
        </LandingPageDiv>
      }></RowWithTwoColumns>

      <RowWithTwoColumns left = {
        <StyleImage
          src = "/home/pexels-rdne-stock-project-8799258.jpg"
          width = "600"
          height = "400"
          alt = "child being tutored by man"
          boxShadow = "5px -5px 0px 5px"
          color = "#C88BD1"
          borderRadius = "30px"
          border = "solid black 2px">
        </StyleImage>
      } right = {
        <LandingPageDiv
          message = {
            <>
              A math tutor is a <span style = {{color: "#C88BD1"}}>Math Guru</span> when
              they can <span style = {{color: "#C88BD1"}}>unlock the mathematical mind.</span>
            </>
          }
          href = "/posts/unlocking-the-mathematical-mind"
          buttonText = "Read how"
          buttonBackground = "#C88BD1">
        </LandingPageDiv>
      }></RowWithTwoColumns>

      <RowWithTwoColumns left = {
        <StyleImage
          src = "/home/pexels-max-fischer-5212320.jpg"
          width = "600"
          height = "400"
          alt = "math tutor looking proud"
          boxShadow = "-5px -5px 0px 5px"
          color = "#FFB6AD"
          borderRadius = "30px"
          border = "solid black 2px">
        </StyleImage>
      } right = {
        <LandingPageDiv
          message = {
            <>
              Want to <span style={{color: "#FFB6AD"}}>become a Math Guru?</span>{' '}
              We are accepting applications.
            </>
          }
          href = "/become"
          buttonText = "Apply here"
          buttonBackground = "#FFB6AD">
        </LandingPageDiv>
      }></RowWithTwoColumns>

      <RowWithTwoColumns left = {
        <StyleImage
          src = "/home/pexels-andrea-piacquadio-3807738.jpg"
          width = "600"
          height = "400"
          alt = "child being tutored by man"
          boxShadow = "-5px 5px 0px 5px"
          color = "#FFD3AE"
          borderRadius = "30px"
          border = "solid black 2px">
        </StyleImage>
      } right = {
        <LandingPageDiv
          message = {
            <>
              Are you <span style={{color: "#FFD3AE"}}>struggling with algebra?</span>{' '}
              We think we can help!
            </>
          }
          href = "/courses/algebra/solving-for-a-variable"
          buttonText = "Read this"
          buttonBackground = "#FFD3AE">
        </LandingPageDiv>
      }></RowWithTwoColumns>

      {/*
      <FeedbackForm />
      <JokeBlock/>
      */}
    </Layout>
  )
}
