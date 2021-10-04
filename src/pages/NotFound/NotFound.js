import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center notfound-container">
      <div className="text-center">
        <h1>404</h1>
        <h3>Not Found</h3>
        <p>The page you are looking for does not exist</p>
        <NavLink to="/home">
          <button className="btn btn-warning">Back to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
