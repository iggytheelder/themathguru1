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
    <>
      <Head>
        <meta name="description" content="The Math Guru is a tutoring service like no other."/>
      </Head>
      <Layout>
        <p style={{backgroundColor: "cornflowerblue", textAlign: "center", borderRadius: "20px", padding: "15px", color: "white", fontWeight: ""}}>
          To get started, text Caleb at<br/><b>(480) 420 - 8218</b>
        </p>
        <h1 style={{marginTop: "-20px"}} className = "center">
          Caleb, The Math Guru
          <span className="material-symbols-outlined" style={{transform: "translateY(20px)", fontSize: "80px"}}>
            self_improvement
          </span> {' '}
        </h1>
        <p className = "center">
          <i>The office hours your math professor can't offer.</i>
        </p>
        <p className = "center">
          <a href="#summary">Summary</a>{' '}&bull;{' '}
          <a href="#testimonials">Testimonials</a>{' '}&bull;{' '}
          <a href="#how-it-works">How It Works</a>{' '}&bull;{' '}
          <a href="#pricing">Pricing</a>{' '}&bull;{' '}
          <a href="#referrals">Referrals</a>{' '}&bull;{' '}
          <a href="#contact">Contact</a>
        </p>
        <h2 id = "summary">Summary</h2>
        <p>
          Caleb, The Math Guru is a private math tutor.
        </p>
        <p>
          You can rest assured because Caleb has a Bachelor's in mathematics, have graduate school experience, and taught math to middle school students.
          He has completed 100+ hours of math tutoring.
        </p>
        <p>
          Caleb is available 10 hours a day, 5 days a week, and some weekends.
        </p>
        <h2 id = "testimonials">Testimonials</h2>
        <p>
          "I have used several math tutors in college and I finally have found a tutor who can explain the topics better than the professor and explain how to do the problem clearly. I was struggling before I started working with Caleb and now I am extremely confident with my math skills."
          <br/> - Kyle H., Arizona State University
        </p>
        <p>
          "It was the beginning of the semester and I was thinking about dropping my Calculus I class for business majors. But my dad is very supportive of my education goals, so he hired Caleb to help make me feel confident in getting through the math. We met every week and Caleb make sure I got my homework done. I found his studying tips and tricks very helpful. I actually didn't need to take the last exam. Then I aced the final. I got an A+ in the class. Thanks Caleb!"
          <br/> - Gurshant A.
        </p>
        <p>
          "I was having a horrible second semester at ASU. I was failing Calculus II. I didn't want to have to take it again. That would have been expensive. It was late in the semester and I thought for sure there was no hope for me to turn things around. But fortunately my mom found Caleb online. He was very quick to respond and assued me that I could pass the class with his help. He was right. I ended up passing and I got an A+ on the final! I saved a lot of money and time with just a few sessions."
          <br/> - Quincy D.
        </p>
        <p>
          "I’ve been preparing to take the HESI, the nursing entrance exam, for my nursing program. I was confident on most of the content, but I was still struggling with some of the math. Caleb refreshed me on everything from ratios & proportions to solving systems of equations. I’ve passed my HESI and got into my nursing program!"
          <br/> - Dalia O.
        </p>
        <h2 id = "how-it-works">How it works</h2>
        <p>
          Caleb tutors for ANY math class and for any age.
          Most students that use us for math tutoring are taking a college math class, such as college algebra, calculus, or more advanced math classes.
        </p>
        <p>
          After you text Caleb, he will offer a 10-minute consultation call (FREE) before scheduling your first session.
          Feel free to ask any questions that you have.
          Send Caleb your syllabus and your grades, and we will calculate what you need to score on the remaining exams (FREE).
          Next, schedule a 60 minute tutoring session.
        </p>
        <p>
          If you are happy with the first session, meet with Caleb whenever you need.
          Caleb doesn't require you to commit to a certain frequency of sessions, unlike most tutoring center.
        </p>
        <p>
          Caleb uses Calendly for scheduling and Venmo for payment.
          After each session, we will request for payment.
          No need to send payment before the session.
          Everytime you schedule, you'll receieve an email confirmation which will go on your calendar and a text reminder 1 hour before the session.
        </p>
        <h2 id = "pricing">Pricing</h2>
        <p>
          $95 per hour
        </p>
        <h2 id = "referrals">Referrals</h2>
        <p>
          Whenever a new student that you've referred does their first session with me,
          I'll give you 50% off your next discount. Unlimited referrals. If you refer 10 people, your next 10 sessions will be half off.
          Let me know if you are interested in referring. I have suggestions and can send you my flyer, business cards, ect.
          I appreciate your willingness to share my math tutoring service.
        </p>
        <h2 id = "contact">Contact</h2>
        <p>
          Call or text Caleb at <b>(480) 420 - 8218</b> for inquires about math tutoring. All other communication can be done by email at caleb@themath.guru
        </p>
        {/*
        <FeedbackForm />
        <JokeBlock/>
        */}
      </Layout>
    </>
  )
}
