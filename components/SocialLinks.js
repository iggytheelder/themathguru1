import styles from './Social.module.css'
import Image from 'next/image'

export default function SocialLinks({ size }) {
  return (
    <>
      <a href="https://www.youtube.com/@themathgurututoring" target="blank_" className = {styles.spaceRight}>
        <div className = {`${styles.social} ${styles.youtube}`} style={{height: size + "px", width: size + "px"}}>
          <Image
            src="/social/youtube-128.png"
            width={size}
            height = {size}
            alt="youtube"
          />
        </div>
      </a>
      <a href="https://www.facebook.com/themathgurututoring/" target="blank_" className = {styles.spaceRight}>
        <div className = {`${styles.social} ${styles.facebook}`} style={{height: size + "px", width: size + "px"}}>
          <Image
            className = {styles.socialLink}
            src="/social/facebook-128.png"
            width={size}
            height={size}
            alt="facebook"
          />
        </div>
      </a>
      {/*
      <a href="https://twitter.com/iggytheelder" target="blank_" className = {styles.spaceRight}>
        <div className = {`${styles.social} ${styles.twitter}`} style={{height: size + "px", width: size + "px"}}>
          <Image
            className = {styles.socialLink}
            src="/social/twitter-128.png"
            width={size}
            height={size}
            alt="twitter"
          />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/caleb-ignace/" target="blank_" className = {styles.spaceRight}>
        <div className = {`${styles.social} ${styles.linkedin}`} style={{height: size + "px", width: size + "px"}}>
          <Image
            className = {styles.socialLink}
            src="/social/linkedin-128.png"
            width={size}
            height={size}
            alt="linkedin"
          />
        </div>
      </a>
      <a href="https://www.instagram.com/iggytheelder/" target="blank_">
      <div className = {styles.social}>
        <Image
          className = {styles.socialLink}
          src="/social/instagram-128.png"
          width={size}
          height={size}
          alt="instagram"
        />
        </div>
      </a>
      */}
    </>
  );
}
