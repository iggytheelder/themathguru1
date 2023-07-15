import styles from './LandingPageDiv.module.css';
import Link from 'next/link'

export default function LandingPageDiv({ message, href, buttonText, buttonBackground, marginBottom }) {
  return (
    <div style = {{marginBottom: marginBottom}}>
      <div className = {styles.message}>{message}</div>
      {href &&
        <Link href={href}>
          <button className = {styles.button} style = {{background: buttonBackground}}>
            {buttonText}
          </button>
        </Link>
      }
    </div>
  )
}
