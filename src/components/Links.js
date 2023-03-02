import React from "react";
import '../stylesheets/Links.css';
import '../App.css';
import Linksto from "./LinkTo";

function Links () {
  return(
    <footer id="Contact" className="container-fluid links-container mt-auto">
      <div className="container">
        <div className="col-sm social-media ">
          <div className="row text-center align-middle">
            <Linksto classText="bi bi-envelope" url="mailto:ferra.tomy@gmail.com" Text="Email"/>
            <Linksto classText="bi bi-linkedin" url="https://www.linkedin.com/in/tomasmariaferrari/" Text="LinkedIn"/>
            <Linksto classText="bi bi-whatsapp" url="https://wa.me/5491154700070" Text="Whatsapp"/>
            <Linksto classText="bi bi-github" url="https://github.com/tomyferra" Text="Github"/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Links;