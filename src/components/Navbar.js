import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"wheat", fontFamily:"cursive"}}>
      Ritzyware
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Web Development
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Native and Hybrid App
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                LYM System
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Web Hosting
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
            AboutUs
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-light " type="submit">
          Portfolio
        </button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar