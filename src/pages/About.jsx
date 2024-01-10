import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';



function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>This is me...</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am excited to share that this month, in January, I am in the final stages of completing an intensive frontend development bootcamp. This experience has been a journey of growth, allowing me to refresh and update the knowledge I gained during my university studies several years ago.
            </p>
            <p>
            The bootcamp has provided me with the latest tools and technologies in frontend development, preparing me for the next phase of my career.
            I am incredibly enthusiastic about putting my acquired knowledge to the test in real-world scenarios and continuing to elevate my skills.	
            </p>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
    

export default About;