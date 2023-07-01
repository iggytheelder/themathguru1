import styles from './Footer.module.css'
import NewsletterForm from '@components/NewsletterForm'
import ShareBtn from '@components/ShareBtn'
import Link from 'next/link'
import SocialLinks from '@components/SocialLinks'


export default function Footer({ page }) {
  if (page != "newsletter") {
    return (
      <>
        <footer>
          <div className={styles.newsletter}>
            <h3>Newsletter</h3>
            <p>
              We will be lauching on August 25, 2023. Sign up to get special lauch offers and ways to get involved with math education. After the launch, you'll get notified when we have something really special to share with you.
              {' '}<Link href = "/newsletter"><a>Learn More</a></Link>
            </p>
            <NewsletterForm/>
          {/*
          <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
          */}
          </div>
          <div className={styles.footerNav}>
            <div style={{marginBottom: "30px"}}>
              <SocialLinks size = "50"></SocialLinks>
            </div>
            <div className={styles.left}>
              <Link href="/"><a>The Math Guru</a></Link><br/>
              <Link href="/seek"><a>Find a Tutor</a></Link><br/>
              <Link href="/become"><a>Become a Tutor</a></Link>
            </div>
            <div className={styles.right}>
              <Link href="/blog"><a>Blog</a></Link><br/>
              <Link href="/newsletter"><a>Newsletter</a></Link><br/>
              <Link href="/contact"><a>Contact</a></Link>
            </div>
        </div>
        </footer>
      </>
    )
  }
}
