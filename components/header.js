'use strict'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './header.module.css'
import Link from 'next/link'
import ReactTypingEffect from 'react-typing-effect';

export default function Header (){

  return (
    <Navbar fixed="top" variant='dark' expand = 'md' className={`${styles.navbar} pt-3 pb-3`}>

      <Navbar.Brand className = {styles.navbar_brand}>
          <Link href="/">
            <a className={`btn btn-outline-light ${styles.navbar_link}`}>
              <ReactTypingEffect 
                text={['Hi, I am Peng.', 'Let\'s make something great!']}
                typingDelay = {0}
                eraseDelay = {1500}
              />
            </a>
          </Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end align-self-end ${styles.nav_links_all}`}>
        <Nav >
          <Link href="/about">
            <a className={`btn btn-outline-success ${styles.navbar_link}`}>STORY</a>
          </Link>
          <Link href="/work">
            <a className={`btn btn-outline-info ${styles.navbar_link}`}>WORK</a>
          </Link>
          <Link href="/blog">
            <a className={`btn btn-outline-warning ${styles.navbar_link}`}>BLOG</a>
          </Link>
          <Link href="/contact">
            <a className={`btn btn-outline-danger ${styles.navbar_link}`}>CONTACT</a>
          </Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}