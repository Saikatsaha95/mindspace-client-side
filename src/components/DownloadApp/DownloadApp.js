import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/aboutus-img-2.jpg";
import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <div className="mb-5 bottom-section">
      <Container>
        <Row className="align-items-center g-3">
          <Col md={6} className="me-auto">
            <img className="img-fluid" src={img} alt="" />
          </Col>
          <Col md={5} className="right-column">
            <h1 className="tryapp-text">Try Mindspace for free</h1>
            <p className="mt-4">
              Download the Headspace app or sign up online to start meditating
              today.
            </p>

            <button className="btn btn-style btn-danger ms-5 mt-5 p-3 border-rounded fw-bold w-75">
              Start Your Free Trial
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DownloadApp;
