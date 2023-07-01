import styles from './Social.module.css'
import Image from 'next/image'

export default function MessageBtn({ email}) {
  return (
    <a href={"mailto: " + email} target="blank_" className = {styles.spaceRight}>
          <Image
            src="/social/email.png"
            width={40}
            height = {40}
            alt="email"
          />
      </a>
  );
}
