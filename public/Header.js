import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className={styles.nav}>
        <div className = {styles.left}>
          <Link href="/" className = {styles.headerLink}>
              <img src="/favicon.ico" alt="Mathyness Logo" className={styles.logo} />
              Mathyness
          </Link>
        </div>
        <div className = {styles.right}>
          <Link href="/tutoring" className = {styles.headerLink}>
            Tutoring
          </Link>{' '}
          <Link href="/grades" className = {styles.headerLink}>
            Grades
          </Link>
        </div>
      </div>
    </>
  )
}
