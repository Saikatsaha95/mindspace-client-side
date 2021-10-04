import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/aboutus-img-1.jpg";
import "./AboutMindspace.css";

const AboutMindspace = () => {
  return (
    <div className="top-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={5} className="me-5 left-column">
            <h1>About MindSpace</h1>
            <p className="mt-4">
              MindSpace was officially launched in 2010 as an events company,
              but attendees wanted to take what they learned home with them. Our
              small team decided to make all the techniques available online so
              more people could experience the benefits of meditation anytime,
              anywhere. And that blossomed into the Mindspace you see today:
              guided meditations, animations, articles and videos, all in the
              distinct Mindspace style.
            </p>
          </Col>
          <Col md={6} className="ms-auto">
            <img className="img-fluid" src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMindspace;
