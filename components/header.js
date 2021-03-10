'use strict'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import styles from './header.module.css'
import Image from 'react-bootstrap/Image'
import Link from 'next/link'

export default function (){

  return (
    <Navbar fixed="top" variant='dark' expand = 'sm' className={`${styles.navbar} pt-3 pb-3`}>
      <Link href="/">
        <Navbar.Brand className = {styles.navbar_img}>
          <Image
            src='/img/navbar.jpeg'
            alt = 'Peng Chen'
            thumbnail
          />
          </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end align-self-end ${styles.nav_links_all}`}>
        <Nav >
          <Nav.Item>
            <Link href="/">
              <a><Button variant="outline-light" className={styles.navbar_btn}>HOME</Button></a>
            </Link>
          </Nav.Item>
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