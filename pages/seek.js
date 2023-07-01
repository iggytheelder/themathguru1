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
          Find a Math Guru that will open your mathematical mind.
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
               <div style={{borderRadius: '100px', border:"solid 3px black", width: "200px", height: "200px", margin: "auto"}}>
                 <Image
                   src={"/tutors/" + imageName}
                   width = {200}
                   height = {200}
                   alt="logo"
                   style={{borderRadius: '100px'}}
                 />
               </div>
               {/*
                 <h3>{name}{(id == 1 ? ", Founder of The Math Guru" : "")}</h3>
               */}
               <h3 style={{textAlign: "center"}}>{name}</h3>
               <div style={{textAlign: "center"}}>
                <a href={"sms:"+phone}>
                  <Image
                    src="/social/chat.png"
                    width={40}
                    height = {40}
                    alt="call"
                  />
                </a>
                <a href={"tel:" + phone}>
                   <Image
                     src="/social/call.png"
                     width={40}
                     height = {40}
                     alt="call"
                   />
                 </a>{' '}
                 <div style={{display: "inline-block", transform: "translate(0,-12px)"}}>{phone}</div><br/>
                 <a href={"mailto: " + email} target="blank_">
                    <Image
                      src="/social/email.png"
                      width={40}
                      height = {40}
                      alt="email"
                    />
                  </a>{' '}
                  <div style={{display: "inline-block", transform: "translate(0,-12px)"}}>{email}</div>
               </div>
               <p>
               </p>
               <p>
                {message}
               </p>
               <h4>Education</h4>
               {experience.map((e, i) => <p key = {String(id) + "exp" + String(i)}>{e}</p>)}
               <h4>Experience</h4>
               {education.map((e, i) => <p key = {String(id) + "edu" + String(i)}>{e}</p>)}
             </li>
           ))}
         </ul>
       </section>
    </Layout>
  )
}
