import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import Rating from "react-rating";
import "./HomeCard.css";

const HomeCard = (props) => {
  const { title, img, price, category, rating } = props.course;

  return (
    <Col>
      <Card className=" single-card shadow-lg">
        <Card.Img className="img-fluid img-size" variant="top" src={img} />
        <Card.Body className="mt-3">
          <table className="fs-5">
            <tbody>
              <tr>
                <th>Course Name:</th>
                <td>{title}</td>
              </tr>
              <tr>
                <th>Category: </th>
                <td>{category}</td>
              </tr>
              <tr>
                <th>Rating: </th>
                <td>
                  <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star "
                    readonly
                  />
                </td>
              </tr>
              <tr>
                <th>Price: </th>
                <td>${price}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5 btn-area">
            <button className="me-2 btn btn-showdetails">
              {" "}
              <i class="fas fa-info-circle me-1"></i>Show Details
            </button>
            <button className="btn btn-enrollnow">
              <i class="fas fa-cart-plus me-1"></i>Enroll Now
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomeCard;
