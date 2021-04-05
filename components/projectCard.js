'use strict'
import React from 'react'
import ProjectDetailModal from './projectDetailModal.js'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function project (props){
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <Card>
      <Card.Img variant="top" src={props.project.img_url} alt={props.project.title}/>
      <Card.Body>
        <Card.Title>{props.project.title}</Card.Title>
        <Card.Text>{props.project.summary}</Card.Text>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        See project details
      </Button>
      </Card.Body>
    </Card>
      

      <ProjectDetailModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={props.project}
      />
    </>
  );
}
