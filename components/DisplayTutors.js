import styles from './DisplayTutors.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@components/Layout'

import React from "react";
import { InlineWidget } from "react-calendly";

export default function DisplayTutors({ localTutorData }) {
  return (
    <ul style={{padding: "0"}}>
      {localTutorData.map(({ id, name, imageName, experience, education, email, phone, website, message, schedule, slogan, courses }) => (
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
          <p className = "center" style={{marginTop: "20px"}}>
            <small><i>{slogan}</i></small>
          </p>
          <p className = "center" style={{marginTop: "20px"}}>
            <a href = {"#schedule-with-" + id + name}>
              <button className = {styles.scheduleBtn}>
                Schedule Now
              </button>
            </a>
          </p>
          <h4>Introduction</h4>
          <p>
            <small>{message}</small>
          </p>
          <h4>Expertise</h4>
          <ul style={{padding:0}}>
            {courses.map((e, i) => (
              <li style={{marginBottom: "10px", display:"inline-block"}} key = {String(id) + "exp" + String(i)}>
                <small>
                  { i < courses.length - 1 ? <span style={{marginRight: "5px"}}>{e + ";"}</span>: e}
                </small>
              </li>
            ))}
        </ul>
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
          <div className = "left">
            <p>
              <small>
                Phone: {phone}
                {/*
                <a href={"tel:" + phone} className = {styles.contacting}><button>{phone}</button></a>{' '}
                <a href={"mailto: " + email} className = {styles.contacting}><button>{email}</button></a>{' '}
                <a href={website} className = {styles.contacting}><button>calebignace.com</button></a>
                */}
              </small>
            </p>
          </div>
          <h4 id = {"schedule-with-" + id + name}>Availability</h4>
          <p>
            <small>
              Schedule now, pay after your session. I trust my clients to pay after I solve all their problems!
            </small>
          </p>
          <InlineWidget
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: true,
              hideLandingPageDetails: false,
              primaryColor: '00a2ff',
              textColor: '4d5055'
            }}
            styles={{
              minWidth: '320px', height: '900px'

            }}
            url={schedule}
          />
        </li>
       ))}
     </ul>
  )
}
