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
          {/* This part of rending will be updated to a componenet and rendered based on back end Data for sure in the future. */}
          <h2>Hi, My name is Peng , a full stack web developer, an Army combat vateran, a husband and <span>wife</span> father. My superpowers are learning new things and fixing technical and business problems.</h2>

          <p>     My story starts in 2009 when I immigrated to America from China to learn how America works ( U.S is a greatest country and very different from China).</p>

          <p>     At that time, I had just finished my Bachelors in Business Administration and Agronomy . Because I wanted to know more about America, I chose to pursue a Masters degree of Public Administration. </p>

          <Image src='/assets/img/graduation.jpeg' alt = 'graduation' thumbnail></Image>

          <p>     After I finished my schooling, well, it was not easy to land a job in the government where I can use what I have learned. Finally, I found a job as a Loan Processor. A year later I was promoted into a customer-facing position as a Home Mortgage Consultant. I excelled at understanding customers’ needs and their qualifications, matching them to lenders’ requirements, and ensuring their loan applications can get a fast and smooth process.</p>

          <p>     4 years later, I decided to serve the country I now called “home”, and, as a side bonus, Army offered me a really cool job, learning to maintain the Apache Attack Helicopters ( I love to disassemble and reassemble things since I was a child). It was a lot of fun to work on that powerful flying beast, and I really enjoyed my time there. During the work, I wanted to know more about Apaches, I want to be a professional ASAP. So what I did was basically 3 things: </p>

          <ol>
            <li>1. Learn something new everyday. I kept it as a habit in my entire career.</li>
            <li>2. Practice, practice, and practice. This is the only way to mastering it.</li>
            <li>3. Share Knowledge, help who struggles, and mentor new soldiers.</li>
          </ol>     
          
          <Image src='/assets/img/apache.jpeg' alt = 'apache' thumbnail></Image>

          <p>     There’s no room for error in this line of job. If a helicopter falls off the sky due to bad maintenance, people die. By following my 3 principles it only took me a short period of time to become a professional and earned my promotion, then led a team that maintained the helicopters responsible for the liberation of Mosul city in 2017. We worked so hard, 12 hour days, 13 days in a row with no break, to make sure our infantry battle bodies at the front line always have air support when they need it. My team's responsibilities include completely disassembling, inspecting, repairing, and reassembling Apache aircraft for heavy phase maintenances.</p>

          <p>     But I.T. was always my passion. Since I have taken some I.T. classes back in college, I always try my best to help fellow soldiers with all kinds of computer-related problems, and because of that, when I returned from Iraq, I was offered an opportunity to work as a system admin to maintain daily operations for the Apache logbook & logistics software system. During this time, I taught myself about computer programing, networking, window server operations, and I made a small program that pulls data from our system’s MySQL database and generates a report automatically. That report is required by Apache commanders to proactively track daily maintenance, and my small script saved technicians hours and hours comparing to manually check the data and write the report every day.</p>

          <Image src='/assets/img/love_coding.jpg' alt = 'I love coding' ></Image>

          <p>     After leaving the Army, I decided to pursue my passion for IT. I started with the Microsoft system and software academy (MSSA) program, finished windows Server and Azure Cloud Administration training. During my time with MSSA, I realized that programming is more fun than all the others. I wrote tons of scripts using PowerShell to automate the deployment of different kinds of resources to the Azure cloud. At the end of that training program, I asked myself, why not taking coding seriously as a career, instead of keep on my original I.T specialist path?</p>

          <p>     Oh, by the way, I also earned my CCNA Routing and Switching certification during that time. As a web developer, you have to know how the internet works.</p>

          <p>     Then I enrolled in a full-stack web development training Bootcamp, dreaming to become a software engineer. Smart move, right? Hop on a fast track to switch careers, and boom, you’ll be a software engineer in a few months and solve the world's big computer problems. Well... At least that's what I thought in the first place. However, It doesn’t work like that. </p>

          <Image src='/assets/img/jacky.jpg' alt = 'jacky' thumbnail></Image>

          <p>     Today  I still remember all those frustrations and craziness that I had to face every day when I started a year ago, trying to master everything skills required in the full-stack web development world. There was so much to learn in such a short period of time, and I have to get the project done each day with new knowledge that I never know before. </p>

          <p>     There is no way to become a software engineer in a few months. No way. They have a four-year degree for it. After that, there are master’s, doctor’s degrees. </p>

          <p>     But, that doesn’t mean I can not work in the computer programming industry. I consider myself as a very well-qualified software developer, capable of learning new skills, solve problems quickly, and perform my daily assigned tasks efficiently.</p>

          <p>     Let’s take the Apache helicopter sample, for instance: </p>

          <p>     If you’re looking for someone doing an engineering job, like your client wants to build a new helicopter better than the Apache, starts from the sketch, then I can’t help on that part. I don't know anything about aerodynamics nor material engineering, powertrain system design, you name it, those big sciences. You need a real engineer to lead this project, who knows most of those sciences in detail. </p>

          <p>     However, that does NOT disqualify me from working on a helicopter. Army trusted me on that and I proved myself I can do it right. If you already have a real helicopter, or a good design, and need people to put the designer and engineer’s idea into a real flying monster, handle the maintenance of the aircraft, repair it, trouble shoot, adding new components, I am the guy who can help. </p>

          <p>     Applying that idea to the software development world, I can help to maintain applications, debugging, adding new features, test the system, with guidance from real software engineers, I can help to build up real applications. </p>

          <p>     Well, if your client does not need a brand new helicopter better than Apache, then, </p>

          <p>     I CAN HELP and I won’t let you down.</p>

        </article>
      </main>
    </div>
  )
}
