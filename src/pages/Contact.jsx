import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
        <h3>Please, don't hesitate to get in touch with me:</h3>
        </Row>
      
        <h5>My email address: </h5>
        <Link to="#" role="button" className="btn btn-link">
         kirrena@gmail.com 
        </Link>
        <h5>My gitHub site: </h5>
        <Link to="https://github.com/Kirrena" role="button" className="btn btn-link">
        https://github.com/Kirrena
        </Link>
        <h5>My linkedIn site: </h5>
        <Link to="https://github.com/Kirrena" role="button" className="btn btn-link">
        https://www.linkedin.com/in/renata-kiraly-a545292a8/
        </Link>
        <h5>My CV: </h5>
        <Link to="../../images/Renata_Kiraly_CV.pdf" role="button" className="btn btn-link">
        CV
        </Link>
      
      </Container>


    </div>
  );
}

export default Contact;