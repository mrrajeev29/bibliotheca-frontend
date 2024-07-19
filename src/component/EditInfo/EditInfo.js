import { Link } from "react-router-dom";
import "./Editinfo.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const EditInfo= () => {
    return (
      <>
      <Navbar/>
        <div className="container1">
          <div className="sidebar1">
            <div className="profile1">
              <div className="avatar1"></div>
              <p>Hello, Kalpana Raj</p>
            </div>
            <div className="menu1">
              <Link to="/profile"><button>Go Back</button></Link>
              <Link to="/orderhistory"><button>My Orders</button></Link>
              <Link to="/yourbasket"><button>Basket</button></Link>
              <Link to="/faq"><button>FAQ</button></Link>
              <Link to="/"><button>Logout</button></Link>
            </div> 
          </div>
          <div className="main-content">
            <h2>Personal Information</h2>
            <div id="pForm" action="/profile">
              <div className="form-group">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <div className="gender-options">
                  <input type="radio" id="male" name="gender" value="male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" id="female" name="gender" value="female" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Credit Card Number</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Bank Name</label>
                <input type="text" />
              </div>
              <Link to="/profile"><button type="submit">Save</button></Link>
              </div>
          </div>
        </div>
        <Footer/>
        </>
      );
    }
    

export default EditInfo;