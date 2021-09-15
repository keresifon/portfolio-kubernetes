import React from 'react';
import Experience from './Experience';
import { Accordion, Card } from 'react-bootstrap'
import Skills from './Skills';
import Education from './Education';
import Certification from './Certifications';

function About(props) {
	return (

        <div className="alert border vh-80">
		<div >
        A Software Engineer with 19+ years' experience building web applications. 
        DevOps Engineer with Full Stack experience.  
        Led the design of the flagship educational product for Socketworks Limited. Joined as a web developer and over the years, rose to lead the company's technology team! A father of three adorable girls.

		</div>
        <div>
        
<Accordion >
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" >
    => Work Experience
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><Experience /></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    => Skills
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body><Skills/></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    => Education
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body><Education/></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    => Certifications
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body><Certification/></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

        </div>
        
        
        </div>
	);
}

export default About;
