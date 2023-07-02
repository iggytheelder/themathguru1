import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import Layout, { siteTitle } from '@components/Layout'
import SeekForm from '@components/SeekForm'
import MessageBtn from '@components/MessageBtn'

import { getLocalTutorData } from '../lib/localdata';

export async function getStaticProps() {
  const localTutorData = await getLocalTutorData();

  return {
    props: { localTutorData }
  }
}

export default function Seek({ localTutorData }) {
  return (
    <Layout>
      <h1 className = "title">Seek a Math Guru</h1>
      <div style={{textAlign: "center"}}>
        <p>
          Find a Math Guru that will <Link href="/posts/unlocking-the-mathematical-mind"><a>unlock your mathematical mind</a></Link>.
        </p>
        {/*
        <p>
          <input type = "text" placeholder = "City" autocomplete="off" spellcheck = "off"></input>
          {' '}
          <input type = "text" placeholder = "State" autocomplete="off" spellcheck = "off"></input>
        </p>
        */}
        <h2>Available Tutors</h2>
      </div>
      <section>
         <ul style={{padding: "0"}}>
           {localTutorData.map(({ id, name, imageName, experience, education, email, phone, message }) => (
             <li key={id} className = "tutor">
               <div style={{borderRadius: '100px', border:"solid 3px black", width: "150px", height: "150px", margin: "auto"}}>
                 <Image
                   src={"/tutors/" + imageName}
                   width = {150}
                   height = {150}
                   alt="logo"
                   style={{borderRadius: '100px'}}
                 />
               </div>
               {/*
                 <h3>{name}{(id == 1 ? ", Founder of The Math Guru" : "")}</h3>
               */}
               <h3 style={{textAlign: "center"}}>{name}</h3>
                 <div style={{textAlign: "center"}}>
                  <small>
                  <a href={"tel:" + phone} className = "contacting"><button>{phone}</button></a>{' '}
                  <a href={"mailto: " + email} className = "contacting"><button>{email}</button></a>
                  </small>
                 </div>
                 {/*
               <div style={{textAlign: "center", marginBottom: "-10px"}}>
                <a href={"tel:" + phone}>
                  <Image
                    src="/social/call.png"
                    width={50}
                    height = {50}
                    alt="call"
                  />
                </a>
                  <a href={"sms:"+phone}>
                    <Image
                      src="/social/chat.png"
                      width={50}
                      height = {50}
                      alt="call"
                    />
                  </a>
                  <a href={"mailto: " + email} target="blank_">
                   <Image
                     src="/social/email.png"
                     width={50}
                     height = {50}
                     alt="email"
                   />
                 </a>
               </div>
               */}
               <p>
               </p>
               <p>
                <small>{message}</small>
               </p>
               <h4>Experience</h4>
               <ul><small>{experience.map((e, i) => <li style={{marginBottom: "10px"}} key = {String(id) + "exp" + String(i)}>{e}</li>)}</small></ul>
               <h4>Education</h4>
               <ul><small>{education.map((e, i) => <li style={{marginBottom: "10px"}} key = {String(id) + "exp" + String(i)}>{e}</li>)}</small></ul>
             </li>
           ))}
         </ul>
       </section>
    </Layout>
  )
}
