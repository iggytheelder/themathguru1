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
        <meta name="description" content={postData.except}/>
      </Head>
      <article>
        <h1 style={{textAlign: "center", marginBottom: "0"}}>
          {postData.title}<br/>
          {postData.subtitle ? <span className="subtitle">{" " + postData.subtitle}</span> : ""}
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
        <div>
        <p style={{textAlign: "center"}}>
          <span class="dot"></span>{' '}
          <span class="dot"></span>{' '}
          <span class="dot"></span>
        </p>
        {/*
        <p style={{textAlign: "center"}}>
          <Link href="/blog">
            <a>← Back to Blog</a>
          </Link>
        </p>
        */}
        <p>
          If you enjoyed this article, please consider sharing.
          With your help, we can help children everywhere overcome their anxiety and find thier love for math.
        </p>
        <p style={{textAlign: "center"}}>
          <ShareBtn social = "facebook" postID = {postData.id}></ShareBtn>
          <ShareBtn social = "twitter" postID = {postData.id}></ShareBtn>
          <ShareBtn social = "linkedin" postID = {postData.id}></ShareBtn>
        </p>
        </div>
    </Layout>
  );
}
