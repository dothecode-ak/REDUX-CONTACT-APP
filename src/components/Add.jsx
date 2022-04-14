import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const contacts = useSelector((state) => state)
  console.log(contacts);
  return (
    <>
      <div className="container">
        <h5 className="display-5 text-center mt-3">Add Details</h5>
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
                  className="btn btn-block btn-dark"
                  id="address"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
