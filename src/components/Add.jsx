import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(contacts);
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );
    const checkMobile = contacts.find(
      (contact) => contact.mobile === parseInt(mobile) && contact
    );
    if (!name || !email || !mobile || !address) {
      return toast.warning("Please fill all fields!");
    } else if (checkEmail) {
      return toast.error("This email already Exists!");
    } else if (checkMobile) {
      return toast.error("This mobile already Exists!");
    }
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name:name,
      email:email,
      mobile:parseInt(mobile),
      address:address
    }
    console.log(data);
    dispatch({ type: 'ADD_CONTACT', payload: data })
    toast.success('Sucessfully data added!')
    navigate('/');
  }
  return (
    <>
      <div className="container">
        <h5 className="display-5 text-center mt-3">Add Details</h5>
        <div className="row">
          <div className="col-md-6 shadow mx-auto p-5 text-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  name="mobile"
                  className="form-control"
                  id="mobile"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
