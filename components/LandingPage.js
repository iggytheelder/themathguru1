import Image from 'next/image'
import styles from './LandingPage.module.css'
import StyleImage from '@components/StyleImage'
import Link from 'next/Link'

export default function LandingPage() {
  return (
    <>
      <div className = {`${styles.section} ${styles.row} ${styles.first}`}>
        <div className={`${styles.column} ${styles.left}`}>
          <StyleImage
            src = "/home/pexels-ketut-subiyanto-4474005.jpg"
            width = "600"
            height = "400"
            alt = "tutoring"
            boxShadowColor = "#FE9774">
          </StyleImage>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
          Math tutoring is ALWAY BETTER in-person.{' '}
          <span style = {{color: "#FE9774"}}>The Math Guru makes it easy.</span>
          <div className = {styles.seekBtnDiv}>
            <Link href="/seek">
              <button className = {styles.seekBtn}>
                Find a tutor
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*
      <div className = {styles.section}>
        <div>
          A math tutor is a <span style = {{color: "#C88BD1"}}>Math Guru</span> when they can <span style = {{color: "#C88BD1"}}>unlock the mathematical mind</span>.
          <Link href="/posts/unlocking-the-mathematical-mind">
            <button className = {styles.seekBtn} style= {{background: "#C88BD1"}}>
              Read how
            </button>
          </Link>
        </div>
      </div>
      */}

      <div className = {`${styles.section} ${styles.row} ${styles.first}`}>
        <div className={`${styles.column} ${styles.left}`}>
          A math tutor is a <span style = {{color: "#C88BD1"}}>Math Guru</span> when they can <span style = {{color: "#C88BD1"}}>unlock the mathematical mind</span>.
          <div className = {styles.seekBtnDiv}>
            <Link href="/posts/unlocking-the-mathematical-mind">
              <button className = {styles.seekBtn} style = {{background: "#C88BD1"}}>
                Read how
              </button>
            </Link>
          </div>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
          <StyleImage
            src = "/home/pexels-rdne-stock-project-8799258.jpg"
            width = "450"
            height = "300"
            alt = "tutoring"
            boxShadowColor = "#C88BD1">
          </StyleImage>
        </div>
      </div>

      <div className = {`${styles.section} ${styles.row} ${styles.first}`}>
        <div className={`${styles.column} ${styles.left}`}>
          Want to become a Math Guru?<br/>
          <Link href="/become">
            <button className = {styles.seekBtn} style = {{background: "#FFD3AE"}}>
              Apply here
            </button>
          </Link>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
          <span style={{color: "black"}}>Struggling with algebra?</span><br/>
          <Link href="/courses/algebra/solving-for-a-variable">
            <button className = {styles.seekBtn} style = {{background: "#FFB6AD"}}>
              Read this
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
