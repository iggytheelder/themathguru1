import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className = {styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className = {styles.spaceRight}>THE MATH GURU</a>
            </Link>
          </li>
          <li>
            <Link href="/seek">
              <a className = {styles.spaceRight}>SEEK</a>
            </Link>
          </li>
          <li>
            {/*
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
            */}
          </li>
          <li>
            <Link href="/become">
              <a className = {styles.spaceRight}>BECOME</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </li>
          {/*
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          */}
          {/*
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          */}
        </ul>
      </nav>
    </header>
  )
}
