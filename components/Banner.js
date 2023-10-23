import Link from 'next/link'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <header className = {styles.banner}>
      To get started, text Caleb at <b>(480) 420 - 8218</b>.
    </header>
  )
}
