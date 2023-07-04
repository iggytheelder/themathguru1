import Link from 'next/link'
import Image from 'next/image'
import Layout from '@components/Layout'
import SeekForm from '@components/SeekForm'
import DisplayTutors from '@components/DisplayTutors'


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
        <p style = {{transform: "translate(0,-10px)"}}>
          1 of 1
        </p>
      </div>
      <DisplayTutors localTutorData = {localTutorData}></DisplayTutors>
      <h3 className = "center" style={{marginTop: "500px"}}>
        We are adding gurus every day.
      </h3>
      <p className = "center">
        Do you want to <Link href="/become"><a>become</a></Link> a Math Guru?
      </p>
    </Layout>
  )
}
