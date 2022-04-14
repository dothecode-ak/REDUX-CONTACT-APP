import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-5 d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/add" className="btn btn-outline-dark">
              Add
            </Link>
          </div>
          <div className="col-md-6 mx-auto">Welcome to contact book</div>
        </div>
      </div>
    </>
  );
}

export default Home