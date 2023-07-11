import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import ShareBtn from '@components/ShareBtn'
import Image from 'next/image'

export default function Lesson({ course, lesson, title, author, date, imageName, description, children }) {
  return (
    <Layout>
      <Head>
        <title>{course} | Lesson {lesson}: {title}</title>
        <meta name="author" content={author}/>
        <meta name="description" content={description}/>
        <meta name="keywords" content="algebra, solve for x, solve for variable, solving for x, solving for variable"/>
      </Head>
      {/*
      <div style = {{marginTop: "40px", textAlign: "center"}}>
      <Image
        src = "/blog/pexels-kristina-paukshtite-1591153.jpg"
        width = {518.4}
        height = {345.6}
        alt="Photo by Kristina Paukshtite: https://www.pexels.com/photo/person-holding-white-daisy-flower-and-brown-accessories-1591153/"
      />
      </div>
      */}
      {/*
      <h1 className = "title"><Link href={"/courses/"+course.toLowerCase()+"/"}><a>{course}</a></Link> Lesson {lesson}: {title}</h1>
      */}
      <div style={{justifyContent: "center",display: "flex", width: '100%', height: '200px', position: 'relative', marginBottom: "-20px"}}>
        <Image
          src={"/courses/" + imageName}
          layout='fill'
          objectFit='contain'
          alt="acorns"
        />
      </div>
      <h1 className = "title">{course} | Lesson {lesson}</h1>
      <h2 className = "subtitle" style={{textAlign: "center"}}>{title}</h2>
      <div style={{textAlign:"center"}}>
        <Link href="/seek"><a>{author}</a></Link> &#x2022; {date}
      </div>
      {children}
      <p style={{textAlign: "center"}}>
        <span className="dot"></span>{' '}
        <span className="dot"></span>{' '}
        <span className="dot"></span>
      </p>
      {/*
      <p style={{textAlign: "left"}}>
        <Link href="/seek"><a>Caleb Ignace</a></Link> is available for math tutoring.
      </p>
      */}
      <p>
        If you enjoyed this lesson, please consider sharing.
        With your help, we can help children everywhere overcome their anxiety and find thier love for math.
      </p>
      <p style={{textAlign: "center"}}>
        <ShareBtn social = "facebook"></ShareBtn>
        <ShareBtn social = "twitter"></ShareBtn>
        <ShareBtn social = "linkedin"></ShareBtn>
      </p>
    </Layout>
  )
}
