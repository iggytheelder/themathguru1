import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className = {styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>The Math Guru</a>
            </Link>
          </li>
          <li>
            <Link href="/seek">
              <a>Seek</a>
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
              <a>Become</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
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
