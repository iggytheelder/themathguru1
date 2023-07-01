import styles from './Social.module.css'
import Image from 'next/image'

export default function MessageBtn({ email, phone, size}) {
  return (
    <a href={"mailto: " + email} target="blank_" className = {styles.spaceRight}>
        <div className = {styles.social}>
          <Image
            src="/social/email.png"
            width={size}
            height = {size}
            alt="email"
          />
        </div>
      </a>
  );
}
