import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand ms-5">
          Contack Book
        </Link>
      </nav>
    </div>
  );
}

export default Navbar