import styles from './DisplayTutors.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@components/Layout'

import React from "react";
import { InlineWidget } from "react-calendly";

export default function DisplayTutors({ localTutorData }) {
  return (
    <ul style={{padding: "0"}}>
      {localTutorData.map(({ id, name, imageName, experience, education, email, phone, schedule, website, message }) => (
        <li key={id} className = {styles.tutor}>
          <div className = {styles.profile}>
            <Image
              src={"/tutors/" + imageName}
              width = {125}
              height = {125}
              alt="logo"
              style={{borderRadius: '100px'}}
            />
          </div>
          <h3 className = "center">{name}</h3>
          {/*
            <h3>{name}{(id == 1 ? ", Founder of The Math Guru" : "")}</h3>
          */}
          {/*
          <a href={schedule} className = {styles.contacting}><button className = {styles.bookBtn}>Schedule Now (Pay Later)</button></a>
          */}
          <div>
            <InlineWidget url="https://calendly.com/calebignace/60min" />
          </div>
          <h4>Intro</h4>
          <p>
            <small>{message}</small>
          </p>
          <h4>Experience</h4>
          <ul>
            {experience.map((e, i) => (
              <li style={{marginBottom: "10px"}} key = {String(id) + "exp" + String(i)}>
                <small>{e}</small>
              </li>
            ))}
          </ul>
          <h4>Education</h4>
          <ul>
            {education.map((e, i) => (
              <li style={{marginBottom: "10px"}} key = {String(id) + "exp" + String(i)}>
                <small>{e}</small>
              </li>
            ))}
          </ul>
          <h4>Contact</h4>
          <p>
            <small>
              Phone: {phone}
              {/* {' '}
              <a href={"tel:" + phone} className = {styles.contacting}>
                <button>
                  Call
                </button>
              </a><br/>
              Email: {email}{' '}<a href={"mailto: " + email} className = {styles.contacting}><button>Email</button></a><br/>
              Website: <a href={website} className = {styles.contacting}>calebignace.com</a><br/>
              */}
            </small>
          </p>
        </li>
       ))}
     </ul>
  )
}
