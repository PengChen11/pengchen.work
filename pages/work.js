import Head from 'next/head'
// import styles from '../styles/blog.module.css'
import styles from '../styles/Working.module.css'
import Header from '../components/header.js'
import axios from 'axios'
import Link from 'next/link'
import ProjectCard from '../components/projectCard.js'

export default function Work(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peng's work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Sorry, this work page is still under development.
        </h1>

        <div className={styles.grid}>
          <a href="https://github.com/PengChen11/pengchen.work" className={styles.card} target="_blank">
            <h3>Front end GitHub repo &rarr;</h3>
            <p>The front end is still under development with NextJS, a great React framework designed for SSR.</p>
          </a>

          <a href="https://github.com/PengChen11/Microservices-API_Gateway" className={styles.card} target="_blank">
            <h3>Backend GitHub Repo &rarr;</h3>
            <p>The Back end is supported by a series of microservices built with Node.js </p>
          </a>

        </div>
        <Link href='/'>
          <a className={styles.link_back}>Go back and try some other routes ? </a>
        </Link>
      </main>

      
    </div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Peng's work</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <Header/>

    //   <main className={styles.main}>

    //     {props.records.map(project => (
    //       <ProjectCard project={project} key={project._id}></ProjectCard>
    //     ))}

    //   </main>

      
    // </div>
  )
}

export async function getStaticProps(){

  const reqConfig = {
    method: 'get',
    url: `http://localhost:3000/api/projects`
  };

  const {data} = await axios(reqConfig);

  return {
    props:data
  }
}
