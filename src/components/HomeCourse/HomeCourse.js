import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useCourses from "../../Hooks/useCourses";
import HomeCard from "../HomeCard/HomeCard";

const HomeCourse = () => {
  const [courses, setCourses] = useCourses();

  return (
    <div>
      <div className="container">
        <h2 className="text-center text-danger fw-bold my-5">Our Courses</h2>
        <Row md={2} className="g-4">
          {courses.slice(0, 4).map((course) => (
            <HomeCard key={course.id} course={course}></HomeCard>
          ))}
        </Row>
        <div className="text-center">
          <NavLink to="/services">
            <button className="btn btn-outline-danger my-5 btn-show-more fw-bold">
              More Courses<i class="fas fa-arrow-right ms-2"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
