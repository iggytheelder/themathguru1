import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import JoinForm from '@components/JoinForm';

export default function Become() {
  return (
    <Head>
      <meta name="description" content="Become a Math Guru, a math tutor that has the capacity to unlock the mathematical mind."/>
    </Head>
    <Layout>
      <h1 className = "title">Become a Math Guru</h1>
      <p>
        TLDR; <a href="#apply">Apply</a> to get paid to talk about math. It's the easiest gig in the world if you're already good at math.
      </p>
      <h3>
        Does this describe you?
      </h3>
      <p>
        You enjoy math. You might have even majored in math or a degree that required a lot of math. You probably miss those days in college where you had to actually think critically. At work you do very little critical thinking; the analytical side of your brain is hungry for those college days.
      </p>
      <h3>
        The problem&mdash;do you care about it?
      </h3>
      <p>
        In the United States,
        {' '}<a href="https://nces.ed.gov/fastfacts/display.asp?id=372#:~:text=In%20fall%202021%2C%20about%2049.5,estimates%20are%20subject%20to%20change." target="_blank">49.5 million students</a>
        {' '}are learning some sort of math for the first time from 3 million teachers. On average, that's 16.5 students for every one teacher. Speaking from personal experience teaching at an inner-city, Title I school, the student-teacher ratio can get far worse. Think 25-35 students in a classroom.
      </p>
      <p>
        A lot of teachers don't know how to teach 16+ students at a time. It becomes nearly impossible as you get past 20 students in a classroom. Every student has a different set of needs. Some need a lot of one-on-one attention. At times for the whole class period, every day.
      </p>
      <p>
        On top of having to do extra grading for every additional student, you also have to manage an exponentially growing number of social interactions between students. When class sizes get big, students that were behind end up falling further behind, no fault to the teacher.
      </p>
      <p>
        You would think self-paced software would solve the trick. Each student can progress through the lesson at their own pace. But some students have so much math anxiety that they can't get themselves to do it. It ends up not working.
      </p>
      <p>
        Turns out the Covid-19 Pandemic didn't help. The Institute of Education Sciences
        {' '}<a href="https://ies.ed.gov/schoolsurvey/spp/" target="_blank">found</a>{' '}
        that Covid-19 increased the rate of students behind grade level by 39%. It created gaps within the gaps.
      </p>
      <p>
        Basically, what I'm trying to say is that there are probably students near you that could use your help. If you miss solving unique problems, each child is a different kind of puzzle that you can help to figure out. It does a lot of good for that kid, their family, your local community, city, state, country, and the world.
      </p>
      <p>
        It all propogates up. Do you know about the <a href="https://en.wikipedia.org/wiki/Butterfly_effect" target="_blank">butterfly effect</a>?
        It can be summarized by this quote:
      </p>
      <blockquote>
        <p>
        <span className = "hellip">...</span>whatever we do affects everything and everyone else,
        if even in the tiniest way. Why, when a housefly flaps his
        wings, a breeze goes round the world.
        </p>
        <div>
          <cite>Norton Juster, <i>The Phantom Tollbooth</i></cite>
        </div>
      </blockquote>
      <p>
        You should join us. Not because we’ve got it all figured out (definition of a startup), but because we’ve got big wings.
      </p>
      <h3>
        The vision&mdash;does it vibe with you?
      </h3>
      <p>
        You, the Math Guru, show up to your favorite spot (coffee shop, library, etc.) each week, and students show up to get tutoring. You smile, laugh, shake hands with their parents, and work on figuring out how to <Link href="/posts/unlocking-the-mathematical-mind"><a target = "_blank">make math make sense</a></Link> to those kids.
      </p>
      <p>
        That's it. We handle all the rest. You are going to visit your favorite spot anyway. Why not get paid to be there? Together we will solve a global problem with local interactions. ✌️
      </p>
      <h3 id = "apply">
        Apply now to join us!
      </h3>
      <p>
        Leave us your info below and we will get in touch with you. Cover letter and resume are optional right now. We want to talk with anyone that is interested in joining! If you have those items, then great, we definitely prefer them.
      </p>
      <JoinForm></JoinForm>
    </Layout>
  )
}
