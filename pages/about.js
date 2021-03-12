import Head from 'next/head'
import styles from '../styles/about.module.css'
import Header from '../components/header.js'
import airplan from '../styles/airplan.module.css'
import Image from 'react-bootstrap/Image'


export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Things about Peng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      
      <main className={styles.main}>

        <div className={airplan.sky}>
          <div className={airplan.clouds}></div>

          <div className={airplan.airplane}>
            <img src="/assets/img/airplane.png" />
            <div className={airplan.flame_down}></div>
            <div className={`${airplan.flame_up} ${airplan.flame_down}`}></div>
          </div>
          <div className={airplan.mountains}></div>
        </div>

        <article className={styles.bio}>

          <h2>Hi, My name is Peng , a full stack web developer, an Army combat vateran, a husband and father. My superpowers are learning new things and fixing technical and business problems.</h2>
          <p>     My story starts in 2009 when I immigrated to America from China to learn how America works ( U.S is a greatest country and very different from China).</p>
          <p>     At that time, I had just finished my Bachelors in Business Administration and Agronomy . Because I wanted to know more about America, I chose to pursue a Masters degree of Public Administration. </p>
          <Image src='/assets/img/graduation.jpeg' alt = 'graduation' thumbnail></Image>
          <p>     After I finished my schooling, well, it was not easy to land a job in the government where I can use what I have learned. Finally I was offered a position as a Loan Processor. A year later I was promoted into a customer-facing position as a Home Mortgage Consultant. I excelled at understanding customers’ needs and their qualifications, matching them to lenders’ requirements, and ensuring their loan applications can get a fast and smooth process.</p>

          <p>     4 years later, I decided to serve the country I now called “home”, and, as a side bonus, I was offered a really cool job, learning to maintain the Apache Attack Helicopters. It was a lot of fun to work on that powerful flying beast. I never get to know something that could fly in my life before. I want to be a pro, ASAP. So I always push myself to learn new knowledge everyday, mastering it, then share it with my fellow battle buddies and mentor new soldiers. There’s no room for error in that line of job, if a helicopter falls off sky due to bad maintenance, people die. That’s how I earned my promotion and led a team that maintained the helicopters responsible for the liberation of Mosul city in 2017. We worked so hard, 12 hour days, 13 days in a row with no break, to make sure our infantry battle bodies at the front line always have air support when they need. My team's responsibilities includes completely disassembling, inspecting, and reassembling Apache aircraft for phase maintenances.</p>
          <Image src='/assets/img/apache.jpeg' alt = 'apache' thumbnail></Image>
          <p>     But IT was always my passion. I always try my best to help the my fellow soldiers to trouble shoot all kinds of computer related problems and because of that, when I returned from Iraq, I was offered an opportunity to work as a system admin to maintain daily operations for the Apache logbook & logistics software system. During this time, I taught myself about computer programing, to pull data from SQL and automated reporting that enabled Apache commanders to proactively track maintenance – saving technicians hours and hours comparing to manually pulling the data every day. </p>
          <p>     After leaving the Army, I decided to pursue my passion for IT. I started with the Microsoft system and software academy (MSSA) program, finished windows Server and Azure Cloud Administration trainings. During my time with MSSA, I’ve really enjoyed learning about scripting with PowerShell and using PowerShell to automate the deployment of different kinds of resources to Azure. Then I asked myself, why not to work as a software developer, instead of system admin? </p>

          <p>     Oh by the way, I also earned my CCNA Routing and Switching certification during that time. As a web developer, you have to know how internet works. Right? </p>

          <p>     Then I enrolled in a full stack web development training bootcamp, dreaming to become a software engineer. Smart move, right? Hop on a fast track to switch careers, and boom, you’ll be a software engineer in a few months and solve the world's big computer problems. Well... At least that's what I thought at first place. However, It doesn’t work like that. </p>

          <Image src='/assets/img/jacky.jpg' alt = 'jacky' thumbnail></Image>
          <p>     Today  I still remember all those frustrations and craziness that I had to face every day when I started a year ago, trying to learn about full stack web development. There was so much to learn in a very short period of time, and you have to get the project done each day with new knowledge that you never know before. </p>

          <p>     It's getting late tonight, I'll catch up tomorrow.</p>

          <p>     In my downtime, I enjoy learning to be handy with YouTube. Over the years, YouTube has taught me how to remodel my kitchen, bathroom, floors, build a backyard deck, build a pond, fix my dad’s cars, fix laptops, edit movies, and paint plants vs zombies on the wall to make my kid happy. </p>

        </article>

      </main>
      
      
    </div>
  )
}
