import React, { useState } from 'react';
import './Confirm.css';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";

import { Link } from 'react-router-dom';
const Confirm= () => {

  return (
    <>
    <Navbar/>
    <div className="loading">
    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
        <circle class="circle-loading" cx="62" cy="62" r="59" fill="none" stroke="hsl(271, 76%, 74%)" stroke-width="6px"></circle>
        <circle class="circle" cx="62" cy="62" r="59" fill="none" stroke="hsl(271, 76%, 53%)" stroke-width="6px" stroke-linecap="round"></circle>
        <polyline class="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="hsl(271, 76%, 53%)" stroke-width="6px" stroke-linecap="round"></polyline>
    </svg>
    </div>
    <div id='oConf'>
        <h4>Order Confirmed!</h4>
        <h2>Thanks for shopping with us...</h2>
        <h3>Delivered by : 5 June</h3>
        <h3>Sold by : Palak Gupta</h3>
    </div>
    <Footer/>
    </>
  );
};

export default Confirm;