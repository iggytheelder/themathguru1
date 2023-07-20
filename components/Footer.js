import styles from './Footer.module.css'
import NewsletterForm from '@components/NewsletterForm'
import ShareBtn from '@components/ShareBtn'
import Link from 'next/link'
import SocialLinks from '@components/SocialLinks'


export default function Footer({ page }) {
  if (page != "newsletter") {
    return (
      <>
        <footer className = {styles.footer}>
          <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <p>
              We will be lauching on August 25, 2023. Sign up to get special lauch offers and ways to get involved with math education. After the launch, you'll get notified when we have something really special to share with you.
              {' '}<Link href = "/newsletter"><a>Learn More</a></Link>
            </p>
            <NewsletterForm/>
          </div>
          <div className={styles.footerNav}>
            Don't be a stranger, be social.{' '}
            <p>
            {/*
              <div style={{marginBottom: "30px", display: "inline-block", transform: "translate(0, 13px)"}}>
              */}
              <SocialLinks size = "40"></SocialLinks>
            </p>
            <Link href="/"><a>Home</a></Link><br/>
            <Link href="/seek"><a>Seek a Math Guru</a></Link><br/>
            <Link href="/become"><a>Become a Math Guru</a></Link><br/>
            <Link href="/newsletter"><a>Newsletter</a></Link><br/>
            <Link href="/contact"><a>Contact</a></Link><br/>
            <Link href="https://g.page/r/Cbrj-d6W-eSiEBI/review"><a>Leave a Google Review</a></Link>
            <div style={{marginTop: "30px"}}>
              &#9400; 2023 The Math Guru
            </div>
          </div>
        </footer>
      </>
    )
  }
}
