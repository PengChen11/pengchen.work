'use strict'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import styles from './header.module.css'
import Link from 'next/link'
import ReactTypingEffect from 'react-typing-effect';

export default function (){

  return (
    <Navbar fixed="top" variant='dark' expand = 'md' className={`${styles.navbar} pt-3 pb-3`}>

      <Link href="/">
        <Navbar.Brand className = {styles.navbar_brand}>
          <Button variant="outline-light" className={styles.navbar_btn}>
            <ReactTypingEffect 
              text={['Hi, I am Peng.', 'Let\'s make something great!']}
              typingDelay = {0}
              eraseDelay = {1500}
            />
          </Button>
          
          </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end align-self-end ${styles.nav_links_all}`}>
        <Nav >
          <Link href="/about">
            <a><Button variant="outline-success" className={styles.navbar_btn}>STORY</Button></a>
          </Link>
          <Link href="/work">
            <a><Button variant="outline-info" className={styles.navbar_btn}>WORK</Button></a>
          </Link>
          <Link href="/blog">
            <a><Button variant="outline-warning" className={styles.navbar_btn}>BLOG</Button></a>
          </Link>
          <Link href="/contact">
            <a><Button variant="outline-danger" className={styles.navbar_btn}>CONTACT</Button></a>
          </Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}