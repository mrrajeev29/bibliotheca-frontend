import { Link } from "react-router-dom";
import "./profile.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Profile= () => {
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
              <Link to="/mainpage"><button >Home</button></Link>
              <Link to="/orderhistory"><button>My Orders</button></Link>
              <Link to="/yourbasket"><button>Basket</button></Link>
              <Link to="/faq"><button>FAQ</button></Link>
              <Link to="/"><button>Logout</button></Link>
            </div>
          </div>
          <div className="main-content">
            <h2>Personal Information</h2>
            <div id="pForm">
              <div className="form-group">
                <label>Name</label>
                <h3>Kalpana Raj</h3>
              </div>
              <div className="form-group">
                <label>Gender</label>
                <h3>Can't say</h3>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <h3>Kalpana@gmail.com</h3>
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <h3>9898989898</h3>
              </div>
              <div className="form-group">
                <label>Address</label>
                <h3>Can't share private things</h3>
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <h3>909090</h3>
              </div>
              <div className="form-group">
              <label>Credit Card Number</label>
                <h3>7734 8321 8329</h3>
              </div>
              <div className="form-group">
                <label>CVV</label>
                <h3>2323</h3>
              </div>
              <div className="form-group">
                <label>Bank Name</label>
                <h3>Mai ku btau</h3>
              </div>
              <Link to="/editinfo"><button type="submit">Edit Information</button></Link>
            </div>
          </div>
        </div>
        <Footer/>
        </>
      );
    }
    

export default Profile;
