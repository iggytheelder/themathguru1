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
  function intro(event){
    let btn = event.target;
    let audio = document.getElementById('intro');
    if (btn.innerHTML == "Play Audio Intro") {
      audio.play();
      btn.innerHTML = "Pause Audio Intro";
    } else {
      audio.pause();
      btn.innerHTML = "Play Audio Intro";
    }
  }

  return (
    <>
      <Head>
        <meta name="description" content="The Math Guru is a tutoring service like no other."/>
      </Head>
      <Layout>
        <p style={{backgroundColor: "cornflowerblue", textAlign: "center", borderRadius: "10px", padding: "10px", color: "white", fontWeight: ""}}>
          Text Caleb at <b>(480) 420 - 8218</b>
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
        <p className = "center" style={{lineHeight: "50px"}}>
          <a href="#summary">Summary</a>{' '}&bull;{' '}
          <a href="#testimonials">Testimonials</a>{' '}&bull;{' '}
          <a href="#how-it-works">How It Works</a>{' '}&bull;{' '}
          <a href="#pricing">Pricing</a>{' '}&bull;{' '}
          <a href="#refund-policy">Refund Policy</a>{' '}&bull;{' '}
          <a href="#referrals">Referrals</a>{' '}&bull;{' '}
          <a href="#contact">Contact</a>
        </p>
        <p className = "center">
          <audio src="/podcast0.m4a" id = "intro"/>
          <button onClick={intro}>
            Play Audio Intro
          </button>
        </p>
        <h2 id = "summary">Summary</h2>
        <p>
          Caleb, The Math Guru is a private college math tutor.
        </p>
        <p>
          You can rest assured because Caleb has a Bachelor's in mathematics, have graduate school experience, and taught math to middle school students.
          He has completed 500+ hours of math tutoring.
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
          Most students that use us for math tutoring are taking a college math class, such as college algebra, calculus, or a more advanced math classes.
        </p>
        <p>
          After you text Caleb, he will offer a 10-minute consultation call (FREE) before scheduling your first session.
          Feel free to ask any questions that you have.
          Send Caleb your syllabus and your grades, and Caleb will calculate what you need to score on the remaining exams (FREE).
          Next, schedule a 60 minute tutoring session.
        </p>
        <p>
          If you are happy with the first session, meet with Caleb whenever you need.
          Caleb doesn't require you to commit to a certain frequency of sessions, unlike most tutoring center.
        </p>
        <p>
          Caleb uses Calendly for scheduling and Venmo for payment.
          Everytime you schedule, you'll receieve an email confirmation which will go on your calendar and a text reminder 1 hour before the session.
        </p>
        <p>
          If you are purchasing a single session at a time, Caleb will request for payment after each session.
          No need to send payment before the session.
        </p>
        <p>
          You may purchase multiple sessions in advance to get a cheaper price per session, see the <a href="#pricing">pricing section</a> for details.
          Caleb will keep track of how many sessions you have used and you may ask at any time how many you have left.
        </p>
        <h2 id = "pricing">Pricing</h2>
          <p>
            Tutoring sessions are an hour long.
          </p>
          <p>
            Want to try Caleb out first? Just do a single session, then purchase a package.
            That first session will be included in your package.
          </p>
          <div className = "pricing-table">
            <h3 className = "center">
            </h3>
            <p style={{display: "flex", justifyContent: "space-between"}}>
              <span>
              Sessions
              </span>
              <span>
              Price / Session
              </span>
            </p>
            <p style={{display: "flex", justifyContent: "space-between"}}>
              <span>
              1
              </span>
              <span>
              $135
              </span>
            </p>
            <p style={{display: "flex", justifyContent: "space-between"}}>
              <span>
              5
              </span>
              <span>
              $130
              </span>
            </p>
            <p style={{display: "flex", justifyContent: "space-between"}}>
              <span>
              10
              </span>
              <span>
              $120
              </span>
            </p>
            <p style={{display: "flex", justifyContent: "space-between"}}>
              <span style={{fontWeight: "bold"}}>
              20
              </span>
              <span style={{fontWeight: "bold"}}>
              $95
              </span>
            </p>
          </div>
          <p>
            The best deal is 20 sessions for $95 per session.
          </p>
        <div>
        </div>
        <h2 id = "refund-policy">
          Refund Policy
        </h2>
        <p>
          Refunds are allowed. Any sessions you have used will be charged at the single session price, and the rest will be refunded to you.
          The following expression represents your refund amount, in dollars:
        </p>
        <p className = "center">
          ( sessions purchased ) &bull; ( price / session ) &mdash; ( sessions used ) &bull; 135
        </p>
        <p>
          You will receive a refund if the above expression is positive.
        </p>
        <h2 id = "referrals">Referrals</h2>
        <p>
          Whenever a new student that you've referred does their first session with me,
          I'll give you $20 towards sessions. Unlimited referrals. If you refer 10 people, your next 10 sessions will be half off.
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
