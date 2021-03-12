import Head from 'next/head'
import styles from '../styles/contact.module.css'
import Header from '../components/header.js'
import Button from 'react-bootstrap/Button'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Peng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1>Contact</h1>
        <p>
        I'm seeking out opportunities to work for companies and / or agencies to solve real business problems.  I want to bring my skills and experiences to the future employer and work together to finish all the challenges. 
        </p>
        <p>
        Feel free to reach out through any platforms below:
        </p>


        <a href="mailto:hi@pengchen.work" className = 'btn btn-outline-light'>
          hi@pengchen.work
        </a>

        <a href='https://linkedin.com/in/pengchen11' className = 'btn btn-outline-light'>
          <img src='/assets/img/linkedin.png' alt='linkedin icon'/>
          Linked In
        </a>

        <a href='https://github.com/pengchen11' className = 'btn btn-outline-light'>
          <img src='/assets/img/github.png' alt='github icon'/>
          GitHub
        </a>
      </main>

      
    </div>
  )
}
