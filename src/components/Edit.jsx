import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Edit = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
    const dispatch = useDispatch();
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(contact => contact.id === parseInt(id))
  
  useEffect(() =>
  {
    if (currentContact)
    {
      setName(currentContact.name)
      setEmail(currentContact.email);
      setMobile(currentContact.mobile);
       setAddress(currentContact.address);
  }
  },[currentContact])
   const handleSubmit = (e) => {
     e.preventDefault();
     const checkEmail = contacts.find(
       (contact) => contact.id === parseInt(id) && contact.email === email
     );
     const checkMobile = contacts.find(
       (contact) => contact.id === parseInt(id) && contact.mobile===mobile
     );
     if (!name || !email || !mobile || !address) {
       return toast.warning("Please fill all fields!");
     }  
     const data = {
       id: parseInt(id),
       name: name,
       email: email,
       mobile: parseInt(mobile),
       address: address,
     };
     console.log(data);
     dispatch({ type: "UPDATE_CONTACT", payload: data });
     toast.success("Sucessfully updated added!");
     navigate("/");
   };
  return (
    <>
      <div className="container">
        {currentContact ? (
          <>
            <h5 className="display-5 text-center mt-3">Update Details</h5>
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
          </>
        ) : (
          <h1 className="display-5 my-5 text-center"> ID {id} is not found</h1>
        )}
      </div>
    </>
  );
}

export default Edit