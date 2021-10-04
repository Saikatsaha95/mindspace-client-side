import React from "react";
import { Row } from "react-bootstrap";
import AllCoursesCard from "../AllCoursesCard/AllCoursesCard";
import useCourses from "../../Hooks/useCourses";

const AllCourses = () => {
  const [courses, setCourses] = useCourses();
  console.log(courses);
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 text-danger">Select your Course</h1>
      <Row md={3} className="g-4">
        {courses.map((course) => (
          <AllCoursesCard key={course.id} course={course}></AllCoursesCard>
        ))}
      </Row>
    </div>
  );
};

export default AllCourses;
