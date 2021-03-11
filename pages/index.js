import Head from 'next/head'
import styles from '../styles/home.module.css'
import Link from 'next/link'
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {


  return (
    <>
      <Head>
        <title>Hi, I am Peng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.container}>
          <h1 className={styles.text_h1}>
            <section>
              <Link href='/about'>
                <a>
                  <div className={`${styles.text_color_white} ${styles.on_hover} ${styles.first_line}`}><span>Hi,</span></div>
                </a>
              </Link>
            </section>
            <section>
              <Link href='/work'>
                <a>
                  <div className={`${styles.text_color_red} ${styles.on_hover} ${styles.second_line}`}><span>I am</span></div>
                </a>
              </Link>
            </section>
            <section>
              <Link href='/contact'>
                <a>
                  <div className={`${styles.text_color_red} ${styles.on_hover} ${styles.third_line}`}><span>Peng,</span></div>
                </a>
              </Link>
            </section>
          </h1>
          
          <h2 className={styles.text_h2}>
            <Link href="/blog">
              <a>
                <div className={`${styles.text_color_white} ${styles.on_hover} ${styles.fourth_line}`}>
                  <span>
                    <ReactTypingEffect 
                      text={["a web developer.", "an Army Veteran.", 'a husband and father.']}
                      typingDelay = {0}
                      eraseDelay = {1500}
                    />
                  </span>
                </div>
              </a>
            </Link>


          </h2>
          <div className={styles.click_indication}>Click anything</div>
        </div>
        <video className={styles.video} autoPlay loop >
          <source src='/assets/code_background.mp4' type='video/mp4' />
        </video>

        <div className={styles.background}></div>
        
      </main>
    </>
  )
}
