import styles from './Cover.module.css'
import Image from 'next/image'

export default function Cover() {
  return (
    <div className = {styles.coverDiv}>
    <Image
      className = {styles.coverImage}
      src="/cover.png"
      width={1000}
      height={400}
      alt="Cover image"
    />
    </div>
 );
}
