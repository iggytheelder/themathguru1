import Link from 'next/link'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <header className = {styles.banner}>
      Subscribe to our{' '}
      <Link href="/newsletter">
        <a>
          Newsletter
        </a>
      </Link> to get updates.
    </header>
  )
}
