import styles from './Social.module.css'
import { siteTitle, siteUrl, siteDescription } from '@components/Layout'
import { useRouter } from 'next/router'

export default function ShareBtn({ social, postID}) {
  const router = useRouter(); // using this to get pathname

  let path = router.pathname;
  if (postID) {
    path = path.substring(0,path.length-4) + postID;
  }

  if (social == "facebook") {
    return (
      <button className = {`${styles.share} ${styles.facebook} ${styles.spaceRight}`}>
        <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www." + siteUrl + path} target="blank_">
          Share on Facebook
        </a>
      </button>
    );
  } else if (social == "twitter") {
    return (
      <button className = {`${styles.share} ${styles.twitter} ${styles.spaceRight}`}>
        <a href = {"http://twitter.com/share?text=" + siteDescription + "&url=https://www." + siteUrl + path} target="blank_">
          Share on Twitter
        </a>
      </button>
    );
  } else if (social == "linkedin") {
    return (
      <button className = {`${styles.share} ${styles.linkedin}`}>
        <a href = {"https://www.linkedin.com/sharing/share-offsite/?url=https://" + siteUrl + path} target="blank_">
          Share on LinkedIn
        </a>
      </button>
    );
  }
}
