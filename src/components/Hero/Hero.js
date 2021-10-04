import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../images/banner.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <Container>
          <Row className="align-items-center g-5 ">
            <Col md={5} className="me-5 left-column">
              <h1 className="title-text fw-bold">Make Your Mind A Priority.</h1>
              <h4 className="mt-4">
                Do not always rely on medication, try meditation. Live a more
                healthy and productive life.
              </h4>

              <button className="btn btn-style btn-danger mt-5 p-3 border-rounded fw-bold w-75">
                Try For Free
              </button>
            </Col>
            <Col md={6} className="ms-auto">
              <img src={img} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
