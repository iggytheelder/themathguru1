import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import Layout from '@components/Layout';
import Date from '@components/date';
import ShareBtn from '@components/ShareBtn';

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content={postData.description}/>
      </Head>
      <article>
        <h1 style={{textAlign: "center"}}>
          {postData.title}
          {postData.subtitle ? <span style={{color: "rgb(10,10,10,.6)"}}>{" " + postData.subtitle}</span> : ""}
        </h1>
        <p style={{textAlign: "center"}}>
        {
          /*
          postData.imageFileName ? <Image src = {"/blog/" + postData.imageFileName} layout="responsive" width={postData.imageWidth} height={postData.imageHeight} alt={postData.imageFileName}/>: ""
          */
        }
        {/*
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          */}
        {postData.author}{' '}&#x2022;{' '}<Date dateString={postData.date} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      {/*
      <div>
        <p>
        Follow me on Twitter <a href="https://twitter.com/iggytheelder" target="_blank">@iggytheelder</a>
        {' '} to stay up to date with what I'm doing.
        </p>
      </div>
      */}
        <p>
          Thank you for reading. Go to <Link href="/seek"><a>Seek</a></Link> if you need a Math Guru.
        </p>
        <p style={{textAlign:"center"}}>
          <Link href="/blog">
            <a>← Back to Blog</a>
          </Link>
        </p>
        <p>
          If you enjoyed this article, please consider sharing.
          With your help, we can help children everywhere find thier love for math.
        </p>
        <p style={{textAlign:"center"}}>
          <ShareBtn social = "facebook" postID = {postData.id}></ShareBtn>
          <ShareBtn social = "twitter" postID = {postData.id}></ShareBtn>
          <ShareBtn social = "linkedin" postID = {postData.id}></ShareBtn>
        </p>
    </Layout>
  );
}
