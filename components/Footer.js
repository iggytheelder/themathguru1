import styles from './Footer.module.css'
import NewsletterForm from '@components/NewsletterForm'
import ShareBtn from '@components/ShareBtn'
import Link from 'next/link'

export default function Footer({ page }) {
  if (page != "newsletter") {
    return (
      <>
        <footer className={styles.footer}>
          <h3>Newsletter</h3>
          <p>
            We will be lauching on August 25, 2023.
            Sign up to get special lauch offers and ways to get involved with math education.
            After the launch, you'll get notified when we have something really special to share with you.
          </p>
          <p>
            <Link href = "/newsletter"><a>Learn More</a></Link>
          </p>
          <NewsletterForm/>
          {/*
          <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
          */}
        </footer>
      </>
    )
  }
}
