import styles from './LandingPageDiv.module.css';
import Link from 'next/link'

export default function LandingPageDiv({ message, href, buttonText }) {
  return (
    <div>
      <div className = {styles.message}>{message}</div>
      <Link href={href}>
        <button className = {styles.button}>
          {buttonText}
        </button>
      </Link>
    </div>
  )
}
