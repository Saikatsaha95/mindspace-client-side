import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import img from "../../images/sign-up.jpg";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="page-container">
      <div className="mt-5">
        <Container>
          <Row className="align-items-center g-1">
            <Col md={6} className="me-auto">
              <img className="img-fluid" src={img} alt="" />
            </Col>
            <Col md={5} className="sign-up-column">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold fs-5">
                    Email address
                  </Form.Label>
                  <Form.Control
                    className="inputstyle p-2"
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold fs-5">Password</Form.Label>
                  <Form.Control
                    className="inputstyle p-2"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  className="btn btn-success w-25 fw-bold"
                  variant="primary"
                  type="submit"
                >
                  Sign In
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
