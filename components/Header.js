import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <>
    <header className = {styles.header}>
      <nav>
        <ul>
          <li className = {styles.spaceRight} style={{transform: "translate(0,30px)"}}>
            <Link href="/">
              <a>
                <Image
                  src="/logo-500.png"
                  width={70}
                  height={70}
                  alt="logo"
                />
              </a>
            </Link>
          </li>
          {/*
          <li>
            <Link href="/">
              <a className = {styles.spaceRight}>THE MATH GURU</a>
            </Link>
          </li>
          */}
          <li>
            <Link href="/seek">
              <a className = {styles.spaceRight}>Seek</a>
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
              <a className = {styles.spaceRight}>Become</a>
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
    </>
  )
}
