
import Head from 'next/head'
import styles from '../styles/Working.module.css'
import Link from 'next/link'
import Header from '../components/header.js'
import Container from 'react-bootstrap/Container'


export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Things about Peng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      
      <main className={styles.main}>
        <Container>
        

        </Container>
      </main>
      
      
    </div>
  )
}
