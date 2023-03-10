import React from "react";
import '../stylesheets/Navbar.css'

function NavigationBar () {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a className="navbar-brand" href="#home">Crypto Converter</a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#SocialMedia'>Social Media Links</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;