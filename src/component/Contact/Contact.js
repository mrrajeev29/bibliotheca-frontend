import "./Contact.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact= () => {
    return(
        <>
        <Navbar/>
        <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p><b>Connect us for asking any query or if you have any complain
            then please fill this form. We will contact you as soon as possible </b>
          </p>
        </div>
        <div className="container-contactus">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p style={{color:"white"}}><b>Vellore Institute of Technology,<br/>Chennai,Tamil Nadu,<br/>624001</b></p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Phone</h3>
                <p style={{color:"white"}}><b>+91 6206409201</b></p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Email</h3>
                <p style={{color:"white"}}><b>bibliotheca.pvt.ltd@gmail.com</b></p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Mesaage</h2>
              <div className="inputBox">
                <input type="text"  required/>
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text"  required/>
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input type="text"  required/>
                <span>Phone Number</span>
              </div>
              <div className="inputBox">
                <textarea required/>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
              <input type="submit"  value="Send" required/>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
      </>
    )
};

export default Contact;