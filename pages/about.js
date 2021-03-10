
import Head from 'next/head'
import styles from '../styles/Working.module.css'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Footer from '../components/footer.js'
import Header from '../components/header.js'


export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Things about Peng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sorry, this story page is still under development.
        </h1>

        <div className={styles.grid}>
          <a href="https://github.com/PengChen11/pengchen.work" className={styles.card}>
            <h3>Front end GitHub repo &rarr;</h3>
            <p>The front end is still under development with NextJS, a great React framework designed for SSR.</p>
          </a>

          <a href="https://github.com/PengChen11/Microservices-API_Gateway" className={styles.card}>
            <h3>Backend GitHub Repo &rarr;</h3>
            <p>The Back end is supported by a series of microservices built with Node.js </p>
          </a>

        </div>
        <Link href='/'>
          <a className={styles.link_back}>Go back and try some other routes ? </a>
        </Link>
      </main>
      
    </div>
  )
}
