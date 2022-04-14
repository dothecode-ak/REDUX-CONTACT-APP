import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const contacts = useSelector((state) => state);
  const disptach = useDispatch();
  console.log(contacts);
  const contactDelete = (id)=>
  {
    disptach({ type: 'DELETE_CONTACT', payload: id })
     toast.success("Sucessfully Deleted data!");
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="my-5 d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/add" className="btn btn-outline-dark">
              Add
            </Link>
          </div>
          <div className="col-md-6 mx-auto">
            <table className="table table-hover">
              <thead className="text-white bg-dark text-center">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, id) => (
                  <tr>
                    <td>{id + 1}</td>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.mobile}</td>
                    <td>{c.address}</td>
                    <td>
                      <Link
                        to={`/edit/${c.id}`}
                        className="btn btn-small btn-success mr-2"
                      >
                        Edit
                      </Link>
                      <button type="button"
                        onClick={(id) => contactDelete(c.id)}
                        className="btn btn-small btn-danger mr-2 ms-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
