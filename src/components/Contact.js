import React from "react";
import { useState } from "react";
import '../stylesheets/Contact.css'
import emailjs from '@emailjs/browser';

function Contact () {

  const [values, setValues] = useState({name:"", emailAddress:"", message:""});

  function handleSubmit (event) {
    event.preventDefault();
    console.log(values)
    var templateParams = {name: values.name, emailAddress: values.emailAddress, message:values.message};
    emailjs.send('service_8fe3vzj','template_zktlvwp',templateParams,'R2V9o4aeqtE1jr_RJ')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
    setValues({name:"", emailAddress:"", message:""});
  }

  function handleChange (evt) {
    const value = evt.target.value;

    setValues({
      ...values,
      [evt.target.id]: value});

    
  }

  return(
    <div id='Contact' className="container-fluid contact-container">
      <div className="row text-center">
        <div className="contact-title">
          <h1>Contact me</h1>
        </div>
        <div className="contact-subtitle">
          <h3>If you are interested to reaching out to me, please fill in the form</h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-sm-12 contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-control" id="name" type="text" placeholder="Name" onChange={handleChange}/>
            </div>
            {/* Email address input */}
            <div className="mb-3">
              <label className="form-label" htmlFor="emailAddress">Email Address</label>
              <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" onChange={handleChange} />
            </div>
            {/* Message input  */}
            <div className="mb-3">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-control text-contact" id="message" type="text" placeholder="Message" onChange={handleChange}></textarea>
            </div>
            {/* Form submit button */}
            <div className="d-grid">
              <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;