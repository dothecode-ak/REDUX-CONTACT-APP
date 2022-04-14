import React from 'react'
import { Link, useParams } from "react-router-dom";
const Edit = () => {

  const { id } = useParams();
  console.log(id)
  return (
    <>
      <div className="container">
        <h5 className="display-5 text-center mt-3">Update Details</h5>
        <div className="row">
          <div className="col-md-6 shadow mx-auto p-5 text-center">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  name="mobile"
                  className="form-control"
                  id="mobile"
                  placeholder="Mobile"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-block btn-dark m"
                  id="address"
                  value="Update"
                />
                <Link to="/" className='btn btn-danger ms-3'>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit