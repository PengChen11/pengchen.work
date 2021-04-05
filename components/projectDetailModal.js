'use strict'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import styles from './projectDetailModal.module.css'

export default function ProjectDetailModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="xl"
      aria-labelledby="show-project-detail"
      centered
    >
      <Modal.Header
        closeButton
        className = 'bg-primary'
      >
        <Modal.Title id="show-project-detail">
          <h2>{props.project.title}</h2>
          <h3>{props.project.sub_title}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className = 'bg-primary'>
        <img src = {props.project.img_url} className="d-inline"></img>
        <article className="d-inline">
          {props.project.summary}
        </article>
        <article className="d-inline">
          {props.project.tech_sheet}
        </article>
      </Modal.Body>
      <Modal.Footer className = 'bg-primary'>
        {props.project.site_url && (
          <a
            href={props.project.site_url}
            className={`btn btn-outline-light ${styles.modal_btn}`}
            target="_blank"
            
          >
            Visit website
          </a>
        )}
        
        {props.project.github_url && (

          <a
            href={props.project.github_url}
            className={`btn btn-outline-light ${styles.modal_btn}`}
            target="_blank"
          >
              Check source code on GitHub
          </a>
        )}
        <Button
          onClick={props.onHide}
          variant="outline-light"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}