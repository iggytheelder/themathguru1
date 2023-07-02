import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout, { siteTitle } from '@components/Layout'
import ShareBtn from '@components/ShareBtn'

export default function SolvingForX() {
  return (
    <Layout>
      <p style={{textAlign: "center"}}>
        <Link href="/lessons/algebra">
          <a>← Back to Algebra Lessons</a>
        </Link><br/>
      </p>
      <h1 className = "title">Algebra | Lesson 1: Solving for x</h1>
      <div style={{textAlign:"center"}}>
        <Link href="/seek"><a>Caleb Ignace</a></Link> &#x2022; June 2, 2023
      </div>
      <p>
        Most students learn a series of steps for solving for x.
        Have you heard the phrase "oposite operation?"
        The steps are heuristics and they are taught in such a way that you can only solve equations that are exactly like the ones you've seen solved before.
        {' '}<i>Solving for x</i> should be taught as a skill of knowing when to use a math truth.
        It's problem solving (no pun intended). But, first, what is "x" anyway?
      </p>
      <p>
        You know what a number like 5 is.
        One way to understand a number is through counting.
        Suppose you have acorns on the open palm of your hand.
        You cound them and find that you have 5 acorns in your hand.
        Now imagine that your hand is closed. How many acorns do you have?
        Well you're not sure.
        You can't see them to count them (nor can you tell from touch).
        It's an <i>unknown</i> number. We call this a variable.
      </p>
      <p>
        When we <i>knew</i> the number of acorns in our hand, we counted 5.
        When we <i>don't know</i> the number of acorns in our hand, we say the number is x.
        It is useful to refer to the unknown count of acorns in our hand as a symbol, such as x (but you could use any symbol).
        If we didn't use a symbol, we would have to spell out "the unknown number of acorns in my closed hand" every time we wanted to refer to that number.
        That's very inefficient and mathematicians are lazy, so that just won't do.
      </p>
      <p>
        Suppose you opened you hand, counted the number of acorns in your hand, which you find to be 5, then close your hand again.
        You could write down the following equation to describe this situation:
      </p>
      <p className = "center">
        x = 5
      </p>
      <p>
        If we know that x = 5, is x known or unknown? Answer: it is known, x is 5.
        This would be the conclusion that we would reach if we opened our hand and counted the acorns in our hand.
        The count was unknown when our hand was closed, and now it is known after we open our hand.
      </p>
      <p>
        The equation x = 5 is as simple as we can get an equation with x in it.
        We can make it very complicated if we want. Let's do that.
        Suppose you doubled the number of accords in your hand. The equation becomes
      </p>
      <p className = "center">
        2x = 10
      </p>
      <p>
        We know we can write that equation because the number of acorns in our hand is both x and 5.
        Double x is 2 times x, or 2x.
        Double 5 is 10.
      </p>
      <p>
        Now suppose that you give an acorn away to a friend. We could write the equation now as
      </p>
      <p className = "center">
        2x - 1 = 9,
      </p>
      <p>
        where we have subtracted one away from 2x and 10, the number of acorns in our hand after doubling it.
        We subtracted because we gave an acorn away, we have one accorn less.
      </p>
      <p>
        Notice how complicated our equation is now, 2x - 1 = 9. It is not obvious what x is now.
        Although you could show that x is still 5 by substitute 5 for x:
      </p>
      <p className = "center">
        2(5) - 1 = 9,
      </p>
      <p>
        and you would find that 2(5) - 1 = 10 - 1 = 9. So yes, x = 5 is still true.
        But just as we made x = 5 look like 2x - 1 = 9, we can make 2x - 1 = 9 look like x = 1.
        We just do the opposite of each step. We can undo our complicated mess. Let's do that.
      </p>
      <p>
        The last thing we did was take an accorn away, so let's add an acorn and we get
      </p>
      <p className = "center">
        2x = 10
      </p>
      <p>
        Before we doubled the acorns in our hands, so let's cut the acorns in half (divide by two), and we get
      </p>
      <p className = "center">
        x = 5
      </p>
      <p>
        There! Back to the simple. You've just solved for x, you did it!
      </p>
      <p style={{textAlign: "center"}}>
        <span className="dot"></span>{' '}
        <span className="dot"></span>{' '}
        <span className="dot"></span>
      </p>
      <p style={{textAlign: "left"}}>
        <Link href="/seek"><a>Caleb Ignace</a></Link> is available for math tutoring.
      </p>
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
