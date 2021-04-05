import Head from 'next/head'
import styles from '../styles/blog.module.css'
import Header from '../components/header.js'
import axios from 'axios'
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

        {props.records.map(project => (
          <ProjectCard project={project} key={project._id}></ProjectCard>
        ))}

      </main>

      
    </div>
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
